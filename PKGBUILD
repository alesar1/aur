# Contributor: Graziano Giuliani <graziano.giuliani@gmail.com>
pkgname=emos
pkgver=4.3.7
pkgrel=1
pkgdesc="ECMWF Interpolation Library"
arch=(i686 x86_64)
url="https://software.ecmwf.int/wiki/display/EMOS/Emoslib"
license=('Apache')
groups=(science)
depends=()
makedepends=(grib_api boost git cmake)
options=('staticlibs')
source=(https://software.ecmwf.int/wiki/download/attachments/3473472/libemos-${pkgver}-Source.tar.gz)
md5sums=('52611a3cfcedfa50e228e0a07d9c2fa8')

build() {
  cd ${srcdir}/lib${pkgname}-${pkgver}-Source
  mkdir -p build
  cd build
  cmake -DGRIB_API_PATH=/usr \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=production ..
  make
}

package() {
  cd ${srcdir}/lib${pkgname}-${pkgver}-Source/build
  make DESTDIR=${pkgdir} install
}

# vim:set ts=2 sw=2 et:
