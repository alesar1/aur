# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=aom
pkgname=lib32-aom
pkgver=3.2.0
pkgrel=1
pkgdesc="Alliance for Open Media video codec (32-bit)"
url="https://aomedia.org/"
arch=(x86_64)
license=(BSD custom:PATENTS)
depends=(lib32-glibc aom)
makedepends=(cmake ninja yasm)
source=(https://storage.googleapis.com/aom-releases/libaom-$pkgver.tar.gz{,.asc})
b2sums=('b247c9092bf3b8080b33671f182b10eea060a2eafd94eeb1b92177d2c7b5c32de2342f9cf1c7e500b28fdac2b00ea8d43b1e56c9d1c8c0efe1bbc4e40285a52a'
        'SKIP')
validpgpkeys=(B002F08B74A148DAA01F7123A48E86DB0B830498) # AOMedia release signing key <av1-discuss@aomedia.org>

prepare() {
    cd $_basename
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -S . -B build -G Ninja \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DBUILD_SHARED_LIBS=1 \
        -DENABLE_TESTS=0 \
        -DENABLE_DOCS=0

    cmake --build build
}

package() {
    DESTDIR="${pkgdir}" cmake --install build

    install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE PATENTS

    cd "$pkgdir/usr"

    rm -r bin include
}
