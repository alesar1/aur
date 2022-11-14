# Maintainer : Luna Jernberg <droidbittin@gmail.com>
# Contributor: Jonathon Fernyhough <jonathon+m2x+dev>
# Contributor: Figue <ffigue@gmail.com>
# Contributor: Dct Mei <dctxmei@yandex.com>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Jan Alexander Steffens (heftig) <heftig@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgbase=firefox-esr
pkgname=(firefox-esr)
pkgver=102.5.0
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org, Extended Support Release"
arch=(x86_64)
license=(MPL GPL LGPL)
url="https://www.mozilla.org/en-US/firefox/enterprise/"
depends=(gtk3 libxt mime-types dbus-glib ffmpeg nss ttf-font libpulse)
makedepends=(unzip zip diffutils yasm mesa imake inetutils xorg-server-xvfb
             autoconf2.13 rust clang llvm jack nodejs cbindgen nasm
             python lld dump_syms
             wasi-compiler-rt wasi-libc wasi-libc++ wasi-libc++abi)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'xdg-desktop-portal: Screensharing with Wayland')
options=(!emptydirs !makeflags !strip !lto !debug)
source=(https://archive.mozilla.org/pub/firefox/releases/${pkgver}esr/source/firefox-${pkgver}esr.source.tar.xz{,.asc}
        cbindgen-0.24.0.diff arc4random.diff
        $pkgname.desktop identity-icons-brand.svg)
validpgpkeys=('14F26682D0916CDD81E37B6D61B7B526D98F0353') # Mozilla Software Releases <release@mozilla.com>

# Google API keys (see http://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact foutrelis@archlinux.org for
# more information.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM

# Mozilla API keys (see https://location.services.mozilla.com/api)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact heftig@archlinux.org for
# more information.
_mozilla_api_key=e05d56db0a694edc8b5aaebda3f2db6a

prepare() {
  mkdir -p mozbuild
  cd firefox-$pkgver

  echo "${noextract[@]}"

  # Unbreak build with cbindgen 0.24.0
  patch -Np1 -i ../cbindgen-0.24.0.diff

  # Fix arc4random
  patch -Np1 -i ../arc4random.diff

  echo -n "$_google_api_key" >google-api-key
  echo -n "$_mozilla_api_key" >mozilla-api-key

  cat >../mozconfig <<END
ac_add_options --enable-application=browser
mk_add_options MOZ_OBJDIR=${PWD@Q}/obj

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-hardening
ac_add_options --enable-optimize
ac_add_options --enable-rust-simd
ac_add_options --enable-linker=lld
ac_add_options --disable-elf-hack
ac_add_options --disable-bootstrap
ac_add_options --with-wasi-sysroot=/usr/share/wasi-sysroot

# Branding
ac_add_options --enable-official-branding
ac_add_options --enable-update-channel=release
ac_add_options --with-distribution-id=org.archlinux
ac_add_options --with-unsigned-addon-scopes=app,system
ac_add_options --allow-addon-sideload
ac_add_options --with-app-name=$pkgname
export MOZILLA_OFFICIAL=1
export MOZ_APP_REMOTINGNAME=$pkgname
export MOZ_APP_PROFILE="mozilla/firefox-esr"

# Keys
ac_add_options --with-google-location-service-api-keyfile=${PWD@Q}/google-api-key
ac_add_options --with-google-safebrowsing-api-keyfile=${PWD@Q}/google-api-key
ac_add_options --with-mozilla-api-keyfile=${PWD@Q}/mozilla-api-key

# System libraries
ac_add_options --with-system-nspr
ac_add_options --with-system-nss

# Features
ac_add_options --enable-alsa
ac_add_options --enable-jack
ac_add_options --enable-crashreporter
ac_add_options --disable-updater
ac_add_options --disable-tests
END
}

build() {
  cd firefox-$pkgver

  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export MOZ_ENABLE_FULL_SYMBOLS=1
  export MACH_BUILD_PYTHON_NATIVE_PACKAGE_SOURCE=pip

  export MOZ_BUILD_DATE=$(head -1 sourcestamp.txt)
  export RUSTFLAGS="-C debuginfo=1"

  # LTO needs more open files
  ulimit -n 4096

  # Do 3-tier PGO
  echo "Building instrumented browser..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END
  ./mach build

  echo "Profiling instrumented browser..."
  ./mach package
  LLVM_PROFDATA=llvm-profdata \
    JARLOG_FILE="$PWD/jarlog" \
    xvfb-run -s "-screen 0 1920x1080x24 -nolisten local" \
    ./mach python build/pgo/profileserver.py

  stat -c "Profile data found (%s bytes)" merged.profdata
  test -s merged.profdata

  stat -c "Jar log found (%s bytes)" jarlog
  test -s jarlog

  echo "Removing instrumented browser..."
  ./mach clobber

  echo "Building optimized browser..."
  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
END
  ./mach build

  echo "Building symbol archive..."
  ./mach buildsymbols
}

package_firefox-esr() {
  cd firefox-$pkgver
  DESTDIR="$pkgdir" ./mach install

  local vendorjs="$pkgdir/usr/lib/$pkgname/browser/defaults/preferences/vendor.js"
  install -Dvm644 /dev/stdin "$vendorjs" <<END
// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable extensions in the application directory
pref("extensions.autoDisableScopes", 11);
END

  local distini="$pkgdir/usr/lib/$pkgname/distribution/distribution.ini"
  install -Dvm644 /dev/stdin "$distini" <<END
[Global]
id=archlinux
version=1.0
about=Mozilla Firefox ESR for Arch Linux

[Preferences]
app.distributor=archlinux
app.distributor.channel=$pkgname
app.partner.archlinux=archlinux
END

  local i theme=official
  for i in 16 22 24 32 48 64 128 256; do
    install -Dvm644 browser/branding/$theme/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/$pkgname.png"
  done
  install -Dvm644 browser/branding/$theme/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/$pkgname.png"
  install -Dvm644 browser/branding/$theme/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/$pkgname.png"
  install -Dvm644 browser/branding/$theme/content/about-logo.svg \
    "$pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg"
  install -Dvm644 ../identity-icons-brand.svg \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/$pkgname-symbolic.svg"

  install -Dvm644 ../$pkgname.desktop \
    "$pkgdir/usr/share/applications/$pkgname.desktop"

  # Install a wrapper to avoid confusion about binary path
  install -Dvm755 /dev/stdin "$pkgdir/usr/bin/$pkgname" <<END
#!/bin/sh
exec /usr/lib/$pkgname/firefox-esr "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srfv "$pkgdir/usr/bin/$pkgname" "$pkgdir/usr/lib/$pkgname/firefox-bin"

  # Use system certificates
  local nssckbi="$pkgdir/usr/lib/$pkgname/libnssckbi.so"
  if [[ -e $nssckbi ]]; then
    ln -srfv "$pkgdir/usr/lib/libnssckbi.so" "$nssckbi"
  fi

  export SOCORRO_SYMBOL_UPLOAD_TOKEN_FILE="$startdir/.crash-stats-api.token"
  if [[ -f $SOCORRO_SYMBOL_UPLOAD_TOKEN_FILE ]]; then
    make -C obj uploadsymbols
  else
    cp -fvt "$startdir" obj/dist/*crashreporter-symbols-full.tar.zst
  fi
}

_package_i18n() {
  pkgdesc="$2 language pack for Firefox ESR"
  depends=("firefox-esr>=$pkgver")
  install -Dm644 firefox-esr-i18n-$pkgver-$1.xpi \
    "$pkgdir/usr/lib/firefox-esr/extensions/langpack-$1@firefox.mozilla.org.xpi"
}

_languages=(
  'ach    "Acholi"'
  'af     "Afrikaans"'
  'an     "Aragonese"'
  'ar     "Arabic"'
  'ast    "Asturian"'
  'az     "Azerbaijani"'
  'be     "Belarusian"'
  'bg     "Bulgarian"'
  'bn     "Bengali"'
  'br     "Breton"'
  'bs     "Bosnian"'
  'ca-valencia "Catalan (Valencian)"'
  'ca     "Catalan"'
  'cak    "Maya Kaqchikel"'
  'cs     "Czech"'
  'cy     "Welsh"'
  'da     "Danish"'
  'de     "German"'
  'dsb    "Lower Sorbian"'
  'el     "Greek"'
  'en-CA  "English (Canadian)"'
  'en-GB  "English (British)"'
  'en-US  "English (US)"'
  'eo     "Esperanto"'
  'es-AR  "Spanish (Argentina)"'
  'es-CL  "Spanish (Chile)"'
  'es-ES  "Spanish (Spain)"'
  'es-MX  "Spanish (Mexico)"'
  'et     "Estonian"'
  'eu     "Basque"'
  'fa     "Persian"'
  'ff     "Fulah"'
  'fi     "Finnish"'
  'fr     "French"'
  'fy-NL  "Frisian"'
  'ga-IE  "Irish"'
  'gd     "Gaelic (Scotland)"'
  'gl     "Galician"'
  'gn     "Guarani"'
  'gu-IN  "Gujarati (India)"'
  'he     "Hebrew"'
  'hi-IN  "Hindi (India)"'
  'hr     "Croatian"'
  'hsb    "Upper Sorbian"'
  'hu     "Hungarian"'
  'hy-AM  "Armenian"'
  'ia     "Interlingua"'
  'id     "Indonesian"'
  'is     "Icelandic"'
  'it     "Italian"'
  'ja     "Japanese"'
  'ka     "Georgian"'
  'kab    "Kabyle"'
  'kk     "Kazakh"'
  'km     "Khmer"'
  'kn     "Kannada"'
  'ko     "Korean"'
  'lij    "Ligurian"'
  'lt     "Lithuanian"'
  'lv     "Latvian"'
  'mk     "Macedonian"'
  'mr     "Marathi"'
  'ms     "Malay"'
  'my     "Burmese"'
  'nb-NO  "Norwegian (Bokmål)"'
  'ne-NP  "Nepali"'
  'nl     "Dutch"'
  'nn-NO  "Norwegian (Nynorsk)"'
  'oc     "Occitan"'
  'pa-IN  "Punjabi (India)"'
  'pl     "Polish"'
  'pt-BR  "Portuguese (Brazilian)"'
  'pt-PT  "Portuguese (Portugal)"'
  'rm     "Romansh"'
  'ro     "Romanian"'
  'ru     "Russian"'
  'si     "Sinhala"'
  'sk     "Slovak"'
  'sl     "Slovenian"'
  'son    "Songhai"'
  'sq     "Albanian"'
  'sr     "Serbian"'
  'sv-SE  "Swedish"'
  'ta     "Tamil"'
  'te     "Telugu"'
  'th     "Thai"'
  'tl     "Tagalog"'
  'tr     "Turkish"'
  'trs    "Chicahuaxtla Triqui"'
  'uk     "Ukrainian"'
  'ur     "Urdu"'
  'uz     "Uzbek"'
  'vi     "Vietnamese"'
  'xh     "Xhosa"'
  'zh-CN  "Chinese (Simplified)"'
  'zh-TW  "Chinese (Traditional)"'
)
_url=https://archive.mozilla.org/pub/mozilla.org/firefox/releases/${pkgver}esr/linux-x86_64/xpi

for _lang in "${_languages[@]}"; do
  _locale=${_lang%% *}
  _pkgname=firefox-esr-i18n-${_locale,,}

  pkgname+=($_pkgname)
  source+=("firefox-esr-i18n-$pkgver-$_locale.xpi::$_url/$_locale.xpi")
  eval "package_$_pkgname() {
    _package_i18n $_lang
  }"
done

# Don't extract languages
noextract=()
for _src in "${source[@]%%::*}"; do
    case "$_src" in
      *.xpi) noextract+=("$_src") ;;
    esac
done

sha512sums=('f4e105209c61e9537ddc90afdb05ede0a31caceb9b164d96276c811abbd646d14bc246c00caa386c0b0561055096d30b298329c69270dd085b943bdbc3a91a13'
            'SKIP'
            '3526402ccae1f0428f2e45bae8d0b2cb909ac2698bc3508b692b827839ccb21203ce414206039776f6ce946fc53e636290b7870e9886284d5e9d1e8ad050aac9'
            '9cbc214c3ae7b93ef6c0573194dc7600dd0b4bb6f2653693d75b08475b7c3d65f6a181055060848143b488207c39af3fdb7382bb45de5264b2daedcb62bf97f2'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            '6c69a3ba9632b10c9ad1e45a00b5c9a91d9f4341486bdc20ebf473ba87791eadd3323e5764f9b74bf4c826f5dd5fe4e769175fd7c1486cf341f54ec61116ed3b'
            'f2d52b89eb19d9c03d92a6cfee0e392d9b50ca1fd0368b1f86842b64f2713fab143d454d322f2dcc52f349df91589058f76ab8dbfae317f1597ecc0a5d69de30'
            '8b866c8c2dc45a494f46e6d61024dac55def58ad1470f0acad750aab2da9f64e5a3bea24daef8f54228a4967f83c444287bc1f3ca4c23aee689bc8b40781ed85'
            'a550a497dad738dc4ade42b72ba4f2823f7fae47e4805680ccd723a4cd5df6897ab45de44524ebcd73b4bc823c9c779a7ad81c8d39508a157119ab60d5d76ed4'
            '08de506e490fcacd32e690799eae5ddce94239c7ee16cdf4631995f26ed4afe4bfc20f5349ed5d47e25d3a943c38a4bf43cf1dff7fe15ac8d2fcdb8c62ff6a93'
            'ee1ba86aa69793b97ff21d1ae4dedd50a7ef527f67db9ceb9955349367e855683dfbeb8b1c45a3560184132951cb8bf4dbb57f705466eb47c0b254abf6cdf085'
            '4232776d98d9e635b019e52f8147616fb7263b07657eda35d5c9070add728dec2f1de8c2cb29b80c73f2a220310812fc816a6464d6351ac46b6fd3ff3dd80aa2'
            '99c9b16110b5e309c35710a4264a7bf0521f2d10d2b955def2a673c2dfdbc906800eec75545dca3d89e89ca5c8800fd00db8b76aadefa821b282d74c145341cf'
            'e8a954f74d9066057961242d86270fc0fa834e5db9637fda2e60055b6a8325245bea80639627bc11cebae3deac6a4e7234382673e3311fd8b54e4c9c682c89fc'
            'f3f30caf5a628d8136e22aa9ccae5ae77c902a845325f906c0cc18f2296d06436116b821636592ad89cc60b3f33194262898e09586601f4a5c613d706c32d79f'
            '2f5ba8ffd334254d062b5248b33b442cedda8250092aa5773be0e171e83fb87386d05f27c73e6e05ef066a7890a07a5a3043f707ca62b9e2b125bb1caec6db2e'
            '6c0f7d9a09c4f8e1c68e79fb1eb0e5197d5dfd0050366b19aa193050940b047450b3932d4cadeecfc47da580a9eef8152d87d4aa04295cb817a8243547c0e6e3'
            '060ddd669523a5c22269340cbe23880df5fe9c124ed4d72b7f000ec2f4cbbd11d7f807659dcd78fc1146083c9d2419f8b7b2579bafee36eb4529eec29725d929'
            '80b6d1e9bd8ae9fde029315d8d66024480ddabbe5533a496c225af3f96ba1af7b555c9e329b55cf296a34a22d288d28a282f4f5de6547dd5087fa5d1a21e7fe2'
            'c2cea9b7bb5918f8f82cadb91433d786e4555b3e0faf0fb5178b6fb3940f0b2582b8c10b08d1d6ee2e47f9e75bcb956697d0c29a0d0d342667890712f4343fdb'
            'd33fe367201246f2eadf5a769730d22ad46f5e6b3435caa28c019725afd0d8a7428df58b2cb4fc3e20930f0b67ab84e4a09840b26b1529016ace37c1dbbaf423'
            'bab7d1dd313b1f7b57243298c6d9e2272a840e577c38489eb7948e8867f755c6ef0cc68f3c83da194071a18e09a252f666465b1111d80654ed95a79703504bb6'
            '2bdec0c76b467b71cb464681c8d6a22e1363d2e62cf1081e61fdc0376bb9740f853949f996727b6c3091d083e47d736457b0d21f4e22e8a2a58088a5302f23b0'
            'b94755615c6ccba762c4677568c708c882a4319dbb840094aa7ecca1207aa6667c2abc667fa0a3f076c1385c120dadf7724ec9957cc92d0f451b9f6f5b8dbfad'
            '5cbb0a0239857f5995e584f3e798c4ed9dfe0e31b587b83c55158d0909e7e77ae3ffc50c2981f67d33ccac361606d4981877dd2722e150b9775e2b9950b1e91d'
            'b6e48d858952603299abbc1864797be4c8fa77ae1cd569b8ca0b16ae7c9fac9212b309760910391a762ba290d5686d77829b02d1502b2c68fc3c843ce6a838ca'
            '62f343458a4f397a3d83d67b6c4d5ff04084ee0d6b06af20f8b9fc8fa6f0c76ecda4c1205b3f5cf72f5d7e254c53bb3b9ef091b45b4b5e1a8702f666ccc53296'
            '3d0c8c8c40de1f120de9d8d0c83332c1df1d6caec2d976a15a9a84e3ad6532137621c8180522b468730a25d72c7f1b3ea5095dc9dfac92129a65d0615e6f6af0'
            'e644acea98fe5424f4447e6253db17187790255ad9ae7ac5ea51e500fa8daa9d33e3f1bf8f0eb6ef1979320444c443e9ac426296744e765128b7c648ab19558f'
            'ff3ceb6608f6ad752e35c2504cfb8718798c67c0deb3a5242ca8dc1b717a7919f848e7596680290c960b16cb086e34ca0ee50899cf07bd958ed8f6aa96d26c43'
            '3d06d78682aee2a3f099e1a0f091f73574fe6830abdb3ce33aeb04819ccfb5f470295c0334638b12e0dd99bce877b6a4f502032372990dff8519b38a3dd7876f'
            '2e50629ba1115921cb1896d53e1af7d5eb92dc1f8b722263e5e02f7bc5f3ed9f5c30cf58091194a06836717f8a73183cfdcc3ea6e03409f69b9aff65b44a7d5c'
            '77726f1a3f76af11b75d41b3fa9ba1fc107e87339bbaa5b4472c9fe9424bf99e9477ad6bb12090167b4018fa529c99513ac66433fb6ad8ff273f9a5d32ed5b0e'
            '190ab22177ed814e829c68f521dce516b1c767ab47bb01f176f08c80c5f556d6bb1c672f1ee4f534c3abae644a0beb17e1dc22d986f5d53e63cca5da35eb23b4'
            '7667f1ae51528a2ade52c19dc8dbf52246143b35cdc61632933d238678acb9b71f447708594c4ea2c69f82c4bbaf929042e1df23ca812165fbb45fafa8af686f'
            'be28048d545685c9df94fa1958cd4cc92fae62c43a9112e7e71ee6ec668b34de1c13c915b44bb11d6026494213afd7c5b472f32a882e181f82be6f999e4cab33'
            '3c3fbf0e13420b52e322dd136e4d04b733c17548a951e99be295d78a310d8b965519a9ecab37b79066ee6eef230c25da1f8cfdff0666466b70db5f0e21c76940'
            '1ca8c01e4454a357e643802db02e16774495ba791639b73276c80a960e46b12327690434e9ea65c8d88151fc2754b1ec89a76c519424714228286d7e79b5a72d'
            'c6f191fc32f2ab3120d7ddf8ebe77f8a8972170dd4625afb1ca5cf4bbe392c8f392e3d2b67e7e83443cec6b2175494ddd3d81661f41685683afacaa876b7797e'
            'fc988e0e120e153bd1663cdab13975bc27a3e86a1740be9a1ba0fc75f3cb1dc06d739c873db56193d56c10a0b2874f2a5dab51c15335d3fb87e2542b96fffa93'
            'a1730fbe875f18cff992cacc285b8db209133b7dcd805c8fe524c58377c1d15fd880b487bd606163f11e8a9134569ef2be6fc7367ce72d3ac19aee4fb811b73d'
            'c21c298f9a8405b1f045240da83d4519d391ff56d6a0143f251579d82d40e8c946e5af356835fa2f5a90e798802f0d1b14a05af45a08d310a76e47333e944f30'
            '1758d382155156ccca237d1acc219d4383d3650930631afca98cff66c16b5dc409ef807cc02f69b031017bb88655d4e1c0ea23b904c9b75413408f7be39237ef'
            'c228614fe5cff10540deae2e5fc96867e572b4d62a379d0769e55bf0671c4b2e059572bca4c7f85363937442e75d1864de30e0730f7100d63f287d28785640fe'
            '7fff63125bbaf826d2e15fa103bbe3025f73427de43afac734ed7022dfcca08efe95524fcc65882a4790db3d19a8a8662834e9ca569a276bd3b2d13f9de9d0a1'
            '09ebdacd56f6cff8a99ae91866aa1aa0a0f1fb13b4cbe2abeec94d9f4d8cf30ff0c2c69858a422c5a18d593496ac01bbe0120c04b05078b4732652857e96c328'
            '5130f784ac671e2130126462a7ce836756a725f5ef4dd0455703d8401b8d29493e677c54b9d0cb3854215141e378b15e9ca6fa44363a460d5094cbc948ee8baa'
            'b473fc2cc1041f6cc6fe874f63462a42996f91de1d34e7d1eb044ca7b1e256003a8659a14f37914de05cecde4ddd7cff7370ca357f8728c262ef779f53facbe7'
            '87c7bc9da8f6abb6df2ae6259e4b3574ed7a64bec5507f7e3be0a00b042e4f3855e37530cf8345b57fdb3d97354073495f4972c0cf1bd64418e6ac980c495682'
            '88f00c8de0375568607edbe4c61d30f4b20f2b51a98a006e228bb7678378cf8c69f662fd208b6840aaab71cd5ae55b4e6ba824eef0708bdaf6bb0409965ad7ea'
            '83a86180dd786216302155667123a2183dfaf369b3f9bcf5f69010704c190d8766b5e8d4574854ccc088b396767ccf615356e1e9c09f72a6cfec3508ef727754'
            'e4a457e6e1a4e3aadc3846c494f7dcbcf4016ba7e2afb0d3958256fc47a249a35f1d433b77597910af108bb8e58efc9fb70887d6f8168329721458f29a7a5492'
            'e8c1cf0282a6edd95ca795f9d6a77b48af93fdc16150178900878d1afc2d79e5c7690f2ee1d3881a942b7061a6ca24f033bc728bf6424c0415ee7c48af715774'
            '40868d892ddc2aaa5ef86bdbd5afbfff6fa6de0158eeae580f1ce6f83a6b7ee42ba080c389e1b16c5021f29dba4a7c3c983c28c4495f39e8298b58323f55c843'
            '72cdbed8ac2c473bde825eecb415f75e309776d23b8fd0b8a6de4357f1bc14edfbc7d455b3dd3b1b20464953c74f98bd717e51d123b4cc78ee6768e4262f9f5c'
            'be06c437cb03af625e9aae3ff360b27257ba1abeb676004f0cb70a54b2f69cff666ba9c1a5dde2158a13213c6761d83024a4e9ddbbe896389e8cde17803ddc94'
            'a515e4018039198ac6407eab04d7611687f7201ce63aa008464b1be1c69e325b4fe2ea547925c8dc619e01171b0fa3fb1131a4782e899fd5b0528e03fb34a2ab'
            '462356e40f24fb367297421a035323fc5a416efdb5deeca4f84200f7995e0a7a107ef419da282a234646bab63e8b0feebae7d69789b46625ad7e806a93e7e9c8'
            '9cada5cec73feb711c43d2c83704481bfac66b616f86fa802baf6db601bb00805228643af58275c216e386f8ee823e0ed1366d8f1a5fc4d1b8db6b024ca31dbe'
            '501e1b94d0aa1570b0cd27d228d93c815d3a7c6ad3f971fb3c7054f29088b97060bf695910f840c904765c3644f22f1e25120f6bc8e5ba9130bc3f9ca9069049'
            '6c2ecfeeea8a415589f256eefef3d26f864a1af8104a620b86396f1e41c9b9ad39ee751f6e9c456a86c9c1a5d1aabd58bf8037370a225db0b55d7fe1c1f2e560'
            '34256d447ceb1c7dad0f5570989f7a1372d5af7d83597ae7f98ac18bdd7760694a818b442ac24d0bad57b773b16dd057b2126fe9a2ba0ae39cb3f5f747597c93'
            '284ca7a9aed581858a24e447f306dab4f824158cac9336a376aa10863c6e71cc9861fcda58de311ac74534f7cd116f04d8666741d8c9620745f3037d94e88f91'
            '31e3dda6a8dd7a9fc1e4305afd133f82702621e58609d1a7bfdf9c13367120079dd6436dd942172e4ff641e04dac40b497875d25a4f46b2f5b89b3a32b585306'
            '0c6bf6ce0ff721e848904842ec6bea54f18c4bfea0745d75be50439d80f6b50a06cebadc525298481b167668ab19e81f7f63cc4b8969c7d2cdcc331630447f44'
            'c2a30b6f04d9dec6b7890c8daa0b35da0c027bb5e34e0476ecf567ad39f8186a621abf2393153d1332585529a34e2c73bc553889f981ee0a623de0af257c9c03'
            '22f86ff9f47869e5f1f703dd1cd7e2dfa3e2338faba22faad55179b31a3800676334ba3c0c2be7c45f0c57e83c4e9bddb8ba4e2f5a957d06138f10e9c340fd26'
            '1224c4e16b3573405ce0a2e16056090716c061a46e0a72f81f407ac5a578fbef52474e9f4a090ae38d1d8181af3980863265a9341f93686fc7f34b07f01c8e0c'
            '03e820522bda322c7768df00bce854919419169901002b6feed455f691549d135b80ae06894efcb16e3e0968f07a25407761aa7a8e638d268363ea3ad2504017'
            '2066cdd8a342c163a475682ef9ffc81c30f156fdde7e929a718ae6f18fa12ee33901e056147485742a6782b43364ce995807ae426f66bbe07c32598d7045b256'
            'cbc8e7b75b411fb9d014cdc72b892d76ba5b37fdc599c50a15383dfb2b6185edef7c227260da6e8f72a2868abf51040ce6d9c64cfe074b1de903a056326915ac'
            'e57ea35bcf82816c33e8121f79fb7d16094937319244651b740c85731d1bb65a2551810466020abf6bb302e0f7f83ad10672ee7a0213ec144714491f8f7beb51'
            '8325edb3b13032a9284b30ad7709927832cf0d7f3d77141bfb25a88b2d096dbb72eb3c3b9f0c7adb6bf674564d1396a259d12a27275b32086ab01696cb76f338'
            '0b137bbfd5857f14c64a9701e423a5a4abb1d86525fb03c6a957d723a11bfca66a6e3f0470647df8e9b7e3fd1b5ab1ea1afa79cda2b6e16df7f72a9b11d1f5c3'
            'bc07451e61d249ec899bd48f814cb0f7884ae096e7fe3925d9ac1e61ae12059c1993935f26d43f6e40f5ff0e5b0b4445fddd65450d15e59734cbe794df1baf4a'
            '9d7c1ef0346d6139f136c17646c2d647f2559aa9ce1d423f5539f96a5d226734e3c8806da72e4bf0981b66e4682fe621401f518042c31252e61a47960fd19dbd'
            '9ca3c9aa4757f35be8b315c84b7a300e6e979796064b48950b6740d880c1c4ace599004b097be2febe0708a69d6a0a433ffb4e6a17ed2cdc6e847e3b841e9011'
            '681bb9bc8f4ace1b084a52739ed3a622274ae86bd8e32fe3e5584dfafcd02ae77b5ddfbaaa8cbfa203e5378a1df85e659e401df4e9ec3d7826ade47887c98502'
            '24a30fb12a370887d2b5463bf65fadbc630e44393852ed63b058d375854cf4b5f509865a4b54d8d456cfde5a3b645ae0ea1877cff39306ebf3d89b956b54be26'
            '5c58cdb81dc55e45386df546a51cdb24bc3dd247161737368bb9f6760628d2c60baf6606b23dd4cdd59827b52538311fe166f76f7420d88b58342c402d315d9c'
            'd52b392f2a39e2260f49d6e21a35179d9150326a8dda24a0faa588f850a4f3d4077699fa6d1e43b7d6b0763874ff7c2a814daad175122afd624541afe2b0746d'
            'd1496e355659f3a837c82548733561220e41af3897879a8b08a28843b7d31703a5224ec0880f45383b036ec51e8f1bdcc597d3e5476324f17c03601ff53690e8'
            '8d36ee9debed3f816ba74156be09e4b9a54ac61513aab415724a7e2c84d06bd0d85842e22ef07cdcbb9ace30f679990170f02b0afb523985c37575174647c651'
            'ac729f056644ac21d32cb0a7d4ad0d69d2aef8930909fe55563cd66147aab18ca7c1480e777835493785846f9851cf5134bf47ddb797dcb2fdef9d31c134a449'
            '3ec65e776216a2b815bd1ac006d7addfde37924d83d62fefef06ecaf3e24b003c9b1105c7aea261c192812aa13cda77a23518372392a055145ad0c4f8aeb13f7'
            'f4a6c9a411f5eacfcf43f50bb35716020db5042b5272504bede72401d863325a8c94e70341b685d550491cdf87f88f2bc7bded1c76f003ee4ccee822f2cbf38e'
            '6a3da502b576801da7acb31331524127f9728743733fd59a7719eb310b3055c2d093d47d1349eb87a4a249e748b1fb83eea70454a8e8c0d85515edd005636f93'
            '02cd907ac918aa27416d3192702881a5e448fb64d3212a81b6880bb7b0ef4ea3de97026ebe42ee91625dd9ef0487b53a6977a72322239987485dad6658db6892'
            '208c81ec5ad4f622e223baa0b548fc8a4e785a861c1b8f199766f9baf2b440bb3f042ace371612fb4c53af95d359ab6d866dda4e393333bce323cbbf3784061a'
            '0e8c7dc674a6f6b078b318a1c87f5dbe298c1f3499ace1e2f2f4dfd5796229a8cde02cd1edda5fea764975bb79d8b996ac041f17aef8975d12b58cef2ae7dc9a'
            '8cfbbd08c80ef81a0d9ec6c1d871227293ef5b7da8ffe37c0ae02ff26c36d955b20a1e234a765e1faf8c304802eec2b5674d8161ca542d95eb8af517b04aadc1'
            'd613c4a2ac5cb61518492420a8d46ff539bb170043cb46fab1b6e03ffd29f4e2f4bd50866dc9e158f285fe088cd24323312877c33b6caac42e64cce64053afe3'
            '8b01f631938b5b6b9f12dbc200ef90eaeb6cfc85b661be7d116f98bee0f09b2e404999fa8157081c742737d399b3702b05dace6340c4e197566cffee240d74a0'
            'a69f47a246983619be83ee7ca2bf4abb4385b5160be8ddc32f462b8bed8fa43e8ccaf05fc02b020427f796de18dae42592aa75d9e2a2a735bab3f7aad5214961'
            '63d5bd4d784f2300ae4ce9764123043d12e4b2b199ad842d2ed99c4679a3ed4e75fcab66d9bdcb4b6477ab6fd27e9be2d17a6404c41488130c3fcb7aff03c4ef'
            'e7d7c8188ab341935b60f31dd00f9ce21a71c4df0ad89ba10f16306146507a2a4a2a9ee906898d60aed4eb78e7c253bdc801435fddd325984988f18ca6b77fcd'
            '284586451e607af153278711d40c2823e3ed3043b5525a5ea97200de959d63f1269e54fe027909efe5b932224f56336c163fca83711e250406b8bf0b466cb591'
            '347e97f3734a272e42cff89157a7aecfa957422fd5ad70810d51d8e1a5f89696a812793db37ffe248fe99ddbb58d27df4b28665415f0c74949cda5df2359a10e'
            'aa2215fb36b9504cdee8b419bbde02ef78006024a1aa4b01abfdf575f8ef3e00ca49b9f7011e0c0ba354f422f1032bc168094e4b7a486bcd6654dc9b4a4f95bc'
            '1a3273bed3512b7ab95e77327a85b086e10807ee117a6221e3200dbace217f9b6d5df44bcdafe0a52e6b3c8c83f99b4c60cd00bc162a90fc8f588ea8578e578c'
            'c92ebe2b1ef5bd0aab3e213bad0e0d2d422704cbf61dd0c5c27e323af1436f927587b6586c051d2ac73cc33b5fe9730c1967297c9e355125f4064aa734f3ae41')


# vim:set sw=2 et:
