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
pkgver=102.1.0
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org, Extended Support Release"
arch=(x86_64)
license=(MPL GPL LGPL)
url="https://www.mozilla.org/en-US/firefox/enterprise/"
depends=(gtk3 libxt mime-types dbus-glib ffmpeg nss ttf-font libpulse)
makedepends=(unzip zip diffutils yasm mesa imake inetutils xorg-server-xvfb
             autoconf2.13 rust clang llvm jack nodejs cbindgen nasm
             python-setuptools python-zstandard lld dump_syms
             wasi-compiler-rt wasi-libc wasi-libc++ wasi-libc++abi)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'xdg-desktop-portal: Screensharing with Wayland')
options=(!emptydirs !makeflags !strip !lto !debug)
source=(https://archive.mozilla.org/pub/firefox/releases/${pkgver}esr/source/firefox-${pkgver}esr.source.tar.xz{,.asc}
        cbindgen-0.24.0.diff zstandard-0.18.0.diff
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
  mkdir mozbuild
  cd firefox-$pkgver

  echo "${noextract[@]}"

  # Unbreak build with cbindgen 0.24.0
  patch -Np1 -i ../cbindgen-0.24.0.diff

  # Unbreak build with python-zstandard 0.18.0
  patch -Np1 -i ../zstandard-0.18.0.diff

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
  export MACH_BUILD_PYTHON_NATIVE_PACKAGE_SOURCE=system

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

sha512sums=('2505b87ce4115445568eb6b7d8af41678bd787fd07f3f79e9f0a22d90cdf752ae5d4371856cf9c56e2d9da7d5b7c3939dc2aab5753fcc017398e7d65260f6f03'
            'SKIP'
            '3526402ccae1f0428f2e45bae8d0b2cb909ac2698bc3508b692b827839ccb21203ce414206039776f6ce946fc53e636290b7870e9886284d5e9d1e8ad050aac9'
            'c949cf492bc93b6f3f1f827744e0f39e555c518434c8e73e27143a769b0d123fe4ba2cae07b7b7e7b594f8da43383d4fb4cd28b6b52e0d3e7a985afbadfb3d04'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            '47fb0949323a9ab90a986af16dd72aefd301b56786a8c5e45ba40928027294a2bd9e48c4f1c2c56ae85c2d3a26eeace5a0e7684a3323914379832007b1af154a'
            '71fcbc1db5236ecf1d0b9526b959405d005eb1c91882b7de47b215cf3d7053f18562dad6e52158132e51ad43abe5ae6060fcaf6daf00699a7551d8ae416dd285'
            'c2d84f672f230f755f65e148f23d616598a9211464345ed1d2acc59ef2aa8b9b1a55200628f3f517060d44f5db566d5b3dd479f1226db5f46758f19a27cb1e5f'
            '4c8e981a2874b3b9ac2cb8a15f4ea060b3d80e297e69f2f068cd8135a9489432b8954af3683e456c3b05eb3bf53f3baec9d4d34e289fa597b150c7d7ff676384'
            '00fc703e27a687c725a1c9b7ce5d483b03b4ad0bb443ab05a3ffb89f4f26877acc3d9b4c804a33341c7ac61999d8e0b38cde5937685341428c40940602854510'
            '46500ca802c5e4bd7e7aac560f1d0adbb9d6d56d6179394e91edd2cb80fb1b0191d22e4de7c7a95b42d525d1a6656ea545d49ca144d4be1803c0f5dc616367f8'
            '3839862773a5d665d6046cb3c617a916ec29c9e5a108ea3f1edb22f822accb97909515bc0e0dec67b849607b7fabcf996f6d12689b552f47889132fbfce68758'
            '7eca4e38b6f9a2091ce6941507d4105c6b977399f2131af6fb059d0d78fe7b578da984913c5223f4334346423654ff686ea2c9fdbd442d782736f27274162859'
            'a234871d127bca44a781e9d6b165fd01763c477be7c703bfb39f9a7085137d25878647cd8d3d8d89371a071d04afb422c8cca252e87dc463267a5b1d26d36e37'
            'cf86703796a9f92a3baa58327e446dbe02354cb743b183a2d3ac3dbb8fa4aad58288e630d61c2ba51be1859b2c09bea48c37b6f3a2998012cb99363e90b76455'
            'cb33f079b92eac84b6597e3a144ee5baddf09e9b1e95dc17108ad4be9a1cb32abe5651a1fa6ba8df55b901d8f04e9a225ee8d36363c1a845b36b8e2c0e6b9823'
            'e7a4b14a2037da5f948f28bfdf46f50188af7aafb77bb0bf5ee15fbcac0c88b20917a63b414d89e68ac84dc7ec72ee22f42e61937faa3d741d81e53ca0494194'
            '6df91138673452e1b0d9e1a372d2dd861b2207ebb8621c0a086db3c67977033722b15896a06e042f8a4421a9cc151981371e392984fb32f97e486f11addcdf1f'
            '433ade316922d888501d15c20cf2b25fdc0518d903fef29f598815f5ef61053ede8ed63116a0504ded7e4ff0978fab3944f794a5f30053c2b5a46512cc629b3f'
            '21dd342353563b7ceedc5644933b3644b92defd22319b4751693fcf0744bbba2f662be734d49e68502cc429499e7cb1a60dc966673c894d1375f96c714f70c69'
            'e51398fdcb7e9ea3e4cb31e3d88085f6d5f4e0dd2fb4c0ac649f7bcf8fe6599dbec1e328a5b01d6f66ca835d562717990c645dc94acdce877a21f21f7006b5f9'
            '7ccaba07923e9c800c42d3b1aa3ab92d849022af7c553ae8c7c52636d3db942a71ff9eeb650a9475487a06508f555e317be337c5bb97100eac0b9152d3835e00'
            '66eaefaae72c2f555b69ebf1f272a78580883f02d2aa4e4d7ed391582034e99559084829dc2a736201a7a3ea72039bf827c87d39ffb1c67685e8654567e34959'
            '433d90105cac240f8d1a21b9710c63f7b5bad7a48fa23814b47d970a3fbefdb6a7f17d66c24bfc899623ac7681eb5a8ae6daef8b76a8b4ac7855e35e8a9d2beb'
            '16959e94b6be47b73fd3c1c4e5cc86832edad7973310fd43a37414a561e2b510d00dc29df3667f9fcc45180b338295133d3fa8259733a712b217a92d50b1c680'
            'a8d077be4c086aef6bf2db0dffa91362d4c3be3f94031749528ada6ea2c43f79a035b9926940edd90482048cb361b102e822bfac9b6f43b0f1e3f964ba4c5df7'
            '92428dd85df44d5a1f730d52872739b5c7b060e0ddddc6dce202103b1f2f9234dd87d6b1f3788581e2af165bb689ec3d3e7cf2c55b697708f7a0621c09c1a54c'
            'e2406ad8e7b0b7bb5a7751be8dfda2410ef39a85c172cbf971e72182577cff1606470304f6bec0ac6a52b83587d2fed7cc1cab761dd6e6fb89f4315bd6341f93'
            'a016c30e23cad0c12c0c339bd1ced4a2364f95148a32da96c7c9c50202378610dee3eebf771c93d39a2dc86d56b91c1a476aedf707e6cbe163e4217b48dd32a9'
            '020b3877e5ebf4e28b60c8b5ddc7c880837d5449366a6c80dcabc5c9ab3e9f0255758ef11064b900bb97ac457f14facee22916c5fd4bc7cf6b71994cd73f8e26'
            '4abb3ce81be402e900da7eedbae55ce10ab207eec1d6696c4446be26851466e40ee6efef9d8ef6619eb16f4dec36706f9d279fd380e49f4f834c100267115675'
            'b2f69a707f1833ab4a928c859dd4c31319d26baadda5f21c93d6c7c59326c692ab890cd7ecb6bdeb3bde646baee2835b2926521809ffbc8d5390f23d30885ae3'
            '7ed3efff96f8ad51435b45c2bd93f4adce4cfd17741a336a190d2d291df979b762daf59ccf98d6fb43a99b73706c4e02dc47f34cebe81446e05f9a0eeec4b16a'
            '4ae55afb39860d096f18fb72daa779e02b8a85fa993ad9c28c3c0e9e4b7e8283c547ecf6399e7f6662eb26d0b6721dc76a04170016ebb692a74c1eeda0353592'
            'b6581bef3bdcee78b3d84d75da89345b1a6554f76c6aa3d0243ee4ce54f93308c0b202ea082a58818eae6d48c004aa6d7c45cab27ee921be34c1fc67df5229d3'
            '0553c68894afdd8811f6560296fb7520b534e73db6636a710893b717a7f85919df48bc1d643514e81d7300f748c6841d6575b0b65a22b2063a8c61bd3b854f73'
            '5bd78a8b51c2b18c950fc9a2ab202f554d569f72068a8898e5b078ee9ec5d41082ebbfd5afa70da37b302477702372c0ed19c6c6331c07c43f5f35778d147d9a'
            '541f4ac6f5dbad5ae43beea2bd93a735308ae8d38de6cad89d7ccfffdf2f808bd8b5e88c4e70cdbf48796f50c5ac8f0c1fbdf928a54c7ab1096be3489d815a24'
            'e35e23ad7f44bc1536d3c8ede0157fef3925fad2e7d15fd7e0bebbf49d75979a480dae413e2f915399bc240f86d5a8970683ed8b587c7033f09876d248c935d7'
            'f6c96832a672cdae77155feee50e6b2982eda6f0256b8783ec9c8492a6255b51e09c13a26b62a3b4d02156dd6f8676987384e679ad5284cbd8b41bb331c13623'
            '2c8cd553a4fe3669f942466afd838c8feaa9c9dba20bf3614343f1a84dead737e3f5ea24e3695eb74fbcef0dd7a10c1d93725ce3b5f2daaf94c7a0f010bdfb4c'
            'dd41af23ab48e60d596e874af4c5faebaeca253b4a1ac4fea11fdccc175246dafe6dc8bca89b94526212656fe02b9182aab9e931fe1e201d1ea2b48c1280e3e6'
            '9503c686072c18bd57f98c197bff16763ed977530a2fcf9f92c383c644862f36c85de9a49ac12faf691a73783e6797deef4092e25bd7bfd0a8e82352802eac5e'
            '7df2c654c862440a5311814bc15545e73d6071c1f80cb90c69d2038a237e469d27a6a452edf342ea3614cd35ad400848158d916e77cd6197da8a8171d870d581'
            'fd1e86db7e0e41479679fa309c9d14fa48cb8a4f002fcdf4f4e463ec471f0edc1d92cf7165e9eca3305882317b7f2bded2958858b360c3c5e0acfe8e040d4123'
            '9d1ec7d56ad0c53072166d275a86542ee813966252ff6f9c4ae2f8b3ccf3c2cdea90e1c4f01adb83b2f33d4a331830594d2fb3c951441d5dbdae5e5e826f4fee'
            '5ffbfaa2467d805cd15688d430152d53da2226d2592abf1324d25cb4aee530ecb15a48fd6c52471df118af3806a839b79d27b0921577e21d0446b26dbc94eb27'
            '1e85b1fce22327114cda8d53aea7e4e6e8b40d820c65f7c558f5ee24647e98495ab6af0785e32003315648b401a34d86be808709cd938df0d6f55e47c70da1bb'
            '668c2b8af8882f591407877662013e443e152cff379ecbf044fa35b945a2e7ce4db40c9c6fa5babd7925eca2ef07eca4306c84271d2cc8914323803c575be35f'
            'b33f796ab93d94287be7e920e62a1c2ab8e2e6be48beb6ba15b4597ce3ac5698cea66ec85feb8f77a0a91521b57eb74ed20bbcab5bfe784021056ad82384336a'
            'f24fb4f4d490a610a560e753c7159f9f0d0487090157a3c2d3408e2be96b14e50ea1d055974a465128c7bd3ab734bc6877a9e96e543b4bbd288374f2058841cf'
            'f5efd5dddee74ab8e67aed8bd67816da2b04eaca3d6f0fd30ef7864ab9c47526f5ff927fe74d17d3391695370288ab3b72ccb501ca351d0c5efcde753895bc64'
            'd8535c732badb18993a429046096fd48a1559887c6aaf640577dd2cf6b5dff7edbe133b3f6e26688dcd63788e98e0d93b8001c6a1e98228f16dba5ab96a6bf97'
            'a5e6beaa13f8b5872dd428c2fc913c81209898432f64dc1b183279f9365c94be47ef8a91a298193bb3e7ac092cd59556c22f7fbb79d204a0728d6a8db936f805'
            '3d75cfdf464f06aa0ede1106a98d3ce1334920c7a34e1ef634dd6181ab4a18e4674046117bd2a2fb88a78607ca6c7cca8e791bf72eb755aa4a56581c81f0cbc8'
            'a6b94c40d69f0b7387b8670844baa19b686f61af109254c807a445b6c8238163a5e3f29870f500108c80a9f7f11d79309bd982515702b3269565afb4012f3ce4'
            '062e6398b29d38136e8d5b2e225de156cd87144dd35a1856bf0750efaca700a552ec9c54846c1beab85e1ed3b7bac3fc52d1d615c4f8b537f2b6081217fb9824'
            '33440fbac24677341e3cce742105dfebbd81e434ae486e9315538f298e4d7d4576471a66ca7ab377473af547f454e204fd47f13e5bcef67c5e753a4b128c19d6'
            'c4ce0c33d2ddd5636eb5ebe8fc88a0177bc8eb4044252426639c416e0829db80242f048369032270dfc455ed02cbd74a4bf05260fa10325b11ddf8adca9e66d0'
            '2c769ebf31e0aced4063f6696b15d599cc33021473914e29e8252e8d21ecb55d7d34356d124587936feffa597f131cef3faba87fe78ab9227144864a21623109'
            '7d5a967a39f8ca33b86241b71986db7402231ceda86510fb5ac7c1be4d0dc74916183214778f79a3478c9059d29868e09be408843e729ec91e9ded0f29c36ed3'
            'cbc828e39128c8fad0b63ec57dbebd83afcaa95def0266eb14929886f408155e8759fb0c37b7d304b8151ce0dfb826a9317e7e83492251863ee5d8cec8c50696'
            '5bc945db5655e7920f6657175792390a78ddc91aba7dd8dd77e1cd308a2413b06878184a5126818cb75df3f79b1136eebdd5f43ccf11e1db2fb5374cba26f4be'
            '25250ed3e5b4dd971e8700ffcb9c9cc34303b2f307522083e07ff4ed20dc460a5fe600a3c91f3081279343a197956977eedac244512aa437f7d768cb87067497'
            '6966d3225fffad1ee392b80b114a30e59176af7b4975ba10f020aab88b5b9f1924ba77a0077ebfc65a16ea946aa16134abdaf72c93a15a38727bfd028187d203'
            '523226f6e910310e5f4a6f84ba40ff76079d2ca05688463a6238cc8d2f3a3561335a69caba7d2ccbe7a2fd8cb51231309c6a0d82c7af2b93070f2e5b197bdd73'
            'd14dbf51481be3193c3d4ec26576c932fea431ec9fb2b2c1ea6643dee36da6982e744cdc2ba2aaf4d3e47e5d68977918f1799e897e81ec9dba8a6b00beaf5d58'
            'ea438e666ca477e12bdc0c5cc0be474240465021857afcf6ed40ae1a3c97a1f424c6a311089365b65f17be6d99dd88ba1ffbf410d9423dc83d223af2379cb79c'
            'e9c70d8e641d54261e604fca1480e64f910639763f88316d92bfd5951a380f4f471cf3e39ecd679b9455364377221016631f5a0c69eb270294960a3288b141d1'
            '0564469f22482eac80647dd609e3c78f9bddceefd8d3e5b5b3e5ef1a5e8806f36453dd55236bfe27a923f624ae298bf706c7de58446cc42e57a0720a793f6287'
            'ccc29e48acf111174e028901adda825c69c6e9c286e899298e7e15d7afa3ef5f5fb7288256a28f7dada486220c4addc2a3f145b54fdddd47e02c98d26954cce0'
            '935898ea45c0b6cf88156d8c5a305559d9ffbccf307ffdca531c9b8705ed2db0f8102b719256da1990e2277aeeece406a5113128eb631f0c95a3a4ced195a7a2'
            '5ec8f82195c21377f1bd59415f0fba1fad7af61c6b8731e19a58dc1dc5c384b1e8b1952ff07ca9f51c2a47663f366dbb67b6302499839871cc2a44b861addada'
            'fc4166148f87a5302e4b342db419571d6ca6cdc6879e2f6b35e828a627ec41678ba30acaa36a29014d95eb1681b068cd7c8ae451a61d9e2da2e97903a38847b6'
            'cd228784ac743d2e6c74b825205f0c540657257360d78921e09aebf03c00f5651b89fdc2b461c13b104f5c3652870c9f62f65d217de8747fe5e0b8016bdfdf68'
            '6de7f5551fbba1cac7c936a1d7563ed220fa8e52ff071a30661b772a9507bf0e78578a360d1913fba5ff03b566a5e431297ea86adfe1912334b6eeea4750ebee'
            '4a1a609f397b8b4c3628b5fb71bd4cc05b2d490fef3f4522c7c656edbedd139d9d4275f32399552ac159d29d907b1a436bb57d818bf08184333ab039b439be67'
            '57e013be4d7d328d17944c3046fb88cdfba011d3034bfae554b5afba5356c79dd19c6b6d8b6ad1dda1253065c652556a9f7a034eaab898ff58b1a5075de46275'
            '720402b8eb8f155e127921cd62c8c376ef9c7a5539a01126fd4d2bf93efe83963b5bd02ba4108cf32e4a2d61b47d93c7a736899eb1687a6b223b96a3c8513f0a'
            '25ee5da6b4034218b656e0ed1a69ad534108e5db44c66600ed5d1e9c240ac8777308f99624d922e911718c59abf5d8a8fa049ae17bd2a387c8410bb2593808c4'
            '6a0e5f4b039496fe39d38f8ddeacc78ea4684036d384ca85527145e7d4c9a0a712e98b355d994177dc316822652434010d26a94e406ee6d32919026b9b5950e6'
            'caafc962b6d68e6a748efb5d245db404371e2351b7a1843c0d989026d7fb9364213ef1adda7a4da1ea68661d1f30645fd863e20759262e28bfa51703a0978403'
            '9cda7052eda7a30c75086214fbd071b9f598efedd9416bf4c70dbb04f858993310dcf6ebae06c7aca3a015c3bc29d83376ed246d4d524c89a710d1d6ece19eb9'
            '67924af24ff91bb91a260c7b9bb9c4db3e215e6ca03bb841866b7df9acd347c2438a98db5dbb1cf9099b5c8d62541dc1514966e2a7f17d5bdbf412358615f789'
            '56f3bddc53313f6fbe2468655be85650d510a6464f67bd6e23ab8e7fc17741b7b0bcfe4d334809fd304f52c1fe189997545716f010babb98c63afd412b2e3b9f'
            '9dd455065b2f3719711582f8d94298aa629d555e18a14242fe8177db515a74706f1f229c5da048618358bb4f653f041d60c705584d3d359e4a4667a0b52968a4'
            'afd2bfbf803b29e228b6962be0da5a1a0b971d35225b1f626226029567a4aad0be04db20c5eaca77f2a5bfa4202c55ebfc18a75dda676ba3eb43d06480f28cea'
            '70ff91415ab8fbeb7cbbdabcb6065c3626579759efd35abf4b4c6d215723a128f74240bde4ce611608baab5a65b70f7b880be7413ab3c93489a1b605db8bacd4'
            '5a24e428cbc25eaabf9178b912bfbedd8ac58569016fdbcaf50b96c65688cc7d39d0ba152973335df4b242691a8ec637019795dcbf85796e9dce60d0dc68b63a'
            '551bdf0fc10e6f38608be9ff21f74862ccbf9eeb2e0bee6aa7414b58f7664f69e9962745893b95957f2f5e60c9ed1043d06a0d0dcd3465652173dae3160d47bf'
            '323b485016cba4672ce36fd60693f7604cbe5a852b5001a07a30d6402127db3a5a991ad7042d95d709bdeff4c98cab00e9f4ebfa317b5f560084754a7cf4bdb9'
            '9739774255ff42eeb8aa8f3b9b2c1f44bf4a1aeba9da12bd11521ee0e48ea4e0409ee47909998e67b37a0394854df21cbd09f22dbed6e83285e8ebf2feca9f7d'
            '5ff075c27d508a00898126844941a67f1c4a90965ffc8afd37d863eba313e26e380770e8e1c085040ae7ed58a4da12ce49fd734bbec80437a35cb6e5d559f3f5'
            '80f23e6c8e4a6d41d7c49e37ddd1f74a3d98a0caf7acfebe3fe1c5e1a034d0e6995bbdacb5b499c2eefd46abbff89689347171832a71a9c1d795b22ea0500f23'
            '630cbc9aa06cd976166aaeee5576e32c8d94145ac4e49183946d7ebc2dd1d9a0cf2490f36b5d90a2a519748488a2d9eb01919f9e7f3b246f1805662d9006f645'
            'b20fe4290576257c1b85c62b09f9c8035ba350ff3470f952d112c3fb28dd08359b614d15b300be82f3da0b95ba015fb1682e3abdd44aec38b354218821a47f18'
            '0df826dce1ef8b435e6030a8fb1eba7ce62f825c5960c459b60f0d5a91eb5aa03e6f69067114f4f2978e107dc82299ab7da5ccbe4620fcb089c1eb2fa61c3296'
            'a9ceedc5ce8b63d947bf07374fc2d92e9a795e2bf431fec5cb2e5c7faa5196a5558880b91a949a3f103f7ca0d085dd66fe58c6e446aeb087f8042b6fd4cab845'
            '6073a9c3e8fe10af1ad36ab4c96f4afea16d1f76d143832ac52018952ecc8f6c328e0cec894a11da5acafb6641319e49c9d5c599e39e522f1d3233e191d9c8fc'
            '83f3411eeb05f6be5b9545d73c1437bc96fd658e9da4d1b7a2f676c6ec6853b634a72c84255f95f03eba0a8d40e4de69860505786814cfa187cd0a7a06b5ed22'
            '05bf08207e1cf8f4ed68770445be5cdfdc77cbb917aa52ceb3919aadc3f8e83237c7e64345cc251fde673f7a02c9f468874e32f353bb50b0df49030218d34fe1')

# vim:set sw=2 et:
