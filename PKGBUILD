# Maintainer: Daniel Bermond < gmail-com: danielbermond >

pkgname=intel-gmmlib-git
_srcname=gmmlib
pkgver=18.3.r12.g10ad15a
pkgrel=1
pkgdesc='Intel Graphics Memory Management Library (git version)'
arch=('i686' 'x86_64')
url='https://github.com/intel/gmmlib/'
license=('MIT')
depends=('gcc-libs')
makedepends=('git' 'cmake')
provides=('intel-gmmlib' 'gmmlib-git')
conflicts=('intel-gmmlib' 'gmmlib-git')
replaces=('gmmlib-git')
options=('!emptydirs')
source=('git+https://github.com/intel/gmmlib.git')
sha256sums=('SKIP')

pkgver() {
    cd "$_srcname"
    
    # git, tags available
    git describe --long --tags | sed 's/^intel-gmmlib-//;s/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd "$_srcname"
    
    mkdir -p build
    cd build
    
    [ "$CARCH" = 'i686'   ] && local _arch='32'
    [ "$CARCH" = 'x86_64' ] && local _arch='64'
    
    cmake \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_LIBDIR:PATH='lib' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DRUN_TEST_SUITE:BOOL='ON' \
        -DARCH="$_arch" \
        -Wno-dev \
        ..
    
    make
}

package() {
    cd "${_srcname}/build"
    
    make DESTDIR="$pkgdir" install
    
    # license
    cd "${srcdir}/${_srcname}"
    install -D -m644 LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
