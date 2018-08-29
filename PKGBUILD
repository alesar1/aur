# Maintainer: fdiblen <fdiblen at gmail dot com>
#

pkgname="casacore"
pkgver=2.4.1
pkgrel=1
pkgdesc="Suite of c++ libraries for radio astronomy data processing"
arch=('i686' 'x86_64')
url=""
license=('GPL-2.0')
makedepends=('make' 'pkgconf' 'binutils' 'cmake' 'gcc-fortran' 'gcc' 'flex' 
	     'bison' 'blas' 'lapack' 'cfitsio' 'wcslib'
	     )
depends=('')
optdepends=('sofa: only for testing casacore measures'
	    'fftw' 'hdf5' 'python-numpy' 'boost' 'ncurses')
conflicts=('')
provides=("${pkgname}")
source=("https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('58eccc875053b2c6fe44fe53b6463030ef169597ec29926936f18d27b5087d63')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    mkdir build

    cd build
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}/build"
    install -d ${pkgdir}/usr/share/licenses/${pkgname}
    #install -m 644 ../LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    make DESTDIR="${pkgdir}" install
}

# vim:set ts=4 sw=2 ft=sh et:
