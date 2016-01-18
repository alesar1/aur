# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=oce
pkgver=0.16.1
pkgrel=3
pkgdesc="Open CASCADE Community Edition: patches/improvements/experiments contributed by users over the official Open CASCADE library."
url="https://github.com/tpaviot/oce"
arch=('i686' 'x86_64')
license=('GPLv2.1')
makedepends=('cmake')
depends=('intel-tbb' 'gl2ps' 'freeimage')
source=(https://github.com/tpaviot/${pkgname}/archive/OCE-${pkgver}.tar.gz 99_oce.sh 99_oce.conf)
md5sums=('4d591b240c9293e879f50d86a0cb2bb3'
         '606e400a97d9947459e4de2eca65f04c'
         '167a9f5c94a16d7855c3ac99e34a4506')

build() {
  cd oce-OCE-${pkgver}
  mkdir -p build
  cd build
  flags=""
  flags="$flags -DOCE_INSTALL_PREFIX=/opt/oce"
  flags="$flags -DOCE_MULTITHREAD_LIBRARY:STRING=TBB"
  flags="$flags -DOCE_WITH_GL2PS=ON"
  flags="$flags -DOCE_WITH_FREEIMAGE=ON"
  flags="$flags -DOCE_DRAW=ON"
  cmake $flags .. 
  make
}

package() {
  cd oce-OCE-${pkgver}/build
  make DESTDIR="${pkgdir}" install
  install -Dm644 ${srcdir}/oce-OCE-${pkgver}/LICENSE_LGPL_21.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE_LGPL_21.txt"
  install -Dm644 ${srcdir}/oce-OCE-${pkgver}/OCCT_LGPL_EXCEPTION.txt "$pkgdir/usr/share/licenses/$pkgname/OCCT_LGPL_EXCEPTION.txt"
  
  install -m644 "${srcdir}/99_oce.conf" -t "${pkgdir}/etc/ld.so.conf.d"
  install -m755 "${srcdir}/99_oce.sh" -t "${pkgdir}/etc/profile.d"
}

# vim:set ts=2 sw=2 et:
