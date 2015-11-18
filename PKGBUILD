# $Id: PKGBUILD 137899 2015-08-04 06:37:13Z bpiotrowski $
# Maintainer: Eric Bélanger <eric@archlinux.org>

_pkgname=krename
pkgname=$_pkgname-frameworks
pkgver=4.0.9
pkgrel=5
pkgdesc="A very powerful batch file renamer for KDE. KF5 Version."
arch=('i686' 'x86_64')
url="http://www.krename.net"
license=('GPL')
depends=('kdelibs4support' 'taglib' 'kio' 'kjs')
#kitemviews
makedepends=('cmake' 'automoc4')
provides=$_pkgname
conflicts=$_pkgname
install=krename.install
source=(http://downloads.sourceforge.net/project/krename/KDE4%20krename-stable/${pkgver}/${_pkgname}-${pkgver}.tar.bz2 "port_to_kf5.patch")
sha1sums=('03886a385a16de4c9bc285d25b9816ea97768c9e' 'SKIP')
options=('libtool')

prepare() {
  cd ${_pkgname}-${pkgver}
  patch -p1 -i ${srcdir}/port_to_kf5.patch
}

build() {
  mkdir build
  cd build
  cmake ../${_pkgname}-${pkgver} \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-I/usr/include/freetype2"
  #sed -i 's|/share/locale|/share/locale/kde4|' po/cmake_install.cmake
  make
}

package() {
  cd build
  make DESTDIR="${pkgdir}" install
}
