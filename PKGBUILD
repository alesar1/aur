# $Id$
# Contributor: Damir Perisa <damir.perisa@bluewin.ch>
# Contributor: Roberto Carvajal <roberto@archlinux.org>
# Mantainer: Lorenzo Ferrillo <lorenzofer at live dot com>
_basename=mjpegtools
pkgname=lib32-${_basename}
pkgver=2.1.0
pkgrel=5
pkgdesc="Set of tools that can do recording of videos and playback, simple cut-and-paste editing and the MPEG compression of audio and video. 32bit libraries"
arch=('x86_64')
license=('GPL')
url="http://mjpeg.sourceforge.net/"
depends=('mjpegtools' 'lib32-libjpeg' 'lib32-libpng' 'lib32-sdl' 'gcc-libs-multilib' 'lib32-libdv')
makedepends=('lib32-gtk2' 'lib32-v4l-utils')
source=(http://downloads.sourceforge.net/sourceforge/mjpeg/${_basename}-${pkgver}.tar.gz    v4l.patch    avoid_fno_pic.patch   )
md5sums=('57bf5dd78976ca9bac972a6511b236f3' 'SKIP' 'SKIP')

prepare() {
  cd ${_basename}-${pkgver}
  sed -i -e '/ARCHFLAGS=/s:=.*:=:' configure
}

build() {
  cd ${_basename}-${pkgver}
  export CC="gcc -m32 "
  export CXX="g++ -m32 "
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  patch -Np1  -i "${srcdir}/avoid_fno_pic.patch"
  #patch -Np0  -i "${srcdir}/v4l.patch" #video4linux is failing compilation
  autoreconf  -f -i
  ./configure --prefix=/usr --libdir=/usr/lib32 --enable-largefile   --without-libquicktime
#  make clean
  make
}

package() {
  cd ${_basename}-${pkgver}
  make DESTDIR="${pkgdir}" install
  rm ${pkgdir}/usr/include ${pkgdir}/usr/share ${pkgdir}/usr/bin -Rf
  }
 
