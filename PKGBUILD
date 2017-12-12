# Maintainer: Nils Czernia (DL1CAF) <nils@czserver.de>
# Contributer: Carsten Feuls (DL1CAF) 'Der Techniker' <dl1caf@vfdb.org>
# Contributer: Amateurfunk Station der Hochschule Niederrhein (DF0FN) <df0fn@hs-niederrhein.de>
pkgname=('qtel-git')
_pkgname=('svxlink')
pkgver=14.08.2.766.g380e5333
pkgrel=1
arch=('i686' 'x86_64' 'armv5h' 'armv6h' 'armv7h')
url="http://sourceforge.net/projects/svxlink/"
license=('GPL')
source=("${_pkgname}::git+https://github.com/sm0svx/svxlink.git")
conflicts=("svxlink")
sha256sums=('SKIP')
depends=('alsa-utils' 'alsa-lib' 'libsigc++' 'gsm' 'libgcrypt' 'popt' 'tcl' 'speex' 'opus')
makedepends=('cmake')
pkgdesc="Graphical Userinteface for Echolink written in QT"

pkgver() {
  cd "${_pkgname}"
  git describe --always | sed -e 's|-|.|g' 
}

build(){
  cd "${srcdir}/${_pkgname}/src"
  mkdir -p build 
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DSYSCONF_INSTALL_DIR=/etc -DLOCAL_STATE_DIR=/var ..
  make
  make doc
}

package(){
  make -C ${srcdir}/${_pkgname}/src/build DESTDIR="${pkgdir}" install
  rm ${pkgdir}/usr/bin/{remotetrx,siglevdetcal,svxlink}
  rm -rf ${pkgdir}/usr/include
  rm -f ${pkgdir}/usr/lib/libasynccpp.so*
  rm -f ${pkgdir}/usr/lib64/libasynccpp.so*
  rm -rf ${pkgdir}/usr/lib/svxlink 
  rm -rf ${pkgdir}/usr/lib64/svxlink 
  rm -rf ${pkgdir}/usr/share/{doc,man,svxlink}
  rm -r ${pkgdir}/var
  rm -r ${pkgdir}/etc
  mv ${pkgdir}/usr/lib64 ${pkgdir}/usr/lib
}
