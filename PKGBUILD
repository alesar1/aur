# Maintainer: hawkeye116477 <hawkeye116477 at gmail dot com>

pkgname=waterfox-g3-kpe
pkgver=2.7
pkgrel=1
pkgdesc="Customizable privacy conscious web browser with better integration with KDE and primary support for webextensions"
arch=('x86_64')
license=('MPL')
url="https://www.waterfox.net/"
depends=('gtk3' 'gtk2' 'libxt' 'startup-notification' 'mime-types' 'dbus-glib' 'ffmpeg'
         'nss' 'nspr' 'ttf-font' 'hicolor-icon-theme' 'glibc' 'kwaterfoxhelper')
makedepends=('unzip' 'zip' 'diffutils' 'python' 'yasm' 'mesa' 'imake' 'inetutils' 'xorg-server-xvfb'
             'autoconf2.13' 'rust' 'clang' 'llvm' 'libpulse' 'alsa-lib' 'jack' 'cbindgen' 'nasm' 'python-setuptools'
             'nodejs' 'python-psutil' 'binutils' 'git')
options=('!emptydirs' '!makeflags' 'zipman')
_filesrev=b0f1edf7fb5512950f7098ff152985f9977cc830
_filesurl=https://raw.githubusercontent.com/hawkeye116477/waterfox-deb-rpm-arch-AppImage/$_filesrev/waterfox-g3-kpe
_commit=78bd31b84483c4cda5f6eaa981b03f2b0c6ed9ea
#"git+https://github.com/MrAlex94/Waterfox.git#tag=G3.$pkgver"
source=("git+https://github.com/MrAlex94/Waterfox.git#commit=$_commit"
        "waterfox-g3.desktop::$_filesurl/waterfox-g3.desktop"
        "distribution.ini::$_filesurl/distribution.ini"
        "vendor.js::$_filesurl/vendor.js"
        "waterfox-g3.1::$_filesurl/waterfox-g3.1"
        "syspref.js::$_filesurl/syspref.js"
        "g3-kde.patch::$_filesurl/patches/g3-kde.patch"
        "mozilla-nongnome-proxies.patch::$_filesurl/patches/mozilla-nongnome-proxies.patch"
        "mozilla-ntlm-full-path.patch::$_filesurl/patches/mozilla-ntlm-full-path.patch"
        "Use-remoting-name-for-GDK-application-names.patch::$_filesurl/patches/Use-remoting-name-for-GDK-application-names.patch"
        "sandbox-fips.patch::$_filesurl/patches/sandbox-fips.patch"
        "remoting-name.patch::$_filesurl/patches/remoting-name.patch"
        "rust_1.56_p1.patch::$_filesurl/patches/rust_1.56_p1.patch"
        "rust_1.56_p2.patch::$_filesurl/patches/rust_1.56_p2.patch"
        "icecat-glibc-dynstack.patch::$_filesurl/patches/icecat-glibc-dynstack.patch"
        "mozilla-1715254_glibc_2.34.patch::$_filesurl/patches/mozilla-1715254_glibc_2.34.patch"
        "mozilla-1707096.patch::$_filesurl/patches/mozilla-1707096.patch"
        )
sha256sums=('SKIP'
            '6e86d11bd147e6ea29118c6f5e4d1cd7376ffb61feca25979d6996731b6b663d'
            'bf06887c00bbc7176f452a3d18092e1b222731218e461782b2877cba938aaa26'
            'b9458af82a1e67497f1a42b69cb69b7a86a87727c35004a4089d207d10c7c2b4'
            'e48f932041ac826be48567d090a246bd897744262acca4dc07915abdc9a3e6b9'
            '0120e01edb0bf3d42f4e0280345f2c44372b097739cd2ddb85fa69bb2233ebab'
            '9b0c34bdbfc440d585039bc357d39fca5703328a0907a49da355360abb669ff7'
            'd8c2c30217b5bc9fbef8f6ca7540a4d8fdacc128c1c0a62226c8f4c287688597'
            '25846888b48208606ff88c04dc8b9cb5b1a9c433adfd2d72ce13b6b9edc73a87'
            '71386c2e269bd021c3b8c86b457101bdb730f76db3f2bbb91bf617109564a09c'
            '809c7dea066cb2ba70fb1c16c1b3dcd69c7e7715f354daf2f1c67af757e6d47b'
            'ac5199b397d1fef75d952eedbedcf3806b12f86b64ea29e5b34b541b0cfbe761'
            '081afa8b115dc7208316ed04846ae726ace68b999d55f2429cb3a9f9828585a1'
            'e046c9b17c0b662be898030dacf01d38feb6ab875775999d6c52fc245759299d'
            'ed78168ec6a2f9a5d278c613383067faf0fabf77dda909c732095f261188f6d0'
            '121fb82cc614bc3f9d10bdadd026d8099fcd9455510c565d58fae00d37fca043'
            'f8742d4b468391f44178f480a8f711961137e11470046157bb39549de5602854')

