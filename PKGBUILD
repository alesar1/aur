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
pkgver=102.0.1
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

sha512sums=('ce804fa4e5dda3b8c4c7937f18994a184b0eb7d8fb9484dc924d04d3213ee3daf018141f91703daed6d060a99bfc5d915186db10a4ddcf220c2ea43e369e58df'
            'SKIP'
            '3526402ccae1f0428f2e45bae8d0b2cb909ac2698bc3508b692b827839ccb21203ce414206039776f6ce946fc53e636290b7870e9886284d5e9d1e8ad050aac9'
            'c949cf492bc93b6f3f1f827744e0f39e555c518434c8e73e27143a769b0d123fe4ba2cae07b7b7e7b594f8da43383d4fb4cd28b6b52e0d3e7a985afbadfb3d04'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            '7ce4fd3241b10415c5301f37ae01645c223e759e623e62293be9f6b36dcd488de827e9eb3fb87c00c89b96111c317546d02d517679702a70f9eb82982863ef54'
            'f74af1451022c831e3b8fa7f535f8a692f279619c3d9da2a6b61f4b5da000e896ed5dfa3f33afa8b898f5ba3a0167f4d645a2db9b190da7bbb7cd05dd3c9f187'
            'e02547096562f63e530bcf9042c0fda29c7a3f29dd0d46bcbf78f862de526929e6918001d23fa3a78019a2b84642ff60d8d3a06973b6bfcc12a655d64ce46311'
            'fc2a1ee25913c7bbbe271b35560eba51eb38ec6194fbc52aa8a99a586646cd5c5738ef10aab3678009d4e452fdb0aafadff7ff7678e9e9818c91b547f261db26'
            '53ef9160ea64f0995911d5d6e489005b353c067d85a6d25879e68442b40ee1c3025ad0e4ee3e489d91da0bd1bbe8164336013d8c3c69c19189a96289ef65159b'
            '569adbf3096430356d5bcf6e6e1d3842e34666f2d996a49fb7198e5ea79302d0529504d5d39b3656bcb46395be6cbce723f8e29d422ec61ee7206d44c4e82386'
            '79d842b96d38194c226810876e03f415e096feb61102e3502ffb08a909ad1c311f03a54810401abc9e5fd71d4534cf1c15ead46b6a0444b9b4941d15da71bca0'
            '2e0ea702f19a6c67b1f552f5f8407f6da073434e14672042b986c036136b55f1ba346af362a98745847b4384378353fbcc4df34b63eeed2ee50af2563b7a29ce'
            'd60acfd50c5b82d450a7e1231028f092129583ee5e40bd2467411a9fe9d2d43c3f0df2b48a4b709058e76d5c95e051ac27dea749e1dda5906d558ec1ba879ffa'
            '8dd22fa07396598cc07416d35dfbe31f875614b8865fae172a462d16a9fa2a5b5615f7fbe76b673f889486975eab3b95ececc336870aa681c7a383a86b5976f0'
            '3df5cc160ec7bec9c98efdce396dc5632c178e93ab153d2dace316a74e938115da6030da2988ae6c5703a0cc118176cdaa7fe282df35070a822f792ff82600e1'
            '8eadc35dfdf43877edcffc3039bdf09af1ab2133013d43d6e20d7ffe97011f232e1c316bd0dd418e258f4b7b5bde311bc07636d6a11b82d30d7ccbdf36ae04a1'
            'cab1170f7f894cd006a5036baaa9f583eb314380b0e7fe64379073e65e4f3b77995d1bca46912488cdf274a44c849f03cdd2d6cec092754a95b6f3a890a69c9e'
            'b9dfc998e24b5d6d0adbbee78d6c7b19b8fef3540bc30ac8d68571678291f3369edd936b956fc0cfc5ff07ef5d2afb9f83d2b21adf980368df72855e304acda0'
            '7d1e846bb53a419a4c463df599203c4c3fae9fbd5a2cbb367e37ce38b0805f59afdf55229773c35f837d2310f85c959e84f9e91b339ae7ab25b913624db8bfe9'
            'eacb36bdafe16531c022f4130d8e80d604175ac99f5a1d9832cc6eb632139b3fd5a9fa865d39dc8ccc32644dfa0a93d415d297ee216ab5a9c801dca1ce0da263'
            '66ffac0ca8da8f79aa6c55213e42643e85557f10180cad8af86d6531c2a16e9d03eb4754a1d2dabd44d4cd38ed8d2540627bc98ef6c13fc11ae8df37eb2996a0'
            '0cf1b10db821d195940c07f80b1f8a293207735cfb8fe4f855e48c7662dfdcd21b3ad8e28fd3d65a4c254babd77aedbd54fe7c4a7689ead087fdc35cdf782e03'
            '4e67080ddc91e1ab5cc7ee0dcfed86f71aa6134137fda57e0a62ae2b0ed7bfc32bb80ae4a26325d81ffaeb84cb7fb2ef400446941a3138b01a7a592dd214b3b8'
            'd0cd81975a0448ff270631c38607f27a4cfbf8bc7eb279252606109594161981520487887a0d7ec8452d87f382c5cb644313cdffb355f84e4ff6d6e3bedf4047'
            '221eb342b5fa6a630c6277b1cd5fe4a280bd85d0e7a3a56ec1b816f8f2904f796b65f938e53446454751b15fd0193725e0f02c87e034bb4652fb14f3a043d79e'
            '80c57f20a083b11c73b80a68b900d15c36aa3e5ea9c65a76824ad9b33ec18e0aee2eacbc03daf58eea5ba5d7b374f1323e743422d8006cc678a2d8370962a0e2'
            '2dc4e8bf24a0a8b6f2a172973702d217b3cf85570903c5173a1ff013258759a986093a33349183c56b535b82ee483a649674ac369202dab9757371670f39b2de'
            '368ca3a573568961c095859a5bf3d3e6f68441103459a88d8afb72a47b899b8adbc13e2b40d274fbd64105749d99013b327dfacb778c49512cc901c84c789e84'
            'a9a3da7b72d2738b2a049bab8b007e062d484993bd4b13ea1317dc6e14f3ff591b3223ff41e0d0dc864bfc6416ddd85ac2e93054bcddc594c133d842a7979b5f'
            '7bfb4598200a286a92b12568487ceb4fe920988c7941edd2e227c472cfd2768ca20a10da02e2470d2afbe73b6829d9aeeff82e3f516b267bace2b600e87f286f'
            'ba9a5e8a1a29c1d610116409feb3a8471d06c343039fbe7b32707738fef2e5c07882f03f46a4479000efb9d20d76e838c881a43addf5c19112b89a200bc2ac87'
            '422fbc3932c77726b5adbce8168d64477068444706d6a252f21cc0b0389d26444a1aeddb696a5af9c63d9b2115d0d924fa62af69f358904840b8752b31eb38b8'
            '2572f6da107523d7bd3b875b096f6a2526fd81f4cf23fdec4dc29876722ad7cddec830165db1e4f02861547f0c2459ce9e7fb7b5d2c123f57b576d45fc40294d'
            '2dffbb1a4b83dec1562fe08c28b5537a8b0392286aa5676619f84f7fe39df3934b77c7331281c2b7920ce88b369990432b3e81665bfc26cae04059e816cc0e97'
            'f0f3c5b3c755151b3af4d98694175f9a984c14e4d90b37d6056a51548f30a055df727a163f175aab93732c36a9a00c382a7684ed0c232c42f3058bdce89bf48b'
            '0de8200699e6dbfc750d18c8adf440460c7e1514cf87cb8884bb2d5ad98aa3d3bb3260e0964e9f423e81c9d10267bc05299d0f8e260c544791fc6148e24d4366'
            'fe6f4bb497271134c0bdf96c92a146136cdadd1f24ee710a4e8b8d648445bf27c8935d5b5796883fbb325d4460c9cd04a347361ed400d428ce2a51f842422fe8'
            'a127ca75b3649b1bfdd6def614bde71a1c8cb238fc4c74a3d1d667468c64fb98b32bb16e887b94ceb31747fbd124bfaddc20598d2972e0250b6e9a341e8470fb'
            '4a834cdf67c94502434238e714925642e61c9842d471be007d325f0f8702047655af7fe1ad7f81fd5ff0238dc1765b7a42889a652ac757bd7f7f4a27794111ec'
            'd2cfe0d2d71fc7252c0f60469009b1d0411b8e5842c7ca0c9dca030632460896a7750e2c39cf8c84d100a1bbc80c793ba5015ab78372319974043d573bd253fe'
            'd8148f48f7d148c3e8eee8cea09f9bc7b46fe38ec7674b27c60d923884a8530153d36d045e4ffed7d909a5a6292e10c3a6bd43cde6897326ed2fccd995969377'
            '47331a7a7993c1b5ff94e96792aac7852cc75a9ad1c20699b671cfa57eb2e2da7909b9d6c4713076443e68ee7a73107e781421289fa3548b960526e85f70c9b7'
            '7701200091e00b3967ffa71ccb7899f8426fbf80062df5b441e95e5e8e3c6fe1ea0b8ab45cfdf4ad897277013447a8f800a4b807c9e07784808feabf521755f3'
            '078a0b121b20e6c119c515219f4ca59a462a0f54e2307d2ba038bbfa4a0568c0a5b88b8f38fb249c3564a8b94bc790b9ed379336a0b00e3205862db00bc5a0df'
            '37fdbd6561bd9962c2ffd830660e1d11cb32a6b87848953ff25b9a3071d142960a8c6bc86608074b976a8e84978e7cc4ac7a1e282122fdc518cf199f64eca80b'
            '1c3be34a41c51fd82078dfff0ed9610e38abfb37fabe9cbe9169fbd430f871eaf409a6565b27b40fc7382a606c342812e38bdb85d06112e69b09e5298c1e8cba'
            'e9ad1cbb9110868e984e105daef033ca7acd3a272315ced01f58cebb2ffe20fd5aeaf875ab2dea2cdd935d843d2d687fb7a216b30072c85f5c0561c9db9f1fa8'
            '41538b2bfcf7cf8bee0713efaacb8016aa6b9cd617914c07fc3cb5f3d17200526b357b2deaa9959cc07d03151296c580341d1f655b69ef12171b02522cbabd72'
            '3c6dbe4996141ddf0990afa0a5fc69ea46a94d5027598100e509212e5fa7f2e7c8ed61a09d06dbb216a0ec764380b8f58af7d1f7bc79d8f645bb15eefd197f62'
            '8763d963eddeccf565cf7cf934f764ed734fe47caea7493e2208b62624bbafab1118826f50fd5751f4a5f18288ca6115211d662bd41acc3602b7c3af98e35e57'
            'f4727aa9ec4a640f3fa29a3e686b7ef11549477ae7d8f796d7c5090f51df5f6524ac2cc5707a8f980b3308955f0300fd2ce299930a8f1200ccff832e1c599b33'
            'b399e9d1932c94cb6f3f0bd12e1a4856efd94b6c70d9804d74272de043af724d78b62eea4aec13f9607db8ac252e1578c225ca2979be14395ad4c7373ce02701'
            '4a640adebadead79a719541b436c1b78a67ba041cce4c1927413b454c480ea6869c7dda482d022fd54e2956c19c13fbe9b26302026dc7f4ab813af61cdb2d09e'
            '11e91711cf6c6dc27be3b7df9ccec382d39bd3198c936edfce07e351e8b4739879fe5f6242dd4712e11ee89880fc25ec4225d7ee1825ddbd88c5a4309e2ce2e4'
            '11dc017d9049cd8e5e730b8d2716f85fdca3108ac52569311a5031914e430fdcb6ede4cdca15dbb65e5b9787383d713cfd412d43f34919d5cc26419316cf4b80'
            '6b0ea2e772d6a7342530d8c342d7a65c5e94f1edeeca646c7b713e8091a4b46f8261daaa48a9d107e6ffe64c1271f7bc2cba61198d73bad2e3436502f3b8dc7c'
            '660183934292f3b81b2186d3094bba5563d2f4d9f09c87309826d5eac8c1c3f661005d887b42b0e2771e34ed7fb97915aab20e50739a1c95d03959369cf76dfd'
            'ef3d2f808e069e13a8e2d8849932153d35af177cd052a1004d78b007e2097e3e923f536c055ef77fcdf82904de03a396e588fcf174222de41df9d6e136b0d6bd'
            'dbf722cccae8d4919bf04fcbcc9568892bcf0a3e036d98ea2079783486fe5f8a15713d705911f62b2db456ee11651befb7efa672c1b795ee90ec87310848abd5'
            '79cbf9b1be8f2b7b115372961b72e4b035dedf515032b2c18de6a03801e273ec9318284cda66f2625320a7592fe4265c9ae414645eb14c2f1378dd0896e5a8f9'
            '69de88866b10e06d55b33bcf32969e38db83898d553349c9b4fd5229e69fb7afb7cf2d52ccee64b389d249252ba714b54b9be635c7819a937292189c0a8f49dd'
            '04ed2d44dc69f8d8d2913c5f20f4f890b5f6331b0d99d535f7bd822a06e75edf35cf37baa67edd69adbc51b1acdd253989447888d15c83cf6a3cb2bbd7f1de76'
            '3807b3dde66d04b28c024d675a9f5013462b9c7ff88d041d2d17055449a6e986e178558ca6526a332797d9518ac53ed4dea1a832214a50f2736d9d2d70b27445'
            '4c20c0b3b9d0004e82afd2503385c24a55893759f6ee8cabfcb5e7c7ebc12d198fee5583c37cce3d86982439ec38b46e9128231700926046fdb81523e4bc1e01'
            'f9c5c0254c6c3fb06d7bdede1ac4b3b8176abf2a84b5bb22df033086ec53f00505e2a9a7ec8f5079c69252684a813a8ca938b18843bcbd675c11740e4ee57036'
            'af8869fb879740db71752ae9b028f1ec7a071b8faeb0a96485266338b2b4758f04369ec3e6d8e2edd3f7bc8439d0c3ff3c75c827c3ea0775f50b697888e0ad3b'
            'cd0af6b0caa31995b4d9ef71f95f23bedf118b9e3e3f017eb5326f82be251f6fbc25b295bca7bdd2542d568bf76ae9b19a7666d1abdebabe1911ab1686adff6e'
            '0b4a029ff7864feadcba74517358bb4fc2b8cb7174fa0882765e0466acdd8566ef77b012f5df76d0fdcf6aaca66b6d159385fe3df6fafdc903fb340848652d01'
            'b0d86895b409ca834543200476867da1749a07dfabc8485adf63a99adba3dc254cfeff3d939726cd55da9691fe5e8e6d1715041f4fab36265f5f9239442c94fe'
            '76ff6c712933ee898f39f02799f1a6bd97159804f2a9f3549db8ab0aed6b30163a996ad46c98255323edac04c41f31880b53192183de512a2b711e6adbe08bbf'
            '5446fa8ac8d462fb37bcc81e1ad4f3ea5dbec70c24d7542157f2ad5e37ff36ff66eabebf95c6f2d3a08b7df6e5bbaa4ffa03f479decd07070ce4248b5d39e856'
            '1257c3cf914a6ad6ee15b0491601611bca5d374cc49fd467b9d6248e6df0e0c0f8a088a551f601a12f8d283ce8d3a2a4412e52e2166c3c630f17c1f984ef7475'
            '126ed95ac564bd755127e1ebe18a57e50c010c59009c6bb001405a7f4a3743ad6bc4f26464b26d01b4e8def03f4ce4f8fedb22ac0be42127fdbc487ba32ab93b'
            'ebb2080bddc09f6a97e9ecb5af30a1d718d7db20b5ed07c34cf98abbab2e726f54312077f822c56f0180ee0b770e580857adc4824235a8912d04a97d4608e363'
            '70586d5ec9d6dc9f95ca105363ba886f8e011419bb49bda827eb8e098e585c1c97ec0996c61401e4453c2302be72b6efc9c59c704963afb5a0e552ba66cc9d07'
            '5c6848b9c3c20c389e37fca4f84f41e6b8e8e3d0bd4040b2aa6ffe0bf10cf292aea594eb2b569d3c4539c26b52069327345d234ef1caaacdd52525fa91b5dd18'
            '6e4a96d210773de55bc0002f9819fd3ffc32efe992e338db9d97e1d09eac40ac03d89ecd0888834d177dd953b045a01b2012d5447c936478fec891ed136d6473'
            '2f22c8bac6d8dd6975a058c2c6ad5abf618ace9abc673497ba73cdc3438be3e7766127cf1c32c5fe9d7dd8e36d4eb7798a16438694cb1105a243a172450f9250'
            '83bc77b07b1f63d4d5e624f439bf4120a33ef5c93d9896558a45506115e836b74779a425a4ff9ffc91f3bb5d3c0d6cd17ede3e65d8a4ebf74baac2b002a8ea15'
            'fcd7169bf8c672123cc3272f5c446d8a200a7f1b397857a72d966fa84e712c7940eebfe8fb8c74e4ace578c067414eb0e64c5803efde8536fe6375def3dd12e9'
            '63f0e6c961566662a47d76d1522bc8fdcd7dc380ad4f1ce1b3ab5f33b7d400012a291bbf8d856543d861f45ea1a2f1f91e18a66f18f89ad6efe2ffc1703bc0fb'
            'd83ee29ef0cbfe2b65d5974739cefdc1a656a64c068a64f68c1d3314743d1a5fdafafcbb31f03da95d09bfe1df7929679fc111066da4b659402999a5ffb612cc'
            'd3bb2c30fa02dc4679fef98d4040d7748c5b2cf291904ee8278db98f7ffe1016c3e868914f4e28051197f4a1fc0aa6177a94f6ed4418ed5933474e8cae46c55d'
            'e2fc79ea30a009e5a38cb66318d050919b32db8c724ae2dc1bd6e4cd251f98de1749f8d58fa1fe805f0a90d7f4d2bd3b613a5905e6d9061d62067c657fa234be'
            '994ef272c7215c1a8cb76db64071096cd4e5d3ca4e3187b7b1eb2d941a56ea4a26b61461c34b4af80cd9e31804d4d33568a5d965dc8fe60cb6ffc4031fa6a44c'
            'eb20312d19ee181921b5c1443b036340e560808c7d5603ddc7f98c7ba243dabad7e7ceff228c84613d23b4ee0de369d869041ddddcbbfccf1514153a62e9dffa'
            '4d47555b0b800a393c83fe2b2b9ae813bbe38b88eff52c431336475e251517b7dbf401268cdb0d7594bc1403b599ac9ba69bce71af3b35f91f9b5f9636f82f80'
            '0637b8ebad20aede0b23a6698423bf6aee8b9910320fa276d9ee9403c3fcbadeac6657ce8e7ae43af032e1ed2d314bc5c62e2c2b5360dc7b4aba308ffecff109'
            'b157c6a4d405d35a1754614ad08049345013e3a99bd5a6b3ac153969082ae59f4743dee3f98a52d7bb0a38be72ddb3d073919b7e409ff12b74a4f84b2deacc0d'
            '6e2653906c7497e3af998b2e12a875ccda1bbf7a88cd0c0bd4d23f527dbd074df558ed874000045e4b202bcf9c8101f1f361c7763c1d5c47af7a1436df0ff8f3'
            '2b8a706116bec2130db92b1a21310731740e6b8eeab2a0f2cd31f1974e84a62256c70cbe3213a7bbbca9ec2d7c9cf7677d8fbef223d40652bfcfcac7325aa8d8'
            'db824279864bb680ef8a68447ea8eacab76b2b291392d5e00dd6bd755cc46e337ee20618daca07b650d2d8311d0ecdc5c868f6561c8c04ae8384ed7c2871b773'
            'f127b615f2bab6077cdae31bef06a88198dfff154ad4aee5586cb0752128b2be679aa8c5dd9005a705f6e517159900f63e4ca5002bcd5c0ac3eed29f7e9e6b5e'
            '59f2fda71335dbe678238bd63ec2a9467eda4570e150439e59ecf22c21937bfeabfdae135147a3d76174ac4e9d2e3b484f01c0c45f3ab6bc30464a508c6a9d57'
            '08c1f3ae3d0f43b392186cbb3420b2b205897ffb481ea629db27524c77ee5bac00645a16fbd9297a280730ed663fb1eb95dc523952255fb141cfae19492ccd29'
            '2564bdf0b50d033f3d25f2b5fd58c001aedd0f307be61c47dd1f7f448990aaca1a866c15a80ed0103652152bac2f60c5d2f0afa3b0267acde05b8bccbedf5517'
            'a9975bb9908cbe0496924aae4ab473fe7512da31b9ffd4f63ace8bbd3c1f02cadb9c2d4e320c9aa290f73b925f41091154fc9fdfce1585a35328c54090820b9c'
            'f99eb2e8ba3870532d01459b728f3ea328713c33102282c1b721e7c29062f8eae1e47ae9b9ce2325739ddfcafeffd9ab9922c76e2faadcc1b9987ba6fefe3325'
            '2c6491cc0816aa87cffbda9f7c94ec3a09c470024444cd824aba85343c95ea57e7d657bd415759e3e23001b8b627bbcad897781fd218a3b3800e4d005993e36a'
            'f2a446710906007bb7a15b7d2431558783ddd09ca785ee2cfa074cc9c70325206ca542060953cc5d3758ba50948987f2f0d6ed9437231b0b019f864ebb8ca2f9')

# vim:set sw=2 et:
