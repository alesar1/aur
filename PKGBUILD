# Maintainer: Lenovsky <lenovsky@protonmail.ch>

pkgname=telegram-desktop-git
pkgver=1.1.23.r15.g247f8f4f
pkgrel=1
pkgdesc="Official desktop version of Telegram messaging app."
arch=('i686' 'x86_64')
url="https://desktop.telegram.org/"
license=('GPL3')
depends=('ffmpeg' 'hicolor-icon-theme' 'icu' 'libproxy' 'libxkbcommon-x11' 'openal' 'openssl-1.0'
         'xcb-util-image' 'xcb-util-keysyms' 'xcb-util-renderutil' 'xcb-util-wm')
makedepends=('chrpath' 'cmake' 'fontconfig' 'git' 'google-breakpad-git' 'harfbuzz-icu' 'jasper'
             'libappindicator-gtk2' 'libexif' 'libgl' 'libinput' 'libjpeg-turbo' 'libmng' 'libpng'
             'libsm' 'libtiff' 'libunity' 'libva' 'libwebp' 'libxi' 'libxrender' 'mtdev' 'python'
             'python2' 'sqlite' 'tslib' 'wayland')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
_qt_version=5.6.2
source=("git+https://github.com/telegramdesktop/tdesktop.git#branch=dev"
        "git+https://github.com/Microsoft/GSL.git"
        "git+https://github.com/mapbox/variant.git"
        "git+https://github.com/telegramdesktop/libtgvoip.git"
        "git+https://github.com/philsquared/Catch.git"
        "git+https://chromium.googlesource.com/external/gyp#commit=702ac58e4772"
        "git+https://github.com/telegramdesktop/fcitx.git"
        "git+https://github.com/telegramdesktop/hime.git"
        "https://download.qt.io/official_releases/qt/${_qt_version%.*}/$_qt_version/submodules/qtbase-opensource-src-$_qt_version.tar.xz"
        "https://download.qt.io/official_releases/qt/${_qt_version%.*}/$_qt_version/submodules/qtimageformats-opensource-src-$_qt_version.tar.xz"
        "https://download.qt.io/official_releases/qt/${_qt_version%.*}/$_qt_version/submodules/qtwayland-opensource-src-$_qt_version.tar.xz"
        "telegram-desktop.desktop"
        "tg.protocol"
        "arch-tdesktop.patch"
        "arch-libtgvoip.patch")
sha256sums=('SKIP' 
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '2f6eae93c5d982fe0a387a01aeb3435571433e23e9d9d9246741faf51f1ee787'
            '4fb153be62dac393cbcebab65040b3b9d6edecd1ebbe5e543401b0e45bd147e4'
            '035c3199f4719627b64b7020f0f4574da2b4cb78c6981aba75f27b872d8e6c86'
            'f47f4b10c8b498ab456ad1dd54754cbd6725b936bb94ffe4fea12d2c2f2b408d'
            'd4cdad0d091c7e47811d8a26d55bbee492e7845e968c522e86f120815477e9eb'
            '1e37edeb5d4cac34bde2c50065093dfc788c70e86de1e3f803544938e1841348'
            '0547229c7a32f821e808f4b0d73d74774de5bea81555638bd0fe5201ba773660')