prepare() {

  cd Waterfox

  # Add patches
  patch -Np1 -i ../g3-kde.patch
  patch -Np1 -i ../mozilla-nongnome-proxies.patch
  patch -Np1 -i ../mozilla-ntlm-full-path.patch
  patch -Np1 -i ../Use-remoting-name-for-GDK-application-names.patch
  patch -Np1 -i ../sandbox-fips.patch
  patch -Np1 -i ../remoting-name.patch
  patch -Np1 -i ../rust_1.56_p1.patch
  patch -Np1 -i ../rust_1.56_p2.patch
  patch -Np1 -i ../icecat-glibc-dynstack.patch
  patch -Np1 -i ../mozilla-1715254_glibc_2.34.patch
  patch -Np1 -i ../mozilla-1707096.patch

  cat >../mozconfig <<END
export CC=clang
export CXX=clang++
export AR=llvm-ar
export NM=llvm-nm
export RANLIB=llvm-ranlib
export LLVM_PROFDATA=llvm-profdata

ac_add_options --enable-optimize
ac_add_options --target=x86_64-pc-linux-gnu

ac_add_options --enable-alsa
ac_add_options --enable-pulseaudio
ac_add_options --enable-jack

#X=$(($(getconf _NPROCESSORS_ONLN 2>/dev/null || getconf NPROCESSORS_ONLN)*3/2))

#mk_add_options AUTOCLOBBER=1
#mk_add_options MOZ_MAKE_FLAGS=-j6

ac_add_options --prefix=/usr

ac_add_options --with-app-name=waterfox-g3
ac_add_options --with-app-basename=Waterfox
ac_add_options --with-branding=browser/branding/waterfox
ac_add_options --with-unsigned-addon-scopes=app,system
ac_add_options --allow-addon-sideload

# System libraries
ac_add_options --with-system-nspr
ac_add_options --with-system-nss

# Disable unwanted features
ac_add_options --disable-crashreporter
ac_add_options --disable-debug
ac_add_options --disable-debug-symbols
ac_add_options --disable-updater
ac_add_options --disable-verify-mar
ac_add_options --disable-profiling
ac_add_options --disable-dmd
ac_add_options --disable-elf-hack

# Enable wanted features
ac_add_options --enable-rust-simd
ac_add_options --enable-application=browser
ac_add_options --enable-hardening
ac_add_options --enable-linker=gold
ac_add_options --enable-default-toolkit=cairo-gtk3-wayland
ac_add_options "MOZ_ALLOW_LEGACY_EXTENSIONS=1"
export MOZ_REQUIRE_SIGNING=0
export MOZ_INCLUDE_SOURCE_INFO=1
END
}

build() {
  cd Waterfox

  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export LDFLAGS+=" -Wl,--no-keep-memory"

  # LTO needs more open files
  ulimit -n 4096

  # -fno-plt with cross-LTO causes obscure LLVM errors
  # LLVM ERROR: Function Import: link error
  CFLAGS="${CFLAGS/-fno-plt/}"
  CXXFLAGS="${CXXFLAGS/-fno-plt/}"

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

  if [[ ! -s merged.profdata ]]; then
    echo "No profile data produced."
    return 1
  fi

  if [[ ! -s jarlog ]]; then
    echo "No jar log produced."
    return 1
  fi

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

  # Build langpacks
#   cat > ../mozconfig_LANG <<END
# ac_add_options --with-app-name=waterfox-g3
# ac_add_options --with-app-basename=Waterfox
# ac_add_options --with-branding=browser/branding/waterfox
# mk_add_options MOZ_OBJDIR=${PWD}/../obj_LANG
# ac_add_options --prefix=/usr
# ac_add_options --with-l10n-base=${PWD}/browser/locales/l10n
# ac_add_options --disable-updater
# END

#   export JOBS=$(echo $(grep -c ^processor /proc/cpuinfo)\/2 | bc)
#   sed -r '/^(ja-JP-mac|en-US|)$/d;s/ .*$//' ./browser/locales/shipped-locales \
#     | xargs -n 1 -P $JOBS -I {} /bin/sh -c '
#         locale=$1
#         cp ../mozconfig_LANG ${PWD}/mozconfig_$locale
#         sed -i "s|obj_LANG|obj_$locale|" ${PWD}/mozconfig_$locale
#         export MOZCONFIG=${PWD}/mozconfig_$locale
#         ./mach build config/nsinstall langpack-$locale
#         cp -L ../obj_$locale/dist/linux-*/xpi/waterfox-g3-$(<browser/config/version_display.txt).$locale.langpack.xpi \
#             ${PWD}/langpack-$locale@l10n.waterfox.net.xpi
# ' -- {}
}

package_waterfox-g3-kpe() {
  optdepends=('networkmanager: Location detection via available WiFi networks'
             'libnotify: Notification integration'
             'pulseaudio: Audio support'
             'alsa-lib: Audio support'
             'speech-dispatcher: Text-to-Speech'
             'hunspell-en_US: Spell checking, American English')
  provides=("waterfox-g3=${pkgver}")

  cd Waterfox

  DESTDIR="$pkgdir" ./mach install

  _spellcheck_js="$pkgdir/usr/lib/waterfox-g3/browser/defaults/preferences/spellcheck.js"
  install -Dm644 /dev/stdin "$_spellcheck_js" <<END
pref("spellchecker.dictionary_path", "/usr/share/hunspell");
END

  for i in 16 32 48 64 128; do
      install -d "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps"
      ln -Ts /usr/lib/waterfox-g3/browser/chrome/icons/default/default$i.png \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/waterfox-g3.png"
  done
  install -Dm644 browser/branding/waterfox/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/waterfox-g3.png"
  install -Dm644 browser/branding/waterfox/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/waterfox-g3.png"

  install -Dm644 $srcdir/waterfox-g3.desktop \
    "$pkgdir/usr/share/applications/waterfox-g3.desktop"

  install -Dm644 $srcdir/waterfox-g3.1 \
    "$pkgdir/usr/share/man/man1/waterfox-g3.1"

  install -Dm644 $srcdir/distribution.ini \
    "$pkgdir/usr/lib/waterfox-g3/distribution/distribution.ini"


  install -Dm644 "$srcdir/vendor.js" "$pkgdir/usr/lib/waterfox-g3/browser/defaults/preferences/vendor.js"

  # Install a wrapper to avoid confusion about binary path
  install -Dm755 /dev/stdin "$pkgdir/usr/bin/waterfox-g3" <<END
#!/bin/sh
exec /usr/lib/waterfox-g3/waterfox-g3 "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srf "$pkgdir/usr/bin/waterfox-g3" \
    "$pkgdir/usr/lib/waterfox-g3/waterfox-g3-bin"

  # Add syspref.js for setting preferences for all users
  mkdir -p "$pkgdir/etc/waterfox-g3"
  cp "$srcdir/syspref.js" "$pkgdir/etc/waterfox-g3/"
  ln -Tsf /etc/waterfox-g3/syspref.js "$pkgdir/usr/lib/waterfox-g3/browser/defaults/preferences/syspref.js"

#   # Add langpacks
#   mkdir -p "$pkgdir/usr/lib/waterfox-g3/browser/extensions/"
#   cp "${srcdir}"/waterfox-g3-kpe-$pkgver/*.xpi "$pkgdir/usr/lib/waterfox-g3/browser/extensions/"
}

# vim: set ts=2 sw=2 et syn=sh ft=sh:
