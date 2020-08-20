# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev at orum.in>

_basename=openexr
pkgname=lib32-openexr
pkgver=2.5.3
pkgrel=1
pkgdesc="An high dynamic-range image file format library (32-bit)"
url="https://www.openexr.com/"
arch=('x86_64')
license=('BSD')
depends=('lib32-gcc-libs' 'lib32-zlib' 'openexr')
makedepends=('cmake' 'lib32-fltk' 'lib32-freeglut')
conflicts=('lib32-ilmbase')
replaces=('lib32-ilmbase')
source=($_basename-$pkgver.tar.gz::"https://github.com/openexr/openexr/archive/v$pkgver.tar.gz")
sha256sums=('6a6525e6e3907715c6a55887716d7e42d09b54d2457323fcee35a0376960bebf')

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -B build -S $_basename-$pkgver \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DPYILMBASE_ENABLE=false \
        -DOPENEXR_BUILD_UTILS=false

    cmake --build build
}

package() {
    DESTDIR="${pkgdir}" cmake --install build

    rm -r "${pkgdir}/usr/include"
    rm -r "${pkgdir}/usr/share"

    install -D -m644 "$srcdir"/$_basename-$pkgver/LICENSE.md -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
