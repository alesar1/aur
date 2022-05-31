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
pkgver=91.10.0
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org, Extended Support Release"
arch=(x86_64)
license=(MPL GPL LGPL)
url="https://www.mozilla.org/en-US/firefox/enterprise/"
depends=(gtk3 libxt mime-types dbus-glib ffmpeg4.4 nss ttf-font libpulse)
makedepends=(unzip zip diffutils yasm mesa imake inetutils xorg-server-xvfb
             autoconf2.13 rust clang llvm jack nodejs cbindgen nasm
             python-setuptools python-psutil python-zstandard lld dump_syms)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'xdg-desktop-portal: Screensharing with Wayland')
options=(!emptydirs !makeflags !strip !lto !debug)
source=(https://archive.mozilla.org/pub/firefox/releases/${pkgver}esr/source/firefox-${pkgver}esr.source.tar.xz{,.asc}
        0001-Use-remoting-name-for-GDK-application-names.patch
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

  # https://bugzilla.mozilla.org/show_bug.cgi?id=1530052
  patch -Np1 -i ../0001-Use-remoting-name-for-GDK-application-names.patch

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
  export MACH_USE_SYSTEM_PYTHON=1

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

sha512sums=('8344b829d7bd86250afdd4cb582e27ed5705b3ef48aec50b9a39abc17deba86c9fd721f4667f5c2155e3d7cd1d6e1f82ff8e218ced3a16a4e06bb414ee0690f8'
            'SKIP'
            '88509577b686c995144163538efdba3cfe1a3b01564d3823b9fb7972e64823d1d0a444372636f8d0b355c485f095df8f273a6eb5560fce4c41d4f1c0a0467f75'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            'eab581d3b6e87f88b5ddeadcf805fc456ba5abdf8bcd571d961609aefefc35aefad841c078485a8509ff679baca516d2425f472a49bbe19fa782d8c8f52bc726'
            'b88dc4bb84e80752c1d3dfaee88f829312b063be11abaeb5d3b0a95e4441be7f89ce2fd090d50786bbc01839a08b9ff85c98a4d54c9304259078242187056426'
            'ac68029cef8e543dfc7f954baa518cdd25180e5f9ddfee9114fcbff2cd9cc9784f7486c10c38e5c4980cbda5fc63b26d393ec1ef4457731378e48c762d16ca68'
            '583a1b3cbc69956dcf74f27e8cc5f77848b590b888bf29754eefc33d8994b9c4e013c1f080f26e68b3cc3e409882e6ee48786b087d4763ccc544104d37e7c1b6'
            '6263aa2c0d0455555abc7fecbe2576259493d75faf9f93e7701bd512c591e538905510fd590b93e871155e5fc01aba95188ee9a6b563cf3059d95ec1dc8449b2'
            'e52aeedd4035fb52a0110bc929acd3f5c57aed4a700810ddcbbba25bcd68323cd13bdc2a67c3d4c8ea6bd2e258efc98955bc2abcb54cce981855c89e070b0ba9'
            'f57cf538dbba1350676115da5e25847b5e1b6eadf6c89bf10fa6122af8360f41e5a4c183f54aec149b3254096e0b4f40fd6ae91e077324463ddb85793cd36ade'
            'a238a676a8cbf7743f438a13b271721a3df76bc8f0ce7b26b17435ba4957c5f01fb09fb34ca597c569826f3a6257bcf750028a22205d0ca5c7cfa26ab35da7ba'
            'f94a61f3fb70da5590f9ce3224386855cd05bbcb5c7c51c8933f8c3c7c75cadbec858e18f0bc38d2150f72c40032e3b3a4795b6f25243978d83c3e2df829f69f'
            'a2bff7bbc7477a8897735c50e9217f1f38994f868f74e4ed0d252b95021bdd87f9a88e4e12c92bf293bad644ea1e6c20afaf5e94ad64cef0a1b1c9de04db6e9b'
            'e21b4c0b4ff71b56401639e8be8701bc34fced4e3fcc3a29be3641bcf2b860f1df6e331f34e9406adff4813c79a089e0ad9403431b87f786a997c93567202b69'
            '79e9bc156957e70eaf999f356da1c2be405891af4b748121707ad8c644be3b1203f359a6757016fd0e43eb4484adb42242712a6aa76ca3b037121d926b3e1796'
            '41cdf1ea11b8b83888dab1e4a1dddd5e2a47b485a99afa28aa146105452d319f95126545274a2eac98116222cd63882b09ba9fadd3fd931fbf486e288d8bb249'
            '04bbba3aa9afb0fdd387ff1daeccd18e3248e49532779cccc1976408b0ac7d87c96699142f42ed6f2783a04e18fba3f038e150ab53fe164c36643895fcd8348c'
            '24276debe4681f1165c9651cf86717cb3e6c28282e682cee27ef2696e94990bbba1e1bdd964cbec0fb709f748bd095af3f4accb3b1f401d7b1124bc0a70e8a41'
            '823a35361ea82709e3e1cf5b57177e994b99497ad98418fc8c6b1777325aa9a202867a41707c60f78cbfa029331420104784b8499e5f6b897b4be23f4371cbff'
            '4aeb408f7309d12cb151916084d5f8975f912256a1ab4f1692bc186842cfa8885eda3be7d9b1504d99e922451792e8ae8af946ffdc48ad256827bdb63f4f04da'
            '760d0f0ebf6cf26e0e79a7bcd34c129a4427d5564291d6772099746baaebfa7148afc4f7ce7fe4af3f09b5e1f5bac99c43a414f18eeef6679cc251a8ce100148'
            '4c8a29305dcba4591116f1a422915b23aa31d2f0cfe388ebae058222745417e2308bc2cebcb4d9b593c7f31b7615e0503ef61f1dababc6290db3109cd6e9152b'
            '9a4b9dda7cd508afd16497980f750b8fc4d1c1dc586efeae4a0682c3488b1e957010744a23e948022734763aa8c0bbf11292482048e08ff5fadeb807d6c0fac2'
            'fc62ac2377adf9b43a448b0ff8ae6dad3013048419e51884bd5e194ac6f5eddec4c21295690410cd0688638f2f47555889e1cc592281414e637f30c8e20410a1'
            '068b0bb9426b3e43e71a6ec46ae730baa967600fe23f8c7ad14f0413b336bc47d851643b5b6c25b6bd4eab4acf62bb75b86fab96f97fed7b685a605cfb578ec4'
            'c2d31c8fb4571cce8d314fb0a1b52825e3f982e348e43981af97df51d5a3ef3a3c50d8ab1115b26b958bcbc779ca503f0669bb5aea2c5e02761b5dedbf481289'
            'eff66e746a36df76fb8f01f799e5222e14bd1cba6c9454132d65bf2d4ee7b676d0488f3407846f1352693656e789c3095729b63b4f69a9909a44a3c0d2a4d5ea'
            'e3800b508ff7778e7e7377b57ef8ad18230e42d69aca0d657bfe6c7d6689b98b71fce1d8886cd09da869ed5b8b988f27c83d83e44d33d5edd06de13a68f6213e'
            '301d5dbdcc0733a10ea3a14618abab092f87dd094d742b3df60a3d68140150df16c4cb39fb7b3a4a5da22f27dea51bb71751147f5e247ebe4732e6890d658c45'
            'aebdc2c3f587f3d6b9ada6d0add899db8c621a58330c96815f4aed17bdc07b26103a36fdc9d7b2d3cb391d5701aa4f6599c5136f0ee2fa83f02d12d7904eb5cd'
            '5d2b305f98bcf5ea17ec3a980a6456c0b461f69c3862a6794e18325059b880f6ec8d4f476d1943fa6b25a7327bc39aac0bb434785ff4b6c111179d54efc4a353'
            '73168dd4dcc480c1f940ebded44bc9eb2103348775e50976df02f5a4003095be3cdaf28d6230e80067675d23158061c63ccaf6860e3980b845639a7a7433bd70'
            '1440c2932c02bb76f1dc0255316381b2cf060d19fd113a0477bc3cd1ddfc5effe65688f45041af9dc572a05d283ae4000944ac465ae61edcf8f59217155f9347'
            'bd8bd78eea80cd11a1c95ba51f65f1b6918f670e849feb4d79d3d7c1107ec4a4caf335fead1d1a818ad5a4062b1bf8ebadec4de579b51fca95fb87a361bd9bcf'
            'f7b887108ee458abb5fb8d790e0e0758a0ddaacdb15e92fac219bfdb9a670cca74acf69a72b4211748f9dd420be3959a2f9607de4010ea9a8bf747ef468147cd'
            'efe0c44beacbbcf110133af732a824332defd096c2f1e992a2af991574fffb63ac2c0d1b53fabc97c027184172fbcdcaef4ac5246b58399f08dc2d3cc2235222'
            '9c02d2615575959e42b1a2fb73486d31b3a94614619e4e24439ceb98976709c47043279a6171b7f7d564649b8ce668f0b3b62d1df8e4fdd6246f9d08b6683453'
            '7d2c4765539fb1b53c41b557e64078c08977c4d015b2011a90cc4fec8954c63d73c08ddc9d2ea5033c648bbdca58f38ad3734921e5c52cd918b2fb0e1891444a'
            'f37c152dc2916ad3f76d2ba73adc4665b029dae19a0411421c4191a4533faa29e52d159d4b91a71d95c3286548b0843ee33a8946d70b0236790e845f52ff2081'
            '13c32568ab40f55af053f89e12d76df0ef078aed33f52e55795beb277571a052a57db5775193ab60be023aab0bb7d0f4bb9848c3bd44c296417c6feb8a341aa2'
            '4125fe9323a63311a26ae68e9bec03ae2a1d3497a21a72a73bc461d629fd4605fc51e08dd5b5ec427ddd272342b40a58b08bc6e0664d7374a98edc28e3865df7'
            '33e3eb66f53671886c82832bd6879e325fc67aa9753af9ff3bbb001799c04f09f6be92d831fa973bbb4f582faeb73b50fc2c7819f04fc694c09b986c3b2aee6c'
            'acdd7c2460b312ec89b7430d077974328f7302c1536cbcb8c9254dae75634b2694c4fc1aff49674a2dac76a07a7857af7a1fe3bd5048c9abe933753daf0cb581'
            'd6129aa406019c2d3eb20c081071f37f96da6716a1f869c46e691a3ddc69af122c1a82aa67ad1e712d383781676e040708033adbcde297508e0f190e98824e00'
            '6878e89f166c0c0d85fbd9e6755f20fde51562e13b9f5c2425be836605981caee405949d90c570a8dc3376f2fb2a7def33692469471878c2ca070e16560ca7ed'
            'dc983147efa992d720bfb8d1da5fb929f2ecf0f188345bc8334444c5e7c9927824e369885c9bebf3729640f2f06119da8120296a0ec0bd94162d81477c1b9bde'
            'c731e98e96b04f426068425a2d0d83abcaebc2e2e55076e1f02aa21e4edde52fd08bcd61035a70243fc7732844688bcbd9cd24c3e91549c82231765b36232f9e'
            '9670f1a29b412ec5d0a1ef87888d8876cddd9d2162a53019959fa188bd623812d129ea1fc136364a2660f2dc5d2fb5735eb309e3ac33069f386129d57d8d1dea'
            'e300b92183ef947a5936bb914881a104d74731f6cb9480433989541df0defaf79037f8f52ccda2438eeea1ae720a389304b5820628efc3c9966e0e4cc7233d5f'
            'df26efd5b304f3857e50117973f190f135f40d9b95c5e200a6bee8127b05b30361cc3592b02ba942670034ce1f4b781ec68539496924fc0aaf2795cb52ba71ba'
            '73b74193aed945db3b8b2ebb56759f7e16cc8df9a2038d40d5b3d70acb1c978c8419bba9b99a5c74ebaee9a216ae6830a9327fbec53deb5b87540c00021be117'
            'f1e255eca459eee380aaccb935e24d1a0d3577ec55e4df5c0930fd536d3f0de952a40390ad621e3e176fdd8476430921602925d5c00921517a9487e2a1b8755b'
            '228e4a140d5f8e8b58491dce994e355ef7093f07398c76c4fc7390bdbd2a21c82c5eb1fb06d17ae2207a5ed926ede966e299d96d207629fd7e858ae1aecd2a6d'
            '5fe5e4b4ee4526cdef4119af2d5a4dcfb4a4fa98272bc7b2f326c4a39c9d3e9dc2d72592974c23ec80b23235bcc5df75cc9581c91ae820bffe677f908c49e3c4'
            '53fbcdd2cd01ae0ab181b0c70c05ed50a9a6239a3b9e0339e647dcad562043b37c2bd0a0d544672cdc357fa45fe5c276d2cf77bbbd1f21945e5045784bc688c8'
            '3d94f643c90830acc84e56a5ae493df083bc91ebe4cae1acea454ad67528ad2e711ae690447c0e6d1c2a8c3f9cfbb0f6b31d3c231418327c04c4262a9f656bde'
            'ae68a9cc2297e6da1c286d47f0ea29cdad38d0ea864c03d4dd06a456bfd3a2214e9b63f45359908622f5b08956685b8cbc31a121c28087604b0f1bdb09172996'
            '00ba517e7842921aaa5c81d237d7f96bcf72380305863c1d4ae55c381441bc29dd6d882248571deb1e5b54c6e6965d806fe8b0930c25b45ee929ac679edc83e2'
            'db43b329c80bbd639e4711cc572a4a7fbe604a9b5c1d5a31e81fcdae0bf440b7a5bff4ca4e76443366980783a45542877d94dfcf36a83ade978533fd33292365'
            'c3ae94561d2f50af38185d771d79597d516d97da9724db346ae304061515d721af822c648cce85a2db37fd6216573283043c6c42d3f4242ace9e371f3ee19d0d'
            '43fb845ec99e1a20a0f860b6a771ee1364958c4ef46c5158f4e09e1fafac045a9bbd093249c102c9b57326dbfdee7a9fe148139f34814114d303381784569f55'
            '0873ca244a688346a74474202de1b0d63ffbcbcdab7ed8938467f9f8340c3be757720597db3121eb9b2dcf9fdb4191787f7509cee4910aeb8cc119007f82d2bf'
            'd2d6ca0a55942a10692ad8d278e5ad69f585bb392bdc09a0a601ec43e36aec6750e0fbe54851cade7018b2373c4089443554e3b7fda9b73c7c3a13a17a06fed6'
            'b4c4342f40729bcf5a66a120179328b0ff5542cbf25d6478611370328cea8cc597a6aa729678a9ff52374b68b2a27cc04702effce7486a83fc8b7340aff377f2'
            'f124ba3a373945a1dd0d0490fb8ccb3c36909b2772b60384d32520c00bb69f425f037a51d067d8114f85f5189793da0b1a2b909a64afd825ad6ec3a4da40e075'
            '477a7c7ff39dd077462cb938c7ab2cf4f073c60d0d8e123bcb24ac9cbf3a0f4db0e51e8d0202b7b6facd92e8987b3da3947fac428a3ecfc1433b07d162bde64d'
            '4dc5c8c417b1fee1c9d33604f33e823443488e2760207ca0c3e09d814a019d7f34206c7f4661522e4d35d5bc47515a7aadd1356e2f284dc7b4a21013c08a00d2'
            '2b83c83f50c95e576587f5382feb5cdc45b4e67c91f9a30a5300b446f2821761ec89cd44fc3abe5f7d5a06e3a29aeb52192d1c1701e52f938a1adab4d6f9fc0a'
            '1b0cc3b3c7c4e474d3de96d47117a362989026a1f3e0e04006e40cf1f68a2ac80c8245fbf1288abbf6f89b26e1a5f63bbd583664a9878dc42aa3e066c9fcfe5e'
            '0a61f71240bf59da85709184bb177398b2d750e34fc1aeef33c1cb99328a661fe8e6777104f71264f3bb995abbaf1d34ab2dadce166b92239f01c1d4110cee07'
            'a119bdc76ccaf2e1b90ca16f7b3a5b74592f9cd98e948be68a71049400552672c92d859591dba0b293606e47379233a3a6b6722f52a8c29b76fcaa39a9e1b40b'
            'db9e5ca3083abd1821f73b989b134f0b318f0a78f3dd1e55efce4a82b996c793671ce2b64550d8030a3c1f0baf3ce714cefad2e70fabb2f144ea4c2416e28a5f'
            'a03e1be488ec30b84fc8413347ce650db6131cf332c0ae99ae7dd3768eab8bfd700f976246406c5d223b82a9792097e6ad3aaabf6ca5ee09e0301d1b533e26c4'
            'f759ca7cc8dc05fcfd6496b44ccbffd656234fe1a8f70edc19912ef19c503072618a38ad321c7030829046e53a5d704a0d789ba09a043b3549af95fc3ac889ae'
            '29f85f6f9ce89c1dc1b8f054a40ff4a53b6fc0b13957dd7deccf320e7b65f2bf610bd3a609832e7d2913a0d00860e94ad3d32987e4da83533526a971cfcc2ad6'
            '76f1c95ac5d9407d6bd78815beb7266167b7af42a0d8ed141061d6a1d508dfc16e42c4d99dace258ea6f9c5ddc17a5bd15da46638cb19502acb57e85838f885c'
            '463fc248d04d5e711d428dd68dae0cdb17d1d2a20ba445459810210bc92b47ef96bd5d84c0b2f1cdde2c35c10844299fb0b36687ad846eb649abb987641089a3'
            '90df5f6c393291e3d207753f704e83d0ae47419c0d9cda853ed2d4079c4eddb6e75f33658d75845de41c832687527fb25701e3577f8f63b16c8555c5a3c543d1'
            'e407befe1f4d84cd84efe3ce038b18395673dbe32b2a22abc2a560abad4450fab7ac8e3a4171f3957f140d9de553c47220f61d97da0af1db2b19cbf2463c36c6'
            '20f4211db6233dadc5d8ef1e27d74ef097531fbfa8fd9ba75976b96f6cfde5f1b7d68aee51a78bdfd672448f77fbfbd203d99f657a8bdf0513f09f7387caefb6'
            'c5daa178effe571c9012585ea2a756aa60352f6fc37cfabf6f4c006324088196240617c477c66e7b150302a328a1cbf4dda8d967a85bbaa2a1d363113deb0b07'
            'ed831f02eec0240b820ec89a58d9929b8b43774d8cc8ab01a8f7206ad116f1358c5e1bf4ad6027c304bf6f9053987defce77f9050c307a8e55fe61dd26f98ad3'
            '62d56c60556cf52b48ce8803201d67aca68bd00ad9ddefb679bab0c3d15fc0f5aa6fa993b19a6cf208bb1036ef9969554bf3bd048a5ec852411d4a22beeb68aa'
            '22346d1542560ab20ae77d749373d57b85049a28bd93b014649bb0997e7eec09ea85272bb8b108193adf339d07ae5c10b77789377e6277a40a624c5eec458670'
            '54c0d3fd2d75c1f5b8828a8bb3be0e0bbbf9ca8f0819f6442ca1250f168b4e525a9c4b15ded0f7c6681b7efc05303045b95ffd566297b7cceb345d5371fd8281'
            '1ad2d48a46c1578578e05e96955bc63626398bc7df2a4e4c406feacbd86980e0d5aedcec0537bd64872f27beefca8fd0632aa16cd66a0f338b74ab347b68ecc8'
            '79d09633816544db1c0f4c0bb999d3289f81e66d85b1bdacdb300a94c4fb5a7f5f9e190590b3772fc3d16171adb9ee77fd63f76865e4cfe3f1ac81b905d915d7'
            '7da11fe8f0b3b9b8e782aeaab7a998bc48021cf7543416b504177ac233316ee1189c96dcace90efce10818dfc32333fdf6ee51f9087280466d894bce7b673127'
            'dc16436057526ff39b5311151a0648c2dfdc553a46f4170fcd47efb6081cadbc52970d640299ae8cebb34d5be1eb3ca96c98e8572f23e77ee7201b6a98e03b71'
            'cf8bbcf5906d3569238b47144b0c36e284aa5aa526619afb2a45c9e839dd231c42e474412eca2122d564ee2a3841b3eba28d277f646a4a7462978b078cea8fdf'
            'a6178148997efdf1aa0f7410c6bdb0fe99808d015adfc315bdae1daace68f651359d3170a8410bba0cf5c4b9c85cb15dd9becc628147106186d449d03d66b09f'
            '710bb1f6714a1a79884dc5522b4a7d465fb8bc4f4b8c6aa4458a34a96c5b3b23e482744517e7fca53702dadf5fd8635abc18397e86807aff6127f895229e7353'
            'e75619fbdf6f71715d66a0e7c5acc6e396bf2426606c33eb94281215e71a6c92249ab2615c376c767c02952a20e3afba219883901a3c09eb49416fe59ca3b77b'
            '819ebc0c9d45657ca9ea9768e100025962c2cec73a7e1cfcff64b3bcc0901bcb6863a8bdd4d30a3775d13527bbbc83ed3885bbec05c38ee40f8f3c0d1681787b'
            'aec723d51354d7be14788d4d2c375aa033f561b5fe4d7ed964bccb45abcd6d5d0f84a8973c80b7605128eccd3c53a0550917fac93966c80f691dded02ce5ecff'
            '332f1c254909e8241b45600485ae43e934a89e74a0d5325146245533ac0b623a011da15f17fdb20cdb83694ae7cfec57f8286c0d4ee7a81e0ec1eec4074b2f86'
            '8cf4d3a8cd525e7d8d349ff6fe2079259014506b9595efea6fcfea3e04c9a58de20d1b10e89b5013d158c9307970bc65c1cce83da0622a6332557fa7c87bd4f9'
            '388b0023ed00752834daba082e81131fe83b8697c42a7b7541ac23fcf3fb369d3fd985bbf30e2530911a71c5755df813cab8f29e9323d84191b3cdbca76210e5'
            '5422dddbc5d7ad54088a9258d5fd0a3a15d7b15dbac5080d7a897539d9dfb6fab258a0d76abceda87c123f66211649fd384bb249405af9e8099a3b7c12cf20c5')

# vim:set sw=2 et:
