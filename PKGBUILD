# Maintainer: hexchain <i@hexchain.org>

# Thanks Nicholas Guriev <guriev-ns@ya.ru> for the patches!
# https://github.com/mymedia2/tdesktop

pkgname=telegram-desktop-systemqt
pkgver=1.0.27
pkgrel=1
pkgdesc='Experimental build of Telegram Desktop (using system Qt)'
arch=('i686' 'x86_64')
url="https://desktop.telegram.org/"
license=('GPL3')
depends=('ffmpeg' 'hicolor-icon-theme' 'minizip' 'openal' 'qt5-base' 'qt5-imageformats')
makedepends=('cmake' 'libappindicator-gtk3' 'dee' 'git' 'gyp-git' 'libexif' 'libva' 'libwebp' 'mtdev' 'python' 'python2')
optdepends=('libappindicator-gtk3: AppIndicator tray icon')
conflicts=('telegram-desktop')
provides=('telegram-desktop')
install="telegram-desktop.install"
source=(
    "tdesktop::git+https://github.com/telegramdesktop/tdesktop.git#tag=v$pkgver"
    "telegramdesktop.desktop"
    "tg.protocol"
    "CMakeLists.inj"
    "aur-build-fixes.patch"
)
sha256sums=('SKIP'
            '41c22fae6ae757936741e63aec3d0f17cafe86b2d6153cdd1d01a5581e871f17'
            'd4cdad0d091c7e47811d8a26d55bbee492e7845e968c522e86f120815477e9eb'
            '7a06af83609168a8eaec59a65252caa41dcd0ecc805225886435eb65073e9c82'
            '82b2458e8ad5b316b9f9748c27fbe65e867ea3c29d78d1442e293a282eba63a0')

prepare() {
    cd "$srcdir/tdesktop"
    git submodule update --init
    git apply "../aur-build-fixes.patch"
}

build() {
    cd "$srcdir/tdesktop"
    export LANG=en_US.UTF-8
    export GYP_DEFINES="TDESKTOP_DISABLE_CRASH_REPORTS,TDESKTOP_DISABLE_AUTOUPDATE,TDESKTOP_DISABLE_REGISTER_CUSTOM_SCHEME"
    export EXTRA_FLAGS="-DTDESKTOP_DISABLE_AUTOUPDATE -DTDESKTOP_DISABLE_CRASH_REPORTS -DTDESKTOP_DISABLE_REGISTER_CUSTOM_SCHEME -Winvalid-pch"
    export CPPFLAGS="$CPPFLAGS $EXTRA_FLAGS"
    export CXXFLAGS="$CXXFLAGS $EXTRA_FLAGS"
    gyp \
        -Gconfig=Release \
        --depth=Telegram/gyp --generator-output=../.. -Goutput_dir=out Telegram/gyp/Telegram.gyp --format=cmake
    NUM=$((`wc -l < out/Release/CMakeLists.txt` - 2))
    sed -i "$NUM r ../CMakeLists.inj" out/Release/CMakeLists.txt
    cd "$srcdir/tdesktop/out/Release"
    cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_VERBOSE_MAKEFILE=ON -DCMAKE_BUILD_TYPE=None
    make
}

package() {
    install -dm755 "$pkgdir/usr/bin"
    install -m755 "$srcdir/tdesktop/out/Release/Telegram" "$pkgdir/usr/bin/telegram-desktop"

    install -d "$pkgdir/usr/share/applications"
    install -m644 "$srcdir/telegramdesktop.desktop" "$pkgdir/usr/share/applications/telegramdesktop.desktop"

    install -d "$pkgdir/usr/share/kservices5"
    install -m644 "$srcdir/tg.protocol" "$pkgdir/usr/share/kservices5/tg.protocol"

    local icon_size icon_dir
    for icon_size in 16 32 48 64 128 256 512; do
        icon_dir="$pkgdir/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps"

        install -d "$icon_dir"
        install -m644 "$srcdir/tdesktop/Telegram/Resources/art/icon${icon_size}.png" "$icon_dir/telegram-desktop.png"
    done
}
