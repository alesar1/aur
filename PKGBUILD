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

sha512sums=('30d9e6ef04fd86516e2cea3c797ec99af4c96b08576bb3409c0026da4fd1218167f89a007109e1fa4e2571f98f2dbe5ab58a26473533d45301f75b90ec3dbf28'
            'SKIP'
            '3526402ccae1f0428f2e45bae8d0b2cb909ac2698bc3508b692b827839ccb21203ce414206039776f6ce946fc53e636290b7870e9886284d5e9d1e8ad050aac9'
            '9cbc214c3ae7b93ef6c0573194dc7600dd0b4bb6f2653693d75b08475b7c3d65f6a181055060848143b488207c39af3fdb7382bb45de5264b2daedcb62bf97f2'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            '3fbaab97f3b45c1ad17dc71c390d758fc1f49ab33baea5965f0dfcc023040f6105af6078b0510a3c02ef776cc5a6dfbcb317790f129acb18e5b24e81db725ead'
            'b74f776ef685ded49b355029903301b9e7c7ef2979708d0545209151af1f7fb5684697e11fbbd6a3cfb6f00896534c0c8744560fda5536f26642164cfb7b56e5'
            '1b0a59e373e8502f6b83f18362590c36d1984138a483ab24533e0d9870bfab18cd7da751bcf54fe025cacc675b7a067ddfc5ee358af7957fad189bab089f1fc4'
            'bfd63470e38e1aef8d74f925a5417477f1aa8875e0d5b15227f041c68149f614ab0315e8a184dbe903535b6cdc676f2301dc5593276beb34c58c40d08b881f1a'
            '5dabb51990c2838ea21969c37cb1f675f3ddb5fc12d76b0358a91429111153410aaba14bef1c934726d89e37fe2f783f2d3c0ab3f22aa7c244e5918f5863da6c'
            '9bab156d075fefc1d6ea5650d4e279a6a90d2fb5b5e2281aeaf6ed071e21d9ccaa92ad7bd24e823764f92557fa841cbedafb66397d95deec5595a7066451cedd'
            '6c4e85d171bd16c5bb814f9f38c50adc714f968262722dec4aa1955d5aee8b479c8ab9cfdd8183d2a7e3aaef99fef4ef6e9934637fd078d59434e76cae3a2d20'
            '60091ae6cf09ce108f7b9300abafb02b3a2ce077a7a356b6f50c03f297bf540e6ae3d7a26985051a5662f0fcfe33981f472e83392b62f9d2595d9b6a2f5f61bb'
            'ed25a67b8dea2a94311b8d99ff0fb8574d228ef2127988625d37ab34c6d4224cd31ee43d92223904e1cff2a82489bb5ac40e39486f450da88a217ba5e1468dbc'
            '3430c51d7b23694d009539ba138be99936077992c565c1f0cbbef36b1838c20f38e449bc667956e86ad3139b3eefdd9c3a2bc4d6c74aa84033ef52138bb64c82'
            '869dcf63517e88dda8f36a25f555a792761aaaecfb770699791e29f77de2f790223e3cfbac3ef97968856f32a4ffd2ecc820a5a57fa5eca606a7ec3038292594'
            '2864ffb4745f0c207d3956997412458cd1c652c99b79fc39d86cd0c4164775f0eaa36f38a3b2ae527233b5eae6976297fc0c6f81586de0ddaced6b86e578adf6'
            'b895f83cd73db79330c7ac24d838228f5b599cf6ec3ea2c8e52dd6125e5336fd7484cb11d2dc1436dd826d1b878ae88a7f76d74ea2e0148b7c22dba2881910c5'
            'f8ae72629d7ae17ac88068df167cbf28359f9181ef4aa0d5805b3f68a88973d6a89a3109cf34654d39d9a4b7c03a2b242dfeac8321b59f00e4418955073a16aa'
            '37156855d60fab66e7ff40bb1a17b84ec49627df03c34470a416396236d51286a0fc3f3a9c8f169b8403660cd90f531f4a0dea995a6e6a2a3eacb35e1d5b2fd8'
            '1464310ee9a01551b43c1ef133d7534ef6b83030f7a69bf2920fddcf4794a0ba950dfa8fdc90b23c4fddc07244c62c2a3383558ff13d061d8932982cdb1f8c95'
            '156bf92ae4dd4f375eab63a7e747c0c1e1b6c98eaade4d2896a552ad91c731b4cdd921bb743f45ab94d25066564c7658c945bb17d712cb9269984d3ce44632bf'
            'ac91e8b3a72e95feeaa904a6d57febf167921be3413e9c24eb5455a5dd9eedfdbd4a5e9fe91eacccfd01faa20d7d6dc75b0818da1fea5696fc2a4dbde711bb1e'
            '2282220c68cb1f6c2bd15b3dfbd6221754c1d2148b87fd1c8bbf0b5e023c8e28dcaefd3c62b01ac60d265d001fa3c86785c65638b1d6057cdfeaf42c79716902'
            '5a6d8f478b02a956e538f53690c86755bc1aab6d5aea2d3692b3523652ffdaa369bc34d9a4db402e3f4e664fc8e9eb720946e3526150d56811de502fc9fda55a'
            '27fa81fc8aa8056461e9f8e6c52e10e849c32edfbdb2a5241ae5a7f0c50fe5f2ea2b30107ca15d8960b7c9a78150cdeb2fb930aebfa277dbe411d042a3b67f62'
            '58e34178b03f98ec40ca21e4be71322b8370b6e1a0cf3ad7631aa8eb644fb1fc3da55552bb9493e92ff73f848961c726231979c4b021dab113f7c8cc7d2f19bd'
            '1e55e8414240c7f0ad69b40c28b5b61dfd9c535af51e1fc1d7863231cb76698e99c3af27ad3f4e544182b53fec0a5e31471b0fae7157e425bc821c34ce9ea78e'
            '8fdab71ea969e4dabb7baec87fea51f5cbe9d9333b9ffcdfd6f4e66d458d2f704962c1155790325c7eada547bf3711231f8d68474c1467bef79e2f001d9a078d'
            '7948144363be8dce093dc3775756684fe4b187cbe3b68cd1508afca9a5b2766e72273accb463938ef677e47a6e932c7eb2b204e99d8807e7090912dd37d70c5a'
            '8807f843e96451f389833209f540cf54ef20c5e421d113bf7d5d3cedbb1830a85320a17d2204ef2546c2631a355046a501a9eb76560c1e5916064d0d08bbbef0'
            '41698ca970e494ad880ca7381c07e632b7b71c6d8804dfdb8c5ae23537adf576b08487b17c1debe7866e5dfa00bc7b3caf8d599ea85bd6fa8a4ebf03e0849d04'
            '6e77abf6244eb765b398ee394fe538da1bab0450f6822d56a50caca85008ae57587ddefd0e904b3587bced265a3e3fee132a768da717f661eb5e4db61909670d'
            '9805d084d1c3035831a2ca7f4b8b7c7b8b1aa01e928fead9a84c2e810303f2c082acaf96d7518e942f24b117d1d8c6c54d2e4720c5ac5b806a02400ee73969ad'
            'a158c82dad3b7fe6c98d283f095a58080801dae8791dfd4b45ad3927c3788a4c65a30485f4cabb4403597dc2de937cc6d45d761620551e2b7fa32f72ade91517'
            'b1e1fc9944f80bb4bd38d7ddab82cd29dfdcc45bc06e50106db894e4866824ad50e48f5763abd823c44b2d1b78f85cf432d92164ff7c0a82956182944b2f6dba'
            '340f59f8123cd8716af3a54fb105705acbed84b4bfedc3cda694c4c4bdbc00fc59af860d2e9eeb3f3e1d01f1b2e15cf6251676309218822da2e0ca460cc33b6c'
            '0a4519d8ec5ab1e5da8ebdb8cc8128c92e1b9a4224be32cf2f565c61a135a68579fbaea23ddd612d6bcc70533678d585d22e2753f9ecf26c3fcdd6f35fcf0c59'
            'e41464c8b6b62a41953ffe4fe2ac3c551b8e420facb66c57ed8112790f5aa0fb6aa7ea466a8623ad26964d49a201c7baae80ee7bc71fb61e004ae78712815b24'
            '98b97977346a2a036c3c2737e915120587d2a6883fa735452bb8d7241ea6d9f1650d8e8afa2674d1fa7c5f75e37bb4ab5814b03b5a1564c3d468fc5266fd3fc8'
            '6f7ce28d787e55e409845799666e97500231a4397e60f9d4d7c30578aad777ecbf2cd1f59844d270aaec28b669a5d07a8bf169ceda6715e4356b05a83e6f6ed2'
            'ad08af6b6cf8ddbd39760a2099c29a465f64449afc25ffda7944a3ff9757146fd1de92085959c7da514a473e3c64405826b73b4fd571df7f72914bdce28d0c1e'
            'a32b63926ed577d08ee7ec4bb1013b974e52657d085bf57c6d2120e19b4e5cbf9998a19622a5268892e779e4a388d2dc2aa73b00f2897a0c2d257149f82597e8'
            'a69153391882854b77f082e1b3b2c0f755fd6b0e5ac243d37991c70a3b8cc166051bfa328e48c7c07312095f92cf47fd2f7792b1d71be549c2402aa4eaefe3a3'
            'bdba7519502303574a1cc8438c9ae963233d4776803647769511332d57586d14c05528a980805ed4aef6b7985d7596869202b9260993160e3585f95fcf9de207'
            '4073e8e2fa24e8711138bb46a062f82e67641bd48c28257a9014231d3231a1706a763575ec12c9b6a7a91326c2bd177d8fec1b189e5dfbfc2c72a1993b8fff6c'
            '28df0187b63a5bbdbc470bfb175ff0b59989dd0cef24fffa11dfbac9745e816d8b8e689b740364c75c66a63de038811725bd4f1505c4e1671b2594d5d6e782a5'
            'e9b0b0b32986c8a31371b1fb56d2cdb4bf64cdacb3b650d963715046f66737edd6871b64dc5163247f9829285134687186cbc8032d09bb99838c6553fbbd1c12'
            '5495df83fd7d383175cff014ac1a721185bb4d5fddf55766b0c1f3752ddb9b4bae11206b2cff4d4be779ae352844830c173fcab84ab5e09cf6760eb2c4fd324e'
            '717973b27df994a55464b577a379e3328b2b20173ab72e23d0f4028efcce4f463d8e17970ecc7e6c85aff72bf8a98ce26ffe4b691f0feee15914d2997ced09f8'
            '6e7012319d4f011d2cd83238fd5f49df973a11135d49062151d9f2b8b7bd4a858012e90cd3a8b70ed516a52f4251716a821004f7c4a35cfc5b78f5d58bd4e060'
            'b2dd0b5975d37b6da93fc346d4e89475829d8a1c09fdc65cf470f886f4445a99d589d5d38f4e4f5726551d05953040887148924dd00b0ca0bbc58647fcd38db6'
            'ae856a913aeffc14f16d60b857212423eea6c38e136d0079d99e85b07681883807e262b1a3e26b73303698ce54d330dc95493d8b96d7523e81f9e9ab69fe5906'
            'e006314325505b0621f4ac59428d191962795d918bf99af02f7ed31b83523bb900a13f97c23f63daae52e1398b744dceddf6d217b2cc8aa5485156a304614b0f'
            '6cc5d171ace3ef903d8ce5d07e33e6c4ebaf345124e0454d3f9d974c60972f6d54842643419f32e5234b4deffd500b520d197f58bc9131c9f3f2782e69432016'
            '9140dff0788ac4d3697de499f9a028b635a5023e5fd49d31e27c620dc6604a47657b895694745c4bf8381457022726b925ca2f9231ec049bd17b42993856aee5'
            '62756b4edf679fb76927587ffc04c8c8aa32c5c492312166ddfe8262a9672f5b6b27f1a632891cdccd091b7c3eb7af9d35af11ee6ae28b96fc79120b6459052b'
            '95ca160240f2f479835d5b2c04d4ab1a4778d16d31a9172c7b9eb734de033820ad8b76f06366027d6d12c43f0f0f854be4059c6a533ca0eb33a59355e97d11e6'
            'd197ad43fc34c2fc1ed0361c9e57d311ccd851e4743bc7288f8b9535ecabb7311547b75005f5a75fb99b04ed91182698b4e3c89a5d1380cfe2e32d514aa8ccff'
            '02a42c69b2eb5461de64c9188b3ce7d0238ef6a7cbe706cd6e9df46f075f643a2c4af197c5accc50c755c10eca569d67fe33ae647448f060afa46276f03ee452'
            '2440eb343587aae1b89ed9db3f31d49cade5aecb982639b55dee569239f131aec76f4194d27ac5988b0b9a80f2443122eb81674eb45c5e3d4bc2ea14c609aff7'
            'd11c4441694aea98bd95cdfec391efb5e38523485570983558469d09376409762b1abdb3c1f156f2ea820b50b62931e8a32cfa4b0841a140885bb14d3a34e06d'
            '53963e5c4cd35561a1a7c67f187b8615a91c29b10f3764c05252fe3c537c4f217779528f9dc427962b214bd320c5101a50732981becf7b6818a98d383a0e77f8'
            'b094ce40bad2cffa4c698be78ab718b933f8e46a7eefa53b843d4379d05a580b68128d060f0de34b90b82de9e5b8e90638428b594ec9edfb94f98facf1a3907b'
            'd2fa92394069d055a9e5538f7af814e4269c10ef5fad784829ea49c3b001125d7678cf5c53abc75054bb44420edd7eb4f2578f9dbd6613b6fad8167d321483e5'
            '70f0a63a839426655125a5889e9bb2b647040fa84c7836412739984e208738487c08f6b50d38171f3ce56d4f70f87705a19c9d299ca86b1e582c26829f6a86f8'
            'f309524fac246d712efdcad6683fb8a9005664e9d5b861659ff893082ecbc4d7f6524be1bc4453a5e3b3dd1f8de44627170fd4334a9df707c7230e1e01f26d21'
            '14c4b0481f4ceae3f288cb7591ea77af9122f89b6bf509b3df986f2abd93b6a6339c3e48fe880583baf940d2a35ebaab975b9da43eed18d041771fd641c27c16'
            'e900c40a570350b9f089f4a1251c40067b042012a328bb624eb55f5d39b00799b0e49438caa5477cdcd2cfcc582ba70654b33d74b7c1c8f9a2c926f098a8c868'
            '71d058dd838562e97b04a84671f781ae4915914e7be4dc319d8688d1655391d151ceb31ebd4fdaf100fba6db5643dd1bc643960346e2b9376f2fc13b62cd69ce'
            '8b79f5cb053f7e5426cb680f1a2d53ddf99f4b1e562d60c8ce7210dc50acb1a4ed8ad9faaf1f87bad0d7a1082dbd78a7048949395e3e2e2a6ab1bfbf3203f232'
            '50665e8d27a3a389042d9295b5eeeb0d33e99136dbd42da773f455c42560ce75c0c92c6ee08dbf244e0e811d5e6e99f8f0e106584bee170206a5b7be7f22715a'
            '926853a67a42a0eff6305de6043f4898ac864e786471e46b40ac9c88c94ff383b0e08ac34de4f6d1b6ed77503aecf62a2ebdcf18002c026d6a4f4843cb031f74'
            '930e0c3928fde3b937b0927026923a29d38e55d967a5be86b7e277cc88333508173c9e2e12fe11aec82bdb735a612c47e6150959333282737b999cb9d0287d30'
            '2d39ea3873a0d3b083030f83c69813f60f2c1733f3ee65009739bd948b11e04368d1d79b9a9b41e8bb771f0d536f93f2e12dbeb0da351b73a505ab894ecf6932'
            '2b30c4229d59ffc6ee3030bab6f1b555f29c901435da2d65e1e36adcbadb3ffdcb924010b197fe844cbb504f178b11e41119ccb26d24c1690309f002cd246921'
            'bf27c647206d1984598d5a72e2259b2f317ecc10b8bbb856fe3c08149079ce08abe6d0c1e97ce97a501851bd72d9eb335a66faf39ea056667460416ff0ca4dfd'
            '23d9b0bed5fa09cde6d9f88f273778ed78b95818dfbf01446d3aff275b641b8ffc3771e8145392e629e929d33d94e608043a068e9e5f5e69beca9baa1efe0b19'
            'c54d1a9092dfd51cf6221bdb4327492c5ed0e068caf095476e5aeab5f0ed864c3dae8f7c2e1af226817a73e507afeb9e1a14d380d7a0645668923a1058b2445a'
            '6cd7557e0754eb123b098fcfd0da9cec318b453a908a5f1cdce9046ab37083ead20eea1cfe7cdfcca8d84224f79808ee0c26c084f099d254abbc68a492e719e0'
            'f942b0980383978259ef9d765027aea53e10f519d8b41e829c20205e8afebe7aa8bbb76ace3b5c69f5aba7fb6efbdb2f8cdcc3b26e09fac21ebad4ba98a1cb92'
            '2aafb6706b08814e701ca756a0cdc78975a3a90fb4fb658ec479745bb3dd435c44ce8f1b6ad7452569235c65c6a6fa0acd2ac9b501ce7f7ffff5e10b90a6f8ec'
            'c308cd0b41051fb045726b31d61d29d2aee73bc58f7c39c35fba2d27ba6516c400aaf6781870a1db002cb5b6ffb9f5a2d465e255ab795acc9154b533ec046811'
            'c66dd6a819988f6b61affb86309ed99803456ffc3defe247b7635115c9efde32017b4a481e9a5a26fa7de8db094699ae1e1130e8d9a24e9e55586f603b7d870c'
            '7afb51270273be9bb845dfbe8b12ec2bf49671215ecb2d7d4ad63f5a6682d96f71d6ffbac6dc8846b7d096ad49ab78d9717dd3a03fe9edf54da36282e402701c'
            'ec231ebadda289c5b50c4d6421cc64d0bd47d5801744482d1bd338d6a44913f8432a59717a06ae9b7698fc89cdeb037cfa6d9e9b617fada5eb94465f23e92228'
            'db8bc2af40dfc5851460124dfbfcbe07fd7e6df4c41e85e194107b327033f015fd9ea45fbbc86ae4eb0dbc68fa9018a2e430d3787b0bb70a418de11800bb9031'
            'b019aada629d23b421e0946c65f499fbd827cd818627a4796e1a60940b867d7cde4537d6e8cfd84da91621533173619ef10242b8a3c85ab05145f629272bed07'
            '4d7ae4fe4ea8c890a1901ff8305b9741f293b6876a1cb4e7106c6c6bc006ce118a374520660b8575fc263ee99b92ec0e425f7e922eadb9c3663e71491bcd02cc'
            '5381ada33222c0cb0e7be5e5f465350c8493d3e18071b9f4536b12ba72a53e06f98431b0ec6f31802c0bb27fce94d950301e480b88713165c0fb5ffdec88c679'
            '4a0a7ef51ca2a72330bc314bf24b4f94568712960f8fe361595ec1e5bf5b1ba89dd16003a7aec0d3cd4bcb767705dae55ca5c78299d6352404f043235a2f3c7d'
            'd373fbc7faa98ea5dfc073fb612effeedfd1795959760f372dcfc94924fc655dbcb2a5ed7d1d18bd4f79daa30adf7b682ac79b32207440ef7a4059b8640044fd'
            'fd5f809d1fff2207fcda48202910e09188b30929664487fe743d37792facd4dc6b1e19fe3eb1ce510e6282da3bdbd0e2c111a641b4506f161c43b28fcc770c36'
            '9c07de8496c591dbdd5a5dc5853c3c91a65de21328f53f61e1dd507ccfe540c381be7a9317f3f4224cf9dd6d3f477ca572e37a1d0530159b924473a7e72485a7'
            '59f5faec983faf9a9570d1fb29cc0e94c5bd027ec95cbe7a187c39401ed7ef5453da695d65e8ef0bbf96a34ed754dbb32d2822fb4a79667c95940c0c6e0206bb'
            '84f5cfacccb71d37f38d262181c53e368098b504074688811485802f79e6a3af44249fa052f2c403a5f4c1669c805dfc0d0db21e2dc5da8b11c19a845d9c593d'
            '307a976953a25386e104204038fb8843ff05307c4d697f389770994b07adde034051ad08ec4f0d2b3eb427b86c6d8088911698cc2d20ed9d765aa6466e6d8775'
            '415ef15e78d1f3125c2edb00b4fa164cf4d163ec56fb87378e38f5edb2b5ef383a7a5680a5b664884f73f093f81e9dd33a7aaeb0e4a15d8f072b8592b2036d70'
            '54e7893b1d9282a4b187698097c5607a04a50633c91e3c383ee23c2780fdf4f5b6e77fce3d22e5fcda968f0efefa36a760d24c300e4b3130cff699d1e387b366'
            '85e624355363f9d2e5717723da6aeb920342c551f3448f1581c9ecafd7dcf06a7188176a73ab39faa54c4b856ea3d0a98438111e1211abc7af72fe5fe4470530'
            '94bac8f5b13099eef8570f1e9a7dc0509886aae3e3c1b952f970cf1adf99062405ea504e1417e3e54b92a551bfdb666274ad47c9fd08d2a72fa6f6579fb2b3a3')


# vim:set sw=2 et:
