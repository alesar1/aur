# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=imath
pkgname=lib32-imath
pkgver=3.1.2
pkgrel=1
pkgdesc='A C++ and python library of 2D and 3D vector, matrix, and math operations for computer graphics (32-bit)'
url='https://www.openexr.com/'
arch=(x86_64)
license=(BSD)
depends=(lib32-gcc-libs imath)
makedepends=(cmake)
source=(https://github.com/AcademySoftwareFoundation/Imath/archive/v$pkgver/$_basename-$pkgver.tar.gz
        fix_build.patch)
sha256sums=('f21350efdcc763e23bffd4ded9bbf822e630c15ece6b0697e2fcb42737c08c2d'
            '8894825cb9bd4a3b70b1ff46fd30b435c42fba8b9438833bd50cf50f4a7da971')

prepare() {
    cd Imath-$pkgver

    patch -Np1 -i ../fix_build.patch
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -B build -S Imath-$pkgver \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=None \
        -DCMAKE_INSTALL_LIBDIR=lib32 \
        -DPYTHON=OFF

    cmake --build build
}

package() {
    DESTDIR="$pkgdir" cmake --install build

    rm -r "${pkgdir}/usr/include"

    install -Dm644 Imath-$pkgver/LICENSE.md -t "$pkgdir"/usr/share/licenses/$pkgname
}
