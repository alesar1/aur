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
pkgver=102.3.0
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

sha512sums=('35357791f4de8b474780083a22fb52b7846b8012cbf01403f2b9526151d11c196ce0f9fba8e0f16d8235d7259af6fba1bc3acbb5b7e79129a28f390467aa7556'
            'SKIP'
            '3526402ccae1f0428f2e45bae8d0b2cb909ac2698bc3508b692b827839ccb21203ce414206039776f6ce946fc53e636290b7870e9886284d5e9d1e8ad050aac9'
            '9cbc214c3ae7b93ef6c0573194dc7600dd0b4bb6f2653693d75b08475b7c3d65f6a181055060848143b488207c39af3fdb7382bb45de5264b2daedcb62bf97f2'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            '1c5bad68c11af14db55c2c950df243621538f3bc0341953482c4333929452e4fb32d4cb625c0a0969afdded17904e72b75276bde86470bdd45a06ad48f2b5c47'
            'e60e9753293086fc26684fc4e5932f14a3a7f4b65cf590a750dcd47b95bbba75605b31b8e5a3daedaf1177867de3e7ba90e87df256937c1d6f737928536ea3a8'
            'f55efa9f76df914ec8371ea902406d60f0ef6ac13825fe1d0e45c2e587d299dc2480b4df6536fda74f1f6f8438a2566a8dcb503c56ec41e805331684c3829065'
            '5edd4030772c1cfb080d0033a810e903f88ccfcf686ad9606a03bf2b4d8e1972381a229674ec457851d0dd19855b85f02db1463dc54f9de152f2fd4096e614fb'
            '0e044f108521022f3e8c84cb2f9d09a94a0d05ec7eba961fe24552ecbe3756ec05bbd1d4335044b4250819dda9b275e09d0b6e3fac8e491747ccadbff6a1d0b0'
            'f80c2fbf32fa719b65dc6b35d88f21360c8206d4224c27aec34f4a9b07eeb63cb8abbdcfde69388e7eed6d7209eea23d1f9c545e89e451b58046dac6aa4f6ef7'
            '7d955be75b94ef5d05a68a4d1750d61a674b21d6408d0402f30ecb128ce9aeb24ab6a72e26097053f8b1ee1acce653dbc2de95197fd5b28e2aab16a5a57c01ab'
            '38a53a1fc200fcad3f7c843559a6843a6c0be296eb5a2f04f1f19f68db7bac68dd5b57fc2c159e4a97f8460347a05764b3660e0adaf844ab701d65a9cfe2bff1'
            '0232cbbb6062db4e71b2a58c4b43c8976bdc431475f6a91d6213558114832692ff439b9a40bc0b0700431e47e130b42e4146ae94250665e73772e672dfb693d7'
            '782b9c57186d6902f3c49fd55adb256f45d52eff16dc21268b34bfb45a9dafbffd1013db45c8b3f2d6afe53c5c0c072c07887da8aad1e96a64caa08fc988cc64'
            '6e3ae23473090a10ed61e4ca6a446e595974d3e7e8cf54ad37cefecd99b3c6d08e288057d2fe41e8762046d3408f0fd5b605bdb1062c73ef64244e2a7c3e9fc8'
            '93c1046f4b6b77f4b97668c26f5042b7b93c3b9b57f2e9d4e5e5e662d8ec4f78cbe2ac186ffc2a6650aa86759cdf401869e0548fb6af108b6058c9027a291105'
            'b30ff4b0c424ea12b298c5f3b1a7805aff074cda8c297a9ba93d2804732294250e354f0d40665cded19715850237dc4d5030deeb3e44107974e4a88f3acf7568'
            '824668d6bd7d9c7fa67cadf4557e736f4b915536579787e065024a32447d2a4dbed57e6445918ff3b6a30b805dc873aa014029664174e047f6257fd7f76f30ed'
            '622db5c0d53f39afeb9750e126e015677f08003032a27b5ebcfebd7f131df9b6a1ee705855fb98133e692f3169492a49ca4a04705de8244116ce45250d116dea'
            '1c3b1cd61ad432d95d020d06c63594587bf62fa1ee56beb842a434c9e297c892f6ae1c699f9e9080068d14bb3ad14572270431d87428a9c51f40c86da7ae795a'
            'a47b65fa09b68e6b08f0fbda74f046efeed3a22f0e6cca902420fd21b351eb1b6403fd7ef5a93f7c3630eafebb16f71569d2b21c59ca6c7f6c659935a3f8677e'
            'd1d9a3e0965be66f4b56ff526ed5a3d86e677e3497014d8ba06d119f1e9129b0931c3d69a6fa11f6026c850bde7a858c377b0915160ed22e954a08a58c0b06bf'
            '38e7d81a4894cf2ec9ffd87f53e90cb5974f420276036cacdbb58077f413a85506d0d88c2db31161b1446941f14326224ef0fd3afc8edf8350e40616f9adb79b'
            'ae2924a48bc6716fffffdae4c623d9b5ec76ccfc286765315b1b45bf78ac98caba5dd024360296fe9a94df8bf409e047bec9a0d964b63728dc77605b7f67b51c'
            'a2d9a00e44a07aec9d43496b47405a30c71f6d6019dc9ff52737c0020c2efe3050aed0ca5218499fa362fe574a9ae1a74a3a321f3fd91129854ee48359123ee7'
            '8494171611818f4a3c2ece4321252ff0c74e82864c97b3688e7d968a8f047cde0bc9d5fa652425306106dab1a81c92a2d2b1777e6e6ddaaeaec89c07fc98d1ea'
            '2d55ef7106f6e21aee7495f38b2f7208ae6eb5408903693454623b4d45c2b1dd9ec5629370c315f7496e00e5f260a17e891956d91add0362e64260d62c107a9c'
            '1fb688fc8b4420019980955bbfcfc0446c2e8ab9cadc957af1254537e4e541305751a1fedc311fc168ceeae5080829612b4ae0aecd0d86ad5302fa3d70dd408e'
            'da9e497c489815747718f3de802f141f076b222ba26585726aaba59f9e2ebe407d2a461f2eaa5cabe05627372622b585936f99108e6e7948dfa8ee9adde0e8ad'
            '5308bd3f90b61c9afa4a83c3d4b42ff77830743760d2c4b0418dba7ef701e9e07abdedb4a3b9aa507db45176df5431f273e16468e2e5c0ac586b19258b53fb1e'
            '16e580ca4f0dde68d9fdce3a0d0336eba77b6d6cfe378633c3bdc0061b0954de6dd74cf38e5a9e8d9f0269de55ef117e438ed58c3488d66d072ba660133b0ebe'
            'd733a06266a6546a96637532abc9cec7b3f38c9243a3a9622bdf0c098a16e67bbda793d87650ac41ddfad949ec93a5a3296ec883ebc7880e4c931ece8ef56013'
            '8216b66a34510a48a0441e68f5ea06774fb4be1ead029c26f0c30dd82ff0b884fb620c31c0d85053338fed461f62bbbf156757fef1e01709f098f3ae8c863dff'
            '9a5568e046251ee7410a9704ba637df0829cfe2bc6f9e2ddaf710f7abb9618742c0710859f997261200172035fd1e07dfcb727c84803139ab170ce9c568f2b6d'
            '905aa6979ceefea7503d10409b75a7e58ebff6eae06e9c2777c8a353fe895f224a610a80db71e5772715c61946b26adcc5efa0d0f0a4c2633b9b5750804a1233'
            '7c21b35fa781f453d05a0a8a81095c02e8d30c307e23b23d6276f2b35ee744e00c8f41908f6aba8b44a999f886dd7662649cc6de1920ac0d0b849455fd070fd9'
            '1f4a32769955cff68bb3347cc82880ee582511ebdee766d73d5f39aa6de73a704341abd999ef1960609206a7222cb344c792f679071f26807d00eeee1957bcf4'
            'ed84c1d311ec7842832e183342c2bb3e10d462460d3c0fb03d0d4cc81af2bb73f5483997acf166eb8767260a0c43e701bfa41c0951f7a29ef4325ff07fc1007e'
            '94908b1c05bc15c9736da83560813917ee4e76876f3c31394ef6c0dda3b0f980bab70ec34304341b05df17bd49eba2f0cc369efa2ac8972a8fd100fcf5f5070e'
            '1ba5c0dbf71561b29b6bcb0aab20e4b07a7f72422d9d0d2061273cdff7c2cf2375da5a8988ead21f927d0301ca4ceaec3a956726e8dae68e62a672ba85d1f80d'
            'ebc9c6771d5daa35521ae7b923ec24adf862a45feafbde8b3e264aae280ba6e9287d045a74a2cbdf62e6b572ea59a755384e24fd8dcfbd190112c7dcfbf5b690'
            'c1d6f2194c851ef2044f2eb242a032c48afa3399d45b2df98642dbdc02a85afaf41a00a200166bf581a5d4f70d9e5fb9183f577f340d62bfd6d2f6b331879002'
            'a1c4845740441b0b71b18b653b3948d6fd244d3cf6726e49845541be4b8167e2e9095d38123fe94c0169afac421b248fbce4f76ea9290e50ebeb9e6cd9d22190'
            '0be7d68f54661c8070b80a4e9504bf6352f3aaf087f5ef14a3b521fd1c15d5cdb7927b76ae06369290ce6878c9320b02946522df381ebc3146fdf68955ad4749'
            '2719300e548aae73bb53ada61a0d24c126d0fe825cdfa5f0834bb3e4495daa12c38338c4eaa89ae575c85c0f0a8f19659e674b4e65fa2029e385949006b00334'
            '64dc592725ce712c4d68c9dcb39ba6793204f88b4a8f46bccbba9ab22e818885591078a013c727481b24f509f06ee8063f972d1d7d7e4a6496b02432497e0b20'
            '325b8f12d299cfea651edddbb237462090b287b68bf0c2feae67767bb6f7d0279fef10e798e5982cc17802ca847d6262500c92f04711dfc6640390c764dd31d5'
            '30444fad035a5083140a20a014c5b8a9b4f014c073b88199584519bc6ce9996bf0da170cd1360281800233e81475409c6f5d0f16b802902cf5338dc549279b45'
            'f61f86cf40b53bfd4680edfddecd396a2635bef0c2419445cf52f63dca53da27603862b54de23f97386c8837a5f6d2fa1a8df2425176dc4fadbebb42bf33ddef'
            '324c4c994e55cdda393da1d0dbf8cf7d8e794481432939d4b9b0d158ee518129abc830228fca229889723e7457b1ff33784f7093e66c2c89fc078bcdaab8c6bc'
            '8d41339c86ddacdd5faad662f331a01f1d777f21165c4908ec39be9f2a8c966adda5d7d14324a58bf0a84175e855d0a2cd77f15679c3755f24b7d47f3f48a28c'
            'cf67e20d2efe267b2bf46d32cf684ba7a8d60c87781c1246c2eb2ad3f74f194c63637fb1f2a2e6524edffbdccd97253f16b16aa8c3b7de8fb110c7e3ae752d7f'
            'fb0c29ebf12c4901a24b78dc996f6ca390603f5ad2f23def32af82cbfbc5e9a47e1069841ab0db3f68937b33a7e7fe60ca773c154498e37646b3211cbe06655d'
            'f37bac0b09a23c3a200c16b025cec1c1e470eba8fc52a30fb048c3b6d5cca7f3a578c2c245ec378facc9d55eaeab82a24928d91985a5bf65a03b7f5123b928fa'
            '599904bf221abf952a7d6b45e387a7e43f4c4970c6a7a5772f8bfd2b4d79294073a791ad48a6b2b60430cad9c5c7cc161068c7bec54edebc5ad56765738d8d6f'
            '1fcc7c63220df66363b1294162ae98809a207cff602f5490a42169889b8f27309796d56fcfc81fe0e87df3f19e6e5e12365acbbb6dc0b509aa8658dd1de1aadf'
            '33384e39af5c30f56fce040e09117fd0879c3b2f49a0fd0c700dd53e29662f20c191e6f6a99bf9254f5cd1278784095488d1896aa55bd50ae6e1474516ff2545'
            'd8b612ba4921f23e464775f009487365b11295010016f2d87b6096c83c08cc7fe1241994cdd2fe1303d4651e1d61a41639437c11384fe0ee076c4a7593011413'
            '87c030793fd4c3e254a7de40d88b328c9c0e2e15a22ad70045b9d122f54b11b1c49ec42dd11765d661124d2540e40bba533831f0575fe9aa0ee915ca30470fe0'
            '572c0f699deedbeca7443bc9d0c935141636114bf986f59a3a4ff96ddadbdddf81c5745c15a755765b3d0ba2a9ef749276071f8bb884ba2e44b3596ad93e4500'
            '7935db3542dd510f8dd2a150033d282fc46728be34bd35af7d94a968c633640be92ffa03a3c4b30fe1d5c2cea7fa61e68d643191613437c28711a7d0c28e2ed3'
            '3d842507516fe2cf5d80c06f871c757a08060ba3e857845fe0e3c15c1df31ca3bf0a5ef6bc7c83ee1a15f59b4f2d5ac00e1ca9f2fd1839e957800e33147d9078'
            'e2b0b2858a0fc97b0af32bff1651246b1558ba8be16c941193f9a31feecc380fb1d93b926ebd734a9f125c2715c364bec4c247b3b6aed84cc475b064ef8a24d6'
            'ede171b2bf31b34c9b6dccce9cd8be85e701bab6ad84f9a43e7bee3c6601c4946cdfb1267ac8da2e9bbfe4efd39fa0f1a4f3633e0e33a5f41f8b413a22652be4'
            '934d0fa0a0ceec899c18ee16e020a26a9c0599d51f1139a26b0508ea1c570602a9028692ac36dd9ff87d2026e3a3dca8c88d3d39b82da8961fa035f8e0dab0d3'
            '01e1c0614096df55093e7f0a203ac5ab141bcd663c5f71a2173d7d716022c6bbba4f1f3ef66d5c583d81a1d614659f82368a5a98991478bfd4969cbb335d0aaa'
            '7ac315d4cda83106258ccfba4f1945f817d5fd5f7dde625f641ee790bfe0193660f57dd69258c0db4bdc8d334b1a9520c5f856b7914b571e4315fba6b16ee7ff'
            'e7187d9b0c5a787f6f6d1f337a072a0eb57b1b25bbf74a8c4068075a1e747042ee23fc23e7f333df1c94c03d29c49d8b69448079c8fe7a07c2a202b465b8f979'
            '49dc8f417aaac2aea5fde3781c5b159127d9a76813aea3b242fe3058c7e775761805415e85c6e80813fa5c0815277a9ddeedee5aa7625b8ed137d92fd3d6eb14'
            'ac48878324241ee9e4b31f91b7400985795201c6c94ce2878f5fb39da25fe479669748dc07778c806a1bf382e65080a79f44d8a80c7ebf59d363fad5fa0084e3'
            'cd18f08fe259778d0cd059357f1f46c014eead4008645a022c9b0891471ac72df6824b72c0440a1dc610baccbc1b9dd1d2ceb80dfa7313f26478c8930f427489'
            'bda7179ceb26453e9ef8ef37dd83d03a32fb16f0b798f280b23ba6c47f3d268286ea5a4beb55f7feabbdc2bde182c2620f6b8edf41748401112a3c656d00e6bf'
            '1f495b4497dd7a90e8d111ea453ed351b44ced910fbba4bac669a77631368337c1cba58d042e5f8abacb079c48bf1f79df0275bc1728f2f918055b3653e817ae'
            'ec36cb6dfdd677e7b22415703e5a62326abe13ecb2e90f4c3565ef4149a4e63d53e01b2de6b23b66491cf217777353521da9fe5667f246bdbc827b0358cc0a67'
            '412b95f604a655d915e323e1ed1b2510b708c39eaf147c45eeac46fffc2cace2e57db848b8c77ddb5ccc96be8e9315193d904bb5e3a7839d358ebe1d37d70fdc'
            'aabad94bc00aaec4929cc02d37f4926df22526cdf7d4e2cce12a103ca69554597a7d09951c66260f1ff1605dfa9eb07571f5a39668de3f9fdc9a51af288bb501'
            '2ff0d5a2fcae26591e8fc5a1be1e2b35b442dec8f2932b0770c777136b642cbc202c7cb645095c7e6eca713b2fabe7523fb70ee84349e76a0bf0ee1fa5866d61'
            '40b8dbc6dbbe021c0cc40c321553ac69d25789622234eb1c1da0aa747f2c641483a387d796c5b4fa1489aecbf83d579a0cb670d9aa1b95f78c2a0c5fb411b78f'
            'ea5f4c06434500f954611ea1324b4497c2a2518fb36bb724e1190b159e1f865110b22e06fc0aaa33ed0803c23a0df2e56eb6f6d05918e6c7db7e25de3d75ca0a'
            'b86159d177844c330824896853b8194fe122629673a279a3829282f6e90c4dae65547f15382993098b97510e76d1cfce1b3ebc01138041bc23ec03305a5993b2'
            'c9b61b8d62a643c869c258ff747ddd9dadb4504e1b7e6b7678b9fc64cb40a7de417ead175da2ddebe4994ee5c5ff89f645ab7793c20845fb49395f746642d6f9'
            '6e9ae7c608a032cc5ec9eb60683dbb9b16f82448506b1ba3987501e3f5d0c148babca5626dcfe46d658dcd88ed82cf6c9f5e21da9de17fe03fd3f54751589141'
            '3f09114a0d2250710ea2a4d9172d03d323199a52d9c10966d7c9fd13b664c305660687058e6339d94cf1a75a70436e29c7851de750e320c632d3948d1b592321'
            '29f30e325bbde80e567a1394bd14a541bf340fb809273225e50b71c92127d0a987b60ec7a2bf1f037ee2bea8304bc382bba8fd12992308e0ea19e831ad1c70ce'
            'c6abce9bb925753423878b8adb1edb8230d19c37a2b755f981f358177544ddda8a117f56e592fee32ad7469db0ee79d54290b66e5f81b2fa840795d4710b3065'
            '16f358ce2cc654cc27f1ad54bcbb772eba9b48303afeca80d7e5f292a75b98f6e091b447ba092fc164cb28279a53637c139fc9a9a8de07a5cb2e28455237e794'
            'acdf0afc289f7a521640094f33e745a1c6b3e09c2b96be1e9019562cc2cd20fd7252ced9e898e6443f237b924b4e5673de714b3066c22f2d3c31c0ac60b1b25e'
            '1cad1416c798fd2fab469f2cbabd33de93abe2ba906429f96c22aaee7378e0e1be6a7ee49bc093ecc5fea14310820d4d997e34e8d5dad7c2bca4475bfa04a0db'
            '6dd038446414dbce78efc0d4cdc13c92ae611c84540b832dba64138b5a95d55305317b24594113e50f2819a4999c253879732d10621f4b75e7ffdb1cfe5a2591'
            'aeccdeadc400c69941c4d3878657e0a4708e64e4f5e780c289287797dd561703b736a30fd91c3217a7918a60c43e403abbfbb11f0db12b07b9f148de60e40a5a'
            'fc620e959eac61b653a160336163bf3a974da47364503d0992b7be0156d9b77b18388e3a721828b86c218ddc8d692c5244ac1dcf2d596c6fc675053230ad62c5'
            '1fcf727cd521072fafae5797cc758f7d862648a88b283b0b3d91b755377cfd9f4e853abcb6cd930c576434ab013fbf02fdb7b9139affd9091ef4a548ef345cea'
            'ac5046eff687566e2917915ec886982137d8bfb0c4d1026763ab7d1358022c7d504a9cde89e0f34149bd4103d8d18f3534cea7cf444cdaf750277956c939e053'
            'ab9eda82ec04e9ed5e7532181cb1f78388f6db76823b40280b6872ba6522d244d81f40273ccbda12ee0d87f9263cf8d32a43478c5b4db77ff522ae634699ec7b'
            'c17ad720bf22daa4a8f6bd2046e218875ac1fd8d1e256b6a0bc4d9d162764f0af1cc900b9dd54189ad750deff2faedb183301318131d725a2da761267d5bd706'
            '106f5806dc52f3c49cb162b850e85cb159284072b0cd0e833885aff89d711be76debab4e377e9edb11f1f5aae437670aae5df76c1b5ab22a77c047e21fb44404'
            '362aac1e18f3a3f694b657cf9bdb7c2c2cf9810387bbd71e13e0b9e455f3d3e588b7500fe6cef299c43c4d793a7ebdd31a15e30076c0e7e2600555c5b187fa46'
            'a8ebe8abaed1019b5b8cdf567f1bd8eb41f34b75609e99e7abf53c92884c49a886d5c481245b4411ecf735acf2e611f872464d47a040ec7e6a6f19eafd23f51d'
            'b328345dba6f6d02561fd63dad909b1c071af652d36c198bbbbfb746fd7907b6ca7d048899a4ef42477ccfbe5c2345be3afd4bbed1fa75f04f6c6714f0831e1b'
            '3038339af3b2c01824c17bdcdfbe64354c63e4bc55b6bd463297c1f875c49980a747c5447f9f468ff567d6bb2b883b2cec91a1d716fed3245aa1a1bd840412fc')


# vim:set sw=2 et:
