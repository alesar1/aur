# Maintainer: hawkeye116477 <hawkeye116477 at gmail dot com>
# Contributor: meatatt <meatatt at aliyun dot com>
# Based on firefox-kde Manjaro's PKGBUILD

pkgname=waterfox-kde
pkgver=2019.10
pkgrel=1
pkgdesc="Free, open and private browser with openSUSE's patches for better integration with KDE"
arch=('x86_64')
license=('MPL')
url="https://www.waterfox.net/"
depends=('gtk3' 'gtk2' 'libxt' 'startup-notification' 'mime-types' 'dbus-glib' 'ffmpeg'
         'nss>=3.34' 'hunspell' 'sqlite' 'ttf-font' 'icu' 'kwaterfoxhelper' 'nspr>=4.15' 'hicolor-icon-theme' 'jemalloc' 'libevent')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake' 'gconf' 'inetutils' 'xorg-server-xvfb'
             'autoconf2.13' 'rust' 'clang' 'llvm' 'git')
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'alsa-lib: Audio support'
            'jack: Audio support'
            'speech-dispatcher: Text-to-Speech')
provides=("waterfox=${pkgver}")
conflicts=('waterfox')
options=('!emptydirs' '!makeflags' 'zipman')
_patchrev=7339b115a221
_patchurl=http://www.rosenauer.org/hg/mozilla/raw-file/$_patchrev
_commit=ce20cfd2b820901a00d11f8bd2e267c58ae4c566
source=("git+https://github.com/MrAlex94/Waterfox.git#commit=$_commit"
        "waterfox.desktop::https://raw.githubusercontent.com/hawkeye116477/waterfox-deb/master/waterfox-kde/waterfox.desktop"
        "kde.js::https://raw.githubusercontent.com/hawkeye116477/Waterfox/plasma/_Plasma_Build/kde.js"
        "distribution.ini::https://raw.githubusercontent.com/hawkeye116477/waterfox-deb/master/waterfox-kde/distribution.ini"
        "waterfox.1::https://raw.githubusercontent.com/hawkeye116477/waterfox-deb/master/waterfox-kde/waterfox.1"
        jack-system-ports.patch
        no-plt.diff
        "waterfox-kde-56.2.10.1.patch::https://raw.githubusercontent.com/hawkeye116477/waterfox-deb/master/waterfox-kde/patches/waterfox-kde-56.2.10.1.patch"
        "dont-statically-link-libstdc++.patch::https://raw.githubusercontent.com/hawkeye116477/waterfox-deb/master/waterfox-kde/patches/dont-statically-link-libstdc%2B%2B.patch"
        pgo_fix_missing_kdejs.patch)
sha256sums=('SKIP'
            '64d5587093e4d32b0111adf8f531a2e3bfe24e76b8f5166e31cebcad7add8f81'
            '0850a8a8dea9003c67a8ee1fa5eb19a6599eaad9f2ad09db753b74dc5048fdbc'
            '3961c09993c442df97832866ddaea5bcc1ade1313beb313b5ceba60166933016'
            '065244d3f6d88c48b7afec313b7da5a3a04377076e198954cda7951500530b84'
            'be19426cd658ea0ff0dedbdd80da6bf84580c80d92f9b3753da107011dfdd85c'
            'ea8e1b871c0f1dd29cdea1b1a2e7f47bf4713e2ae7b947ec832dba7dfcc67daa'
            'b55833542edf8cad2b73cf36dac6c667e588dcf79a99b570c5eca645698b80f7'
            '877bc1f0e768d96118bb739725e590467773dd897c31263099e52b8d7aaaa4c8'
            'bf6743660623b7c9a43b94edc8acbcade07aa222ff2102a2808809df333ebe8e')

prepare() {
  mkdir path
  ln -s /usr/bin/python2 path/python

  # Fix openSUSE's patches for Waterfox
  #sed -i 's/Firefox/Waterfox/g' $srcdir/mozilla-kde-$_patchrev.patch
  #sed -i 's/KMOZILLAHELPER/KWATERFOXHELPER/g' $srcdir/mozilla-kde-$_patchrev.patch
  #sed -i 's|/usr/lib/mozilla/kmozillahelper|/usr/lib/waterfox/kwaterfoxhelper|g' $srcdir/mozilla-kde-$_patchrev.patch
  #sed -i 's/kmozillahelper/kwaterfoxhelper/g' $srcdir/mozilla-kde-$_patchrev.patch
  #sed -i 's/firefox/waterfox/g' $srcdir/firefox-kde-$_patchrev.patch

  cd Waterfox

  patch -Np1 -i ../dont-statically-link-libstdc++.patch

  # https://bugzilla.mozilla.org/show_bug.cgi?id=1382942
  patch -Np1 -i ../no-plt.diff

  cat >.mozconfig <<END
export CC=clang
export CXX=clang++
export LDFLAGS="-Wl,-z,norelro,-O3,--sort-common,--as-needed,--relax,-z,combreloc,-z,global,--no-omagic"

ac_add_options --enable-optimize="-O3 -msse2 -mfpmath=sse -march=native -mtune=native -fcolor-diagnostics -w"
ac_add_options --target=$CARCH-pc-linux-gnu

ac_add_options --enable-alsa
ac_add_options --enable-pulseaudio
ac_add_options --enable-jack

mk_add_options AUTOCLOBBER=1
mk_add_options MOZ_MAKE_FLAGS="-j6"

ac_add_options --prefix=/usr

ac_add_options --with-app-name=waterfox
ac_add_options --with-app-basename=Waterfox
ac_add_options --with-branding=browser/branding/unofficial

# Library and chrome format
ac_add_options --enable-chrome-format=omni
ac_add_options --x-libraries=/usr/lib

# System libraries
ac_add_options --with-system-nspr
ac_add_options --with-system-nss
ac_add_options --with-system-icu
ac_add_options --with-system-jpeg
ac_add_options --with-system-zlib
ac_add_options --with-system-bz2
ac_add_options --with-system-png
ac_add_options --with-system-libevent
ac_add_options --with-system-libvpx
ac_add_options --enable-system-hunspell
ac_add_options --enable-system-sqlite
ac_add_options --enable-system-ffi
ac_add_options --enable-system-pixman
ac_add_options --disable-libproxy

# Disable unwanted features
ac_add_options --disable-crashreporter
ac_add_options --disable-js-shell
ac_add_options --disable-maintenance-service
ac_add_options --disable-updater
ac_add_options --disable-verify-mar
ac_add_options --disable-mobile-optimize
ac_add_options --disable-debug
ac_add_options --disable-debug-symbols
ac_add_options --disable-profiling
ac_add_options --disable-signmar
ac_add_options --disable-tests
ac_add_options --disable-parental-controls
ac_add_options --disable-accessibility

# If you want to have text-to-speech support, comment this line:
ac_add_options --disable-webspeech

# If you want to have geolocation support, comment this line:
ac_add_options --disable-necko-wifi

# If you have some problems with Skype Web or other web chat, comment this line:
ac_add_options --disable-webrtc

# If you want to have gamepad support, comment this line:
ac_add_options --disable-gamepad

# Enable wanted features
ac_add_options --enable-jemalloc

# Stylo doesn't compile with Rust 1.38 (needs newer cssparser)
ac_add_options --disable-stylo

ac_add_options --with-pthreads
ac_add_options --enable-strip
ac_add_options --enable-startup-notification
ac_add_options --enable-release
ac_add_options --enable-rust-simd

ac_add_options --enable-application=browser
ac_add_options --enable-eme=widevine
ac_add_options --enable-av1

export MOZ_GECKO_PROFILER=
export MOZ_ENABLE_PROFILER_SPS=
export MOZ_PROFILING=
END

  echo "Patching for KDE"
  #patch -Np1 -i "../mozilla-kde-$_patchrev.patch"
  #patch -Np1 -i "../waterfoxproject-kde-56.2.0.patch"
  #patch -Np1 -i "../firefox-kde-$_patchrev.patch"
  #patch -Np1 -i "../fix_waterfox_browser-kde_xul.patch"
  #patch -Np1 -i "../fix_crash_e10s_upload_cancel.patch"
  patch -Np1 -i "../waterfox-kde-56.2.10.1.patch"
  patch -Np1 -i "../pgo_fix_missing_kdejs.patch"

  # https://bugs.archlinux.org/task/52183
  echo "Patching for Jack"
  patch -Np1 -i ../jack-system-ports.patch

}

build() {
  cd Waterfox

  export PATH="$srcdir/path:$PATH"
  ./mach build
}

package() {
  cd Waterfox

  cp "$srcdir/kde.js" obj-$CARCH-pc-linux-gnu/dist/bin/defaults/pref

  DESTDIR="$pkgdir" ./mach install

  _vendor_js="$pkgdir/usr/lib/waterfox/browser/defaults/preferences/vendor.js"
  install -Dm644 /dev/stdin "$_vendor_js" <<END
// Disable default browser checking
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable extensions dropped in to a system
// location, or those owned by the application
pref("extensions.autoDisableScopes", 3);

// Don't display the one-off addon selection dialog when
// upgrading from a version of Waterfox older than 8.0
pref("extensions.shownSelectionUI", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Fall back to en-US search plugins if none exist for the current locale
pref("distribution.searchplugins.defaultLocale", "en-US");

// Use OS regional settings for date and time
pref("intl.regional_prefs.use_os_locales", true);
END

  install -Dm644 "$srcdir/kde.js" "$pkgdir/usr/lib/waterfox/browser/defaults/preferences/kde.js"

  for i in 16 22 24 32 48 64 128 256; do
    install -Dm644 browser/branding/unofficial/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/waterfox.png"
  done
  install -Dm644 browser/branding/unofficial/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/waterfox.png"
  install -Dm644 browser/branding/unofficial/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/waterfox.png"

  install -Dm644 $srcdir/waterfox.desktop \
    "$pkgdir/usr/share/applications/waterfox.desktop"

  install -Dm644 $srcdir/waterfox.1 \
    "$pkgdir/usr/share/man/man1/waterfox.1"

  install -Dm644 $srcdir/distribution.ini \
    "$pkgdir/usr/lib/waterfox/distribution/distribution.ini"

  # Use system-provided dictionaries
  if [ -d $pkgdir/usr/lib/waterfox/dictionaries ]; then
    rm -r "$pkgdir"/usr/lib/waterfox/dictionaries
  fi

  ln -Ts /usr/share/hunspell "$pkgdir/usr/lib/waterfox/dictionaries"
  ln -Ts /usr/share/hyphen "$pkgdir/usr/lib/waterfox/hyphenation"

  # Install a wrapper to avoid confusion about binary path
  install -Dm755 /dev/stdin "$pkgdir/usr/bin/waterfox" <<END
#!/bin/sh
exec /usr/lib/waterfox/waterfox "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srf "$pkgdir/usr/bin/waterfox" \
    "$pkgdir/usr/lib/waterfox/waterfox-bin"
}
