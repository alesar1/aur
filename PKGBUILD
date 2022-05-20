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
pkgver=91.9.1
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

sha512sums=('d432d559f2c5f4b0bc66a755db7d61585e24a727cd8d18630854b3fb8633d54baf61ed65b580345b13d52b66288aa15ca8ca5cfcde8231e88108241f0b007683'
            'SKIP'
            '88509577b686c995144163538efdba3cfe1a3b01564d3823b9fb7972e64823d1d0a444372636f8d0b355c485f095df8f273a6eb5560fce4c41d4f1c0a0467f75'
            '4b53ee133a4ecaf068e240f6a05a1ebf4b788d67fe9141cc5b3561e1128907c8c3edb49bf2b24ba89daf1552f94ac48adf682dbe7dd070cffe7f78d98f2b3338'
            'b579b73176c72a5ecf36e3f63bba08fdb8041ae99d54e5cab906660fed6a9cf2311f7ca1ec1649e451cc6d5a4b1e6060b974b1d7befe9c8df3c5a89c50383c17'
            'b781130b79e20ae9f69f92dfda2cd12da58af023a0d39b58cc53032f8ca99eb8e5013bcd3017886b4a8b725caeee2215fe3d5f6df2d287245911f01dff6a603f'
            '9e1ca5c60675146b2b62bb7856582cd9d7cee81b8cda0efe57c631adaf0239f43c12aca7fc194e90742baf3de3313923d644a37281f7e09ab0f42094e35dd919'
            'c873a8f091a2f673b1bbb0b0c7718b4d41fa4ef4930190ce866ecca19f7ed10428f2c6080dd77f1c80fae2cbbc8123d835033cd2e3fcfd8a43942c0ba812ea27'
            '7bddc8e37d0bbd213af50f87c050e52b7908a8fbc7e60961d7bc2ae8d04bef0d4d759e369e7206537ff3456d45e9eb4257fe1c571e3bfedff3e17e3593438a34'
            '67e4c9bfadb4d2b8ff9e12e89e0b500431de8f4f8dddec51384e5f01fae66e0b50a2522360481018467627524e682ecb4b93f601a8f3a5bbfcd6629d6b0249c8'
            '33511baba4e7b2d26ac690f68ffb71301b535da8c69a4653fc8fe19757987df23d31b5fce075b18dc61143c3f03d40503a41be51bd0821f2ef9546f5a71056f5'
            '57d5e45299d81da56e4ee7010796bb4d66775eda4eaa7b8f488861e11966d298d071b5b8b677629c3a3ac73b937e5555aeb0e4675cee38f3842c58bb62a4ed43'
            '6f99f08c8c6c6ff2e5e1f2384bd5bde7b92ca51ea60f6337f24196e7a1afe482137077fbb5b5123ec54a6665084771d77ee38614710a1e2db1421558a519dda7'
            '56d7ce8a8083723ec1a8b779f4c13c432c1c6624ccee509aa766b72d28be909631627d2a8353be85b1fb78eead99d79d379f2dd7191c4f2763621e2e036b3098'
            '376d1d606079434be8409f3f5503115cfe01962c86a6868b6a72b2d63cd09ea130f651c1a8a6e0ff61928ad8e513cfa9c695bc24ec671c1b2aa01174fdcfee04'
            'e18f4f4fe2e80824cae025be4f83757f73607037e4836102c9566395e174ed5c45c9a70690b618b54a8197b9c3700daad33eb6006fdb0f63c8557442032d883a'
            '09b137a2d91e72e9bc0411bd3cda1ded17b2794475a19fda4e75c18b9504d4e4e732f85323da66f689c56d1b3fed214895513764dd7002ff382d4e7a09337c0e'
            'e5899c96a65f174dcf91c55644114aec547c521b602ba59cdd469f8bca5e7e454e00074410887ed159fb6b3ae790fee1d6e31c071d23eb9061617b82f1b52bb5'
            '9dd5b7d388c8761f28357abfa134b576960e5b6a4768ec2bc7b3e02018a731db6ddb9e40463f3c6cb696fa8ff6efa3a79e622dcbe904a70f4171a6d517ac8692'
            '746d1b6bd22384b9a4eb059da37715b0070cf426218c62be6a3c8a6d440972d389aea3584f0615af9d28d6df05a909bf55ab2dd6f2ff3bd370dabc1924fedc5a'
            '77663420b067c402ebe7e62d74a275511f46bc28cc9241ed8c20156fa51c6881c8faf5ab96cb37f56ddc808723cd48af100404442ac463c7a17dda6e7d58625c'
            '820b3dfa62476c672a48746f31b8483e04ebcb98982d493e5196766424877b3dddbd43c769b69ae3ca7fb144df2b9cae3afe402f5f97a6bb0d3c3475be9742da'
            '8f05ab8c73933d8013026a057438320dc6550de35749a53bf8688b7ccd86004c24cb085af30ba8e117f1d58727eb96dc2cea8c49fa18bdcec63e393c1fa5d5e6'
            '0e4509f32f45bc2429eb5b8be813ac4e39b7b68ce6e8454551766763ffd344574700611a53c022b40a9dab46081b67447e956255cbc5851a92ed4e8e9bb471d7'
            '027de93fa2db2143655ef5ec5868036b69f4062973a99b3a2036cc742fe275815cd809c44a9de085ef669b07affffa19460323a2589c7f7dc6b33c0a6942959f'
            '158990ef837d3326ae926f4c024e759284c615ef0b289233538e931c9349ba6d9068db35496ac0a17a6936c0b7c555a6f0598e63ef7b6f9468bfa2a1a01e05c5'
            '435931dd5cf36705bf3c52d55d8fa682db70314650f3c29fb4215e48717e2087f8a4fd3609f989c963c49dccc89882f1c4069b2cf3173d443da5275bc359465a'
            '1f7ffef07e9f917ab30e5479b481bd1b06a18aed5353aab209b8828f7f6e2812e4cd64ccb71152e72c861b62f2cdde90f07f2dd342d1d978243c1d1586a314de'
            '8e28b390e1f3d8c226a6908a80a4e36ed3aefdaa875c412d5cc4fd1fca8d864375b77a089deed703d74dc945dcd6a55368d090d3d5ec215bf528ec1211dce4fd'
            '9ceeb1abd3a3672aa52fa6ad1078a8e60e3cfab5f71a972384d3eaa5da7bf28cf60f94631fda813782acfdcc1aec0f6db185639f4c51297dc83417cdc0fd41bd'
            '14f2ee5d7b04540ba70b79b2d28b97540086c747f0c85270971cf0a1b09b8108fb1ffe809983c790f07df69e650dea642815ecbb9f030c13af5627fd6caafafd'
            '5fab44dd92453658c45875178dcb254e8b0525fbb0c80f203dea9d550cb8a56b6cdc170fcd393c519a23f1b98701e3cb42e9f4686ff4ca2efbccdf1aebf691b2'
            '9d093eda62eb4956eac6cc22407096c029a464339a4daf897ebbae58de5286930d3dfa06b1b292de8285f27033ab00f6cc9c9ab3a35a8befd33ce22c8df32d62'
            'd843161f279afa5b00a87b150e0aa79133e637847971078c375af74132b41f6c8d5a3cb0da7955cc7b58dc79b7722272d4bad9575f89a9d89729decd261efbff'
            'e5441778071e11b266fe1f8ca8acf2d2c7b0118ad2ed9c5ae73f8160be8ac336eeb7d327984e3582d7c12daee43cdd1889be98777ebb49a08f78a3bedddd0f59'
            'e7797bdd7fc34900b5da8587fff6292870c72e3091dc276ea6a392b0cb8485470ec7a775f957d02390cc623c2ed6fef70ef6962543150666c18f15eeece866fe'
            '903affd8b0df0dbbdcc77a978fb3c51d6cab5607ebadc82336fc12be313afc82b4aeed6a3c5b865567c603b5576e94c0311e7b16a1c9c3c8ab46620c960adade'
            '2c05cee8fa839854c6ea2aedbea12b9ffbf2747beb20f6ff6d5d61c9e4288fce4d7b4d81bb48d47501ddebf12a7c31df247013f29f541f4bb0e33475b3530321'
            'c19ee76fb0eeb93fdb7e2f50e395324b4e545ef7adb707285f7799c754ee2b02163a593197e66f5b0c4ad04a1f83ac1cee68e5579039120f5d56eac954e16ce1'
            'f8ff4d61303014371e8bfa3fe03aae0896038446ff92c026005d3945385da18acff3cecf3d2d105fc36a6abdb8310016236a0ad1099412305dec803ae2ab27d6'
            'f223c06ac8af6e78847d8c4cda932ec6512e46d8af6763fc2ef5d2bb83d523279ac6e9213eda79a807e7da69b8f9dc36d27f81a16fc9c56f202d64cd5870e34d'
            '3c9f70cc62a43168d82d912f70928016f75129341a01c2bce9c710fe8028baefb989eda6903b1d647fe1fb6f2e6d2d65a6da257cb8270fc96519861de1928b85'
            '6473d9e11f2a887c43d89e7bb6480dd1830c3f28cf9f9c59d796952411d3d57b52b7570b737cea96b418969d8c64e41c4bc9cff110defa42f67bd345caafe07b'
            '061aca44b5551af76d5c261aafe980b4e589dd8f4cacdb6facf93d62d0bb72f4b186ebe4badf55b19f1011464314e201b027eddec7348a04d131d5a7a844954b'
            '7efd3a293bced416799f2d58b668330d41f9b7af74cd7307652d3a459e596fe5032b39a5991f71b1a34a3fc73393fef0bb287ea26a6db02a3e0ff50564e6e28d'
            '5c49ba571476c7b50270a76b8fa7bc1e55037a189387e4b9ef113b755a0acf8262dda17193f4ce7fe9a75e1b2bfa6cdbca1fc60b66cb09dcb3b0c89932899d25'
            '76615c44b23ffbffd929734ade318e2bf339a92e0ac2f4196d547eb677e23230fd65996f7b3b6fbda9bbc0fd4b90727dba9385bbb0129eb7c7a3f37613cfdf8e'
            'c1bf048d5793872e73369b64e60776a2aea64904b330d92a32027948298465bb0950dc18928ef9878fa0b879b47dd32557865921107daed2a5bc7cee1031d514'
            'e37de9afa30e7f7bb7595de2277d059c9c522f79fc78a0e1fd2512b4dd1886cd45992b0b3d3656b53a52829ea6e0d72511d1af9231a4442ab0963e46cc2d8ffa'
            'b2844cbc1c82cadff2b8a30f10c65b8157cb60b49a9d16b7b318f2e18f1b29c98b9544666b2469403d3da3ccc51bf2c6a692b88522e7f47e1888dbe9b82e7b79'
            'fa2f16d6f79aa59f046e10e0c0897ef2d077ef5082f782fd09159360c4a89d64504b63bfa8362c7e6db780c4bb6926e32b9caf352ba0ad6c7e270663a70382d4'
            'd97daec38b31b1c86f3a2589713e33c08e574806ebae32d132e5579b9713abdf9d6cec77b2b8b687e36fe2451711d8ea58cd7974b5b5e7077db7cea591f53595'
            '09af676cedc70d678e42ca19f4aa3cccc756b83abf0b8e7e49501c2d01ff803c61527850f6be054f1e04cf303ae0af8d874ff1720be16f6718901c93bdccecb2'
            'f686caf87fdf376589f3e123b6f8cf9deb834bf194e3daa69c02ab8f0fea3adc149ba743dec3b5b99cb80c145c35c448dda944925bdf2058e09ed544483f2706'
            '4bc7a22143fd625d86fbc29413012e3a5a7a02445c2a2475e318aca6a8f835f134b88aa6b3e96c955226524e8b0afbcb15daba0de23001b2cf63e62ef9a015a2'
            '2d02f6118beed171c89521140184028c9e435f825e7b060fbb918ef28eea066a949a2b6e279d1c688faafdc0792f714c087e8755e29c6bc12c1acdd8b69ff764'
            '2c4c5b0a8c7ea7dc966a35ef11db5d784fa73087646ec011900fb59a3b5c5de2617d8c5155b749097764841e1350fb0ef8bfe203722cee5114f6d807008b9ee0'
            'c752b507581dc83638a0fc996875d6d6cf65baa8a5bcbb4a1ca7b26f048eb7647266d00bee3dc96658c27cab303e01fce85c26e7db9024a5e1b6b8a1c2a7176a'
            '9a44cec5bf6c8215ae31f378f78db6b46451292167b111caec08242da85d8e82868597bfa255390238bc032e22eb9bf3cc51a73cb72e515e0b39eb05f2e7c889'
            'b652f31ad1bc5c699e53b2cbc74ac5489c8a564e477a270f646a5587f854ef6da20d69955932291689ef64be5debdb79106b099f9437becba14ae93195dfe74d'
            '88aa0a85af340af45233e317d5da9f541d12352e20775c35f0a1920be83308167db2d1bf75078fda88e48dbf15670c02125c62e6dfeae866ec15262049950175'
            '4408527acf84fc18a1c26aeed2317ddd28060c2d25d038264f913770485044e4cd2017eb5a5ef9d5092a8ccf4451ee8a4053a5b91bf5483ec83f9e63bb7910a4'
            'dba8018f18d28245edaef1a0c4701d495c18462b6ec2ddaec6435277e7eb2feef070824725a1436ac27f00f6e9c2ec1b9081c6d14f6c38ee1bccafa59cd72d2e'
            '59672597ca224c0132e99262edf6af64a6a81b96bbab0e4a5e04c981a2eaeb0b1c4ee142e5648fcbc3f69f666c318b5d3dae88a5b9e94b0901dcd22f361766db'
            'd2e891ee66a1205362c2fcc7035582358e0950d3a3643840662feeb9ddf4c51950357d56a018ac4c3962a237746aa19eb443a6fb691741c5cace65e3f3bde224'
            'c63a3911e551111d91d6e9202e15be504b807b26e0ff06e697171cf2d0dd1b75ba61b49366d499aa197b5ef1ced74006b0109c76fc2ac3d2af6b29069442d0d7'
            '6874d5d052f33f3dda355224326f1d5c67d0ed1412a56af90ea978bb28ef4c71b56ef3a2d8a5ce1d36c817e0cb925c597be90b541c1bd3582ecaa9f366fc314b'
            'cec5236c5fe5b185c5f2e345997118d4f73720c63f3a2bd256e10f81fae3b9e5d7c6fd91221cbca49c04538dc975944e82683f93986a574e8dd5f197847fc2aa'
            'c943f9c09395121eda413a40fa57590f1e2f54e98d4674b380dfe51aa7c122ba9b662ddc71debd6444fb1a94436bae74a36fc62a36410e7229c95ddb29eba9cf'
            '08b688dfbb92bb78ef56f94982b0292470a459f449bed084e1495ff3bfa135dded5b973d135af64840a473917e9aaccd35cdecfcd0477c761918c2238bdb3145'
            'c2f930c464990b78b2220cede3c10adb3412a17e781822a7e7774fda8508a70478b9cdafc11fb09042c6412f01355015855bcca8e6567cbd67897209675c4274'
            '73426bc62d0698dee1925bfe38eba79cdd13fc547a3ba1f241e05eb7acd3367c1cdab3927223c9496f142bf01f56a9b9e6231b578f6628f548991f8009ec933b'
            'acf5b91d5d16e06c91309b64943f1333e6d0b3ce1471578760602865d676d7f82443e6390eaa44cddb9b90756ec7ad5ff16e61c61097880bc36b44ac60002d2f'
            '9b78464ce4c4385506ea3725e083cfd6f897d8b538e356f1731fb8de4f9d8f0fae8b1ba24dba806a7a62f720775bada419a25977090d85febb59b0b660d07c43'
            '8abd72654b7f6eda8437e6dadd28fb7d1bb728a44c132d3a79349fc3bfeb5fc771371034ef7f25743e695699f18431314566ba51ef377c26c420306d76ca0d79'
            'c8b760307ff30eb66849a32894828e05430c1f015bba64259e17a04c86f8310622a97336b1764f2724f2fe572650995b454c1a34cf0fa9e06af3ead723c02cf8'
            'edb2a0616aec6b66db75bfbc208113b4d365a8afcb5811fcd178774c27231326a5a239fa994f9d9c11bf3ff0d9307f826b28355039803e09e463ed055fc432df'
            'f1e6d2fe8f8faf8e584153c5c6a4320270876933acecea9e52af341cd21b17e9e34cb7ce7ae330e3c4312b9e44d4a689fc785c04cc1d454a693d46065f456a29'
            'f74ab71952e7ab7dba7641b1ce37e2bd2de0d3f8de0ef2e30c57d85b1de763a301839a9401192e717068a9ac97e23d59815f73d1f4b1e1a57663c08622d3fd4f'
            '154a508357aac7ef127fc43bf09d35ecdebb93696f317ff8ebe5fe020ef489e09232316e993f575f8d6bdb4357a137bd5f88d0644e2e4f3a9a7beb9a2a5b6603'
            '1f3fc8e30eacfce4ef422882cb0dcf7f71a42135a80e8d8c62fdfe22dd76d6eaf717d1367cc60fd9804cdcffd417d3e0228f1715bcf375c6333009ea5dc1cd5b'
            '700a2c09911c4282fa255a0954d6cd888fd75e7c9cfe73291705f99d66072946085dd152c9eb91787a8ca889ca4f5195f21cb078dacbdd18a204c19cd577c8b1'
            '3c53a19f2885b1095d205d1eb6c2bcb2d0970d23c0c6d458d5f7a2327fef8b04800bb0ed5bd196aaa179ea5d2859bbcbde91fbeb95d9dd6fc66a8938a41f71bc'
            'af1092970ea2bd7adbca1f8a84534e8bf64d77e9ae4c1615f9d5fdb6fa2e0788cf3a90c91edef106be2d8556d1371fc63661518132e5ce431256825a44a5dd58'
            'f5b162ade2655ca6f287f7a9ef1407abe0cbefd30848bc25c3e30088bc44b98a44859a0ba25bd17d0dd229af0718b648e7bef83562ff4e8a4972fec3dea76dbb'
            '6c4b8d9cc05a4f755b842b6bcc1f2ca1458092e80423db463251887cc8190291a24ec8b2e559dee3c9e5fda85c0468d4b516b67e33150724d19e980c4a367648'
            'b4a34eaf37b48a52f6749c9fdbed0a9c41e2d4d84079703bc13e3a104640c45893b4c9174eea73108eda3a58a07857272d5bc540b9319bb06ec67d50c861b8ac'
            'bcb2d7d96684017ea2eeca52f052abbd692d7cf103ab3459885760bcd2eb928a580a12f3b11e54ddd7a548204aa44939affe69025be81ff8fb523c5aff54e381'
            '3d6b2c63ccc2625ff32d0b2c5c4203f505f76cdee2a45c9188c15559ca738f026ce89c5611505e3ba399625b51d656f55a3ad249d81964a933b911e911184141'
            '3bc521c96b83d2758546ba0610f90f7d61c109cfefda733e4a7c313c6a3be3bb9959af9c329c4946f919ef35feeb7d75cabd20b2c8888f6112c7f273db69b9a0'
            '3f84af32a2541b7ac6c3bf3e0fa94f0f9571b7d87f6666edea74968b4756eb16d03896ac59ca9e1ace723f7a9b82826cfc0029ee6699a640b602c6cdf3da78c4'
            'db2611e587850059f7ce3aa816bddd1a63690a3d8b7f8fad841dbe9c1320ea9e4ce0cf21b571a1e8275969b6bd20905a43939d49e637a4b0f37fa3911a3e81b9'
            'f76ebf7635bd37069607a243302afc1352641b3e608fa636205f0fd95290eaad3eb759d335baf0dfbaf92a951ccb600d50464c40192a91fda6116969a618c5ee'
            '1c7d345c07dbbce80421fceddebd354a5f8bbb022f0b6c5cbeb9017b8ec4752439da966126ffb3c8ce616c4a08a3442e34c47af77722f0af575b8b979079a548'
            '2d1b27e661f9154f67b5716fe57599b3f5975a24a95bddc9e7f5c8569f279647754d1f6a96945edabc15a5f92298298047c3cfb486ed212483a8d9678b75e87a'
            'f2e39006b8eb1802659fb5e81f30e142e8b56afc69fb3b3552ccef590c1b0068436cc46604387df377c21325300bb9066168e7d21a5b397c630b19e70a63de65'
            '5792f04ce968a6700c6a3bbd227415c48e38ccff49f27a54b147e93a5a68629e438ef670c04047121a9d916fbf44461eb2e3f16006a11162bac50b60085a788e'
            '9b1ce6ae44fe4ea9d0999b144899e12ab9d1272a8a3254b97ae60a0730bf3ce5feec8c8242edd82a5a8fa936204a91f02e9f70a8da61b16317ecaecb9b24f75a'
            '20dddc04ea84ad8c64b9f5b41b12cf79a880677a020ad7e65c43c246f580ffa654f4466919a83fc6a0798f3473266c91bf9166ef95f1b21eae59a9ec76e42f91'
            '5b759292e367b8987df8259bd929d5ce1f05517d9472e9436e6860c4a9a21369e70a0c38f601b9e09b94618e6f5290e33d2e45b2c29d0af748ffb5177f24cea6'
            '96d15cd33e0a0d0b31c6a2b552f2295cbbf7aea2a74d704c4940149bee16fd94d99cb72e9cfc9555f439760aa86d02801f3d9953a9814110bc14a4d0af4205f1')

# vim:set sw=2 et:
