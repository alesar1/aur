# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=aom
pkgname=lib32-aom
pkgver=2.0.0
pkgrel=1
pkgdesc="Alliance for Open Media video codec (32-bit)"
url="https://aomedia.org/"
arch=(x86_64)
license=(BSD custom:PATENTS)
depends=(lib32-glibc aom)
makedepends=(cmake git ninja yasm)
_commit=bb35ba9148543f22ba7d8642e4fbd29ae301f5dc  # tags/v2.0.0^0
source=("git+https://aomedia.googlesource.com/aom#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/^v//;s/-errata/.errata/;s/-/+/g'
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -H$_basename -Bbuild -G Ninja \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DBUILD_SHARED_LIBS=1 \
        -DENABLE_TESTS=0 \
        -DENABLE_DOCS=0

    cmake --build build
}

package() {
    DESTDIR="$pkgdir" cmake --build build --target install

    install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 $_basename/{LICENSE,PATENTS}

    cd "$pkgdir/usr"

    rm -r bin include
}
