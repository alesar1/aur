# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=aom
pkgname=lib32-aom
pkgver=3.3.0
pkgrel=1
pkgdesc="Alliance for Open Media video codec (32-bit)"
url="https://aomedia.org/"
arch=(x86_64)
license=(BSD custom:PATENTS)
depends=(lib32-glibc aom)
makedepends=(cmake ninja yasm)
source=(https://storage.googleapis.com/aom-releases/libaom-$pkgver.tar.gz{,.asc})
b2sums=('22060694019bcd925cb38c365063b8f2be60aed4cc6f9b0aa95cf8b4c4c5b40f5c603359d8c0728c5650fe9f7eea7573b8fd4a93975481c67409b201b4c48428'
        'SKIP')
validpgpkeys=(B002F08B74A148DAA01F7123A48E86DB0B830498) # AOMedia release signing key <av1-discuss@aomedia.org>

prepare() {
    cd libaom-$pkgver
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -S libaom-$pkgver -B build -G Ninja \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DBUILD_SHARED_LIBS=1 \
        -DENABLE_TESTS=0 \
        -DENABLE_DOCS=0

    cmake --build build
}

package() {
    DESTDIR="$pkgdir" cmake --install build

    install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 libaom-$pkgver/{LICENSE,PATENTS}

    cd "$pkgdir/usr"

    rm -r bin include
}
