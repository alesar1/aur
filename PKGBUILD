# Maintainer: Nikolay Korotkiy <sikmir@gmail.com>
_orgname=openorienteering
_pkgname=mapper
pkgname=${_orgname}-${_pkgname}
pkgver=0.5.96
pkgrel=3
pkgdesc="Orienteering mapmaking program"
arch=('i686' 'x86_64')
url="http://openorienteering.github.io/apps/mapper/"
license=('GPL3')
depends=('qt5-base>=5.3.2' 'polyclipping>=6.1.3a' 'proj>=4.8.0')
makedepends=('cmake>=2.8.9' 'qt5-tools>=5.3.2')
provides=("${pkgname}=${pkgver}")
install=${pkgname}.install
source=("https://github.com/${_orgname}/${_pkgname}/archive/v${pkgver}.tar.gz"
        'qt-include.patch')
sha256sums=('0db31cd6814667a4335d76c56443ff84975b6101b4fb231886f1b176f507db26'
            'bb018de5e99a655b132ff43faf3990538126c434953751c6ba7264977758a497')

prepare() {
  cd ${srcdir}/${_pkgname}-${pkgver}
  patch -Np1 < ${srcdir}/qt-include.patch
}

build() {
  cd ${srcdir}/${_pkgname}-${pkgver}

  rm -rf ${srcdir}/${_pkgname}-${pkgver}/build
  mkdir -p ${srcdir}/${_pkgname}-${pkgver}/build
  cd ${srcdir}/${_pkgname}-${pkgver}/build

  cmake ..                      \
    -DCMAKE_BUILD_TYPE=Release  \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DMapper_BUILD_QT=0         \
    -DMapper_BUILD_CLIPPER=0    \
    -DMapper_BUILD_PROJ=0       \
    -Wno-dev
  make -j2
}

package() {
  cd ${srcdir}/${_pkgname}-${pkgver}/build

  make DESTDIR=${pkgdir}/ install
  rm -fr ${pkgdir}/DEBIAN
}
