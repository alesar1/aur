# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=libmysofa-git
pkgver=0.4.r52.g58a1128
pkgrel=1
pkgdesc='C library to read HRTFs if they are stored in the AES69-2015 SOFA format (git version)'
arch=('i686' 'x86_64')
url='https://hoene.github.io/libmysofa/'
license=('BSD')
depends=('glibc' 'zlib')
makedepends=('git' 'cmake')
provides=('libmysofa')
conflicts=('libmysofa')
source=("$pkgname"::'git+https://github.com/hoene/libmysofa.git')
sha256sums=('SKIP')

pkgver() {
    cd "$pkgname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//;s/,//'
}

build() {
    cd "${pkgname}/build"
    cmake \
        -DBUILD_SHARED_LIBS:BOOL=ON \
        -DBUILD_TESTS:BOOL=OFF \
        -DCMAKE_BUILD_TYPE:STRING=Release \
        -DCMAKE_COLOR_MAKEFILE:BOOL=ON \
        -DCMAKE_INSTALL_PREFIX:PATH=/usr \
        ..
    make all
}

package() {
    # includes
    cd "${pkgname}/src/hrtf"
    install -D -m644 mysofa.h  "${pkgdir}/usr/include/mysofa.h"
    
    # library
    cd "${srcdir}/${pkgname}/build/src"
    install -D -m755 libmysofa.so "${pkgdir}/usr/lib/libmysofa.so"
    
    # license
    cd "${srcdir}/${pkgname}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
