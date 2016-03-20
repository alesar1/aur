# Maintainer: Jerome Lebleu <jerome dot lebleu at mailoo dot org>

pkgname=qlcplus
pkgver=4.10.3
pkgrel=1
pkgdesc="Q Light Controller Plus - The open DMX lighting desk software for controlling professional lighting fixtures."
arch=('i686' 'x86_64')
url="http://qlcplus.org/"
license=('APACHE')
depends=('qt4' 'libftdi-compat' 'libsndfile' 'libmad' 'shared-mime-info' 'fftw')
# ola need to be installed at build time for the plugin to be compiled
optdepends=('ola: Open Lighting Architecture plugin')
conflicts=('qlc' 'qlc-svn')
install=${pkgname}.install
source=("http://www.qlcplus.org/downloads/${pkgver}/qlcplus_${pkgver}.tar.gz")
md5sums=('defed3668792643ab973d356d05fbb8e')

build() {
  cd "${srcdir}/qlcplus-${pkgver}"
  qmake-qt4 QMAKE_CXXFLAGS+=-Wno-error=unused-variable
  make
}

package() {
  cd "${srcdir}/qlcplus-${pkgver}"
  make INSTALL_ROOT="${pkgdir}/" install
}
