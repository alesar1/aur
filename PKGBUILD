# Maintainer: Nikolay Korotkiy <sikmir@gmail.com>
_orgname=OpenOrienteering
_pkgname=mapper
pkgname=${_orgname,,}-${_pkgname}
pkgver=0.8.2
pkgrel=1
pkgdesc="Map drawing program from OpenOrienteering"
arch=('i686' 'x86_64')
url="http://www.openorienteering.org/apps/mapper/"
license=('GPL3')
depends=('qt5-base>=5.3' 'polyclipping>=6.1.3a' 'proj>=4.9.2' 'gdal')
makedepends=('cmake>=3.1' 'qt5-tools>=5.3' 'doxygen' 'libcups')
optdepends=('qt5-imageformats: Support for TIFF etc.')
provides=("${pkgname}=${pkgver}")
conflicts=(${pkgname}-git)
install=${pkgname}.install
source=("https://github.com/${_orgname}/${_pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('11e6f2e93442f217f7373bd737a58a75e8e6da81d4365e12691a8dfdf1f01066')

build() {
  cd ${_pkgname}-${pkgver}

  rm -rf build
  mkdir -p build
  cd build

  cmake ..                      \
    -DCMAKE_BUILD_TYPE=Release  \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLICENSING_PROVIDER=arch   \
    -DMapper_PACKAGE_NAME=${pkgname} \
    -Wno-dev
  make
}

package() {
  cd ${_pkgname}-${pkgver}/build

  make DESTDIR=${pkgdir}/ install
}
