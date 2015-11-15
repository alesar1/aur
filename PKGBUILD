# Maintainer: James Clark <s1127853@sms.ed.ac.uk>
pkgname=opencoarrays
pkgver=1.2.0
pkgrel=1
pkgdesc="A transport layer for coarray Fortran compilers."
url="http://www.opencoarrays.org/"
arch=('x86_64' 'i686')
license=('BSD')
depends=('openmpi' 'gcc-fortran')
source=("https://github.com/sourceryinstitute/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz")
md5sums=('43d82c80a8b3ca3d06d26f1f422c228f')

build() {
  cd "${srcdir}/${pkgname}"
  mkdir -p build
  cd build
  CC=mpicc FC=mpif90 cmake .. -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}/build"
  make DESTDIR="${pkgdir}" install
  install -D -m644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
