# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=srt
pkgname=lib32-srt
pkgver=1.3.2
pkgrel=1
pkgdesc="Secure Reliable Transport library (32-bit)"
url="https://www.srtalliance.org/"
arch=(x86_64)
license=(MPL2)
depends=(lib32-gcc-libs lib32-openssl srt)
makedepends=(git cmake ninja)
_commit=89cb4786a444038461725c9044c31ae9405c2ba9  # tags/v1.3.2
source=("git+https://github.com/Haivision/srt#commit=$_commit"
        no-rpath.diff)
sha256sums=('SKIP'
            'ce9a97d661d796da85a7e4faf9c70c27368d00eb505f85c03a31bba8f22e6847')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/^v//;s/-/+/g'
}

prepare() {
    cd $_basename

    patch -Np1 -i ../no-rpath.diff
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -Hsrt -Bbuild -GNinja \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_BINDIR=bin \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DCMAKE_INSTALL_INCLUDEDIR=include \
        -DENABLE_TESTING=True

    cmake --build build
}

check() {
    cd build

    ./utility-test
}

package() {
    DESTDIR="$pkgdir" cmake --build build --target install

    cd "$pkgdir"/usr

    rm -r bin include
}