pkgver() {
  cd "$srcdir/tdesktop"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' 
}
prepare() {
  local qt_patch_file="$srcdir/tdesktop/Telegram/Patches/qtbase_${_qt_version//./_}.diff"
  local qt_base_dir="$srcdir/qtbase-opensource-src-$_qt_version"
  local fcitx_dir="$srcdir/qtbase-opensource-src-$_qt_version/src/plugins/platforminputcontexts/fcitx"
  local hime_dir="$srcdir/qtbase-opensource-src-$_qt_version/src/plugins/platforminputcontexts/hime"

  # Apply Telegram Qt patch
  cd "$qt_base_dir" 
  patch -p1 -i "$qt_patch_file"

  # Use OpenSSL 1.0
  echo "INCLUDEPATH += /usr/include/openssl-1.0" >> "$qt_base_dir/src/network/network.pro"

  # Move additional input method plugins to proper directory
  [ -d "$fcitx_dir" ] && rm -rf "$fcitx_dir" 
  mv "$srcdir/fcitx" "$fcitx_dir"
  [ -d "$hime_dir" ] && rm -rf "$hime_dir"
  mv "$srcdir/hime" "$hime_dir"

  # Apply Telegram gyp patch
  cd "$srcdir/gyp/"
  git apply "$srcdir/tdesktop/Telegram/Patches/gyp.diff"

  # Use python2 instead python
  sed -i 's/exec python /exec python2 /g' "$srcdir/gyp/gyp"

  # Fix submodules locations
  cd "$srcdir/tdesktop"
  git submodule init
  git config submodule.Telegram/ThirdParty/GSL.url "$srcdir/GSL"
  git config submodule.Telegram/ThirdParty/variant.url "$srcdir/variant"
  git config submodule.Telegram/ThirdParty/libtgvoip.url "$srcdir/libtgvoip"
  git config submodule.Telegram/ThirdParty/Catch.url "$srcdir/Catch"
  git submodule update

  # Apply Arch Patches
  cd "$srcdir/tdesktop"
  git apply "$srcdir/arch-tdesktop.patch"

  cd "$srcdir/tdesktop/Telegram/ThirdParty/libtgvoip"
  git checkout .
  git apply "$srcdir/arch-libtgvoip.patch"
}

build() {
  local qt_base_dir="$srcdir/qtbase-opensource-src-$_qt_version"
  local qt_imageformats_dir="$srcdir/qtimageformats-opensource-src-$_qt_version"
  local qt_wayland_dir="$srcdir/qtwayland-opensource-src-$_qt_version"

  # Build slightly patched Qt
  export OPENSSL_LIBS='-L/usr/lib/openssl-1.0 -lssl -lcrypto'
  cd "$qt_base_dir"
  ./configure \
    -prefix "$srcdir/qt" \
    -release \
    -force-debug-info \
    -opensource \
    -confirm-license \
    -system-zlib \
    -system-libpng \
    -system-libjpeg \
    -system-freetype \
    -system-harfbuzz \
    -system-pcre \
    -system-xcb \
    -system-xkbcommon-x11 \
    -no-gtkstyle \
    -static \
    -nomake examples \
    -nomake tests 
    make 
  make install
  export PATH="$srcdir/qt/bin:$PATH"

  cd "$qt_imageformats_dir"
  qmake .
  make
  make install

  cd "$qt_wayland_dir"
  qmake .
  make
  make install

  # Build Telegram Desktop
  rm -rf "$srcdir/tdesktop/out"
  cd "$srcdir/tdesktop/Telegram/gyp"

  "$srcdir/gyp/gyp" \
    -Dlinux_path_qt="$srcdir/qt" \
    -Dlinux_lib_ssl='-L/usr/lib/openssl-1.0 -lssl' \
    -Dlinux_lib_crypto='-L/usr/lib/openssl-1.0 -lcrypto' \
    -Dlinux_lib_icu="-licuuc -licutu -licui18n" \
    -Dlinux_path_opus_include="/usr/include/opus" \
    --depth=. --generator-output=../.. -Goutput_dir=out Telegram.gyp --format=cmake
  cd "$srcdir/tdesktop/out/Release"
  cmake .
  make
  chrpath --delete Telegram
}

package() {
  install -dm755 "$pkgdir/usr/bin"
  install -m755 "$srcdir/tdesktop/out/Release/Telegram" "$pkgdir/usr/bin/telegram-desktop"

  install -d "$pkgdir/usr/share/applications"
  install -m644 "$srcdir/telegram-desktop.desktop" "$pkgdir/usr/share/applications/telegram-desktop.desktop"

  install -d "$pkgdir/usr/share/kde4/services"
  install -m644 "$srcdir/tg.protocol" "$pkgdir/usr/share/kde4/services/tg.protocol"

  local icon_size icon_dir
  for icon_size in 16 32 48 64 128 256 512; do
    icon_dir="$pkgdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps"

    install -d "$icon_dir"
    install -m644 "$srcdir/tdesktop/Telegram/Resources/art/icon${icon_size}.png" "$icon_dir/telegram-desktop.png"
  done
}
