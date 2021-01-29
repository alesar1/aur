# Maintainer: KspLite <ksplite@outlook.com>
pkgname=tdesktop-x64
pkgver=2.5.7.1
pkgrel=1
pkgdesc='Third party Telegram Desktop client with various enhancements'
arch=('x86_64')
url="https://github.com/TDesktop-x64/tdesktop"
license=('GPL3')
depends=('hunspell' 'ffmpeg' 'hicolor-icon-theme' 'lz4' 'minizip' 'openal'
         'qt5-imageformats' 'xxhash' 'libdbusmenu-qt5' 'kwayland' 'gtk3')
makedepends=('cmake' 'git' 'ninja' 'python' 'range-v3' 'tl-expected' 'microsoft-gsl' 'libtg_owt')
optdepends=('ttf-opensans: default Open Sans font family')
provides=("tdesktop-x64")
conflicts=("telegram-desktop")
source=("https://github.com/KspLite/tdesktop-x64-AUR/releases/download/v${pkgver}/${pkgname}-${pkgver}-full.tar.gz")
sha512sums=('0cb231fcc84dffc7b3ad9662d897f5b79028e1eb2eb3241048e501306a6050e002e06dbc12ce7ffe339df331a3e239cd8f6e9d79a7516ec5e64c44fb538d3726')

prepare() {
    cd $pkgname-$pkgver-full/cmake
    # force webrtc link to libjpeg
    echo "target_link_libraries(external_webrtc INTERFACE jpeg)" | tee -a external/webrtc/CMakeLists.txt
}

build() {
    cd $pkgname-$pkgver-full

    # Upstream is using the same API ID&Hash as the official one
    cmake . \
        -B build \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DTDESKTOP_API_ID=611335 \
        -DTDESKTOP_API_HASH=d524b414d21f4d37f08684c1df41ac9c \
        -DTDESKTOP_LAUNCHER_BASENAME="telegramdesktop" \
        -DDESKTOP_APP_SPECIAL_TARGET="" \
        -DDESKTOP_APP_DISABLE_AUTOUPDATE=ON
    ninja -C build
}

package() {
    cd $pkgname-$pkgver-full
    DESTDIR=$pkgdir ninja -C build install
}
