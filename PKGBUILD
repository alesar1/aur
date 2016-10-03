# Maintainer: Miguel de Val-Borro <miguel at archlinux dot net>
pkgname=astrometry.net
pkgver=0.67
pkgrel=3
pkgdesc="Automatic recognition of astronomical images"
arch=('i686' 'x86_64')
url="http://astrometry.net/"
license=("GPL")
depends=('bzip2' 'cairo' 'libpng' 'libjpeg-turbo' 'cfitsio' 'gsl')
makedepends=('make' 'gcc')
source=("https://github.com/dstndstn/${pkgname}/archive/${pkgver}.tar.gz")

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make
  make extra
}

package() {
  make INSTALL_DIR=${pkgdir}/usr \
	    DATA_INSTALL_DIR=${pkgdir}/usr/share/astrometry \
	    LIB_INSTALL_DIR=${pkgdir}/usr/lib/${DEB_HOST_MULTIARCH}/ \
	    ETC_INSTALL_DIR=${pkgdir}/etc \
	    FINAL_DIR=/usr \
	    DATA_FINAL_DIR=/usr/share/astrometry 
	install
}
md5sums=('b7b3277bb9779ef19b06b8e2377a63d4')
