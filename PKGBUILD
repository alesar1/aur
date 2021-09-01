# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=aom
pkgname=lib32-aom
pkgver=3.1.2
pkgrel=1
pkgdesc="Alliance for Open Media video codec (32-bit)"
url="https://aomedia.org/"
arch=(x86_64)
license=(BSD custom:PATENTS)
depends=(lib32-glibc aom)
makedepends=(cmake git ninja yasm)
_commit=ae2be8030200925895fa6e98bd274ffdb595cbf6 # tags/v3.1.2^0
source=("git+https://aomedia.googlesource.com/aom#commit=$_commit")
b2sums=('SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/^v//;s/-errata/.errata/;s/-/+/g'
}

prepare() {
    cd $_basename

    # https://bugs.archlinux.org/task/71800
    git cherry-pick -n 31257f59a1df72cbbd1399efb780d13a0e433b16
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -S $_basename -B build -G Ninja \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DBUILD_SHARED_LIBS=1 \
        -DENABLE_TESTS=0 \
        -DENABLE_DOCS=0

    cmake --build build
}

package() {
    DESTDIR="${pkgdir}" cmake --install build

    install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 $_basename/{LICENSE,PATENTS}

    cd "$pkgdir/usr"

    rm -r bin include
}
