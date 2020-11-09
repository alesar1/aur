# Maintainer: Roshless <pkg@roshless.com>

pkgname=lagrange
pkgrel=1
pkgver=0.8.0
pkgdesc="Beautiful Gemini Client"
url="https://git.skyjake.fi/skyjake/lagrange"
arch=("any")
license=("BSD")
source=("https://git.skyjake.fi/skyjake/$pkgname/releases/download/v$pkgver/lagrange-$pkgver.tar.gz")

depends=(
    "openssl"
    "sdl2"
)
makedepends=("cmake")

build() {
    cmake -B build -S "$pkgname-${pkgver}" \
        -DCMAKE_BUILD_TYPE='None' \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -Wno-dev
    make -C build
}

package() {
    install -Dm644 $pkgname-$pkgver/LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    cd build
    make PREFIX="/usr" DESTDIR="$pkgdir" install
}

md5sums=('59bc44f8755fbb6093f0f229ec28d41c')
