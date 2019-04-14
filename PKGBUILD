# Maintainer: physkets <physkets // at // tutanota dot com>
# Contributor: James Clark <s1127853@sms.ed.ac.uk>
pkgname=opencoarrays
pkgver=2.6.3
pkgrel=1
pkgdesc="A transport layer for coarray Fortran compilers."
url="http://www.opencoarrays.org/"
arch=('x86_64')
license=('BSD')
depends=('mpich' 'gcc-fortran')
makedepends=('cmake')
source=("https://github.com/sourceryinstitute/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz"{,.asc})
validpgpkeys=('1DB1B5EDE32122B28E56810DCB21118C92A64702') #Izaak Beekman <zbeekman@gmail.com>
sha256sums=('00884ad8e28385932ae9a1ad9b7fbe5cc69a3e0bee7fcba927894236a8adf422'
            'SKIP' )

build() {
  export PATH="/opt/mpich/bin:$PATH"
  export LD_LIBRARY_PATH="/opt/mpich/lib:${LD_LIBRARY_PATH}"
  cd "${srcdir}/OpenCoarrays-${pkgver}"
  mkdir -p build
  cd build
  CC=gcc FC=gfortran cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DMPI_C_COMPILER=/opt/mpich/bin/mpicc \
    -DMPI_Fortran_COMPILER=/opt/mpich/bin/mpifort

  make
}

check() {
  export PATH="/opt/mpich/bin:$PATH"
  export LD_LIBRARY_PATH="/opt/mpich/lib:${LD_LIBRARY_PATH}"
  cd "${srcdir}/OpenCoarrays-${pkgver}/build"
  make test
}

package() {
  cd "${srcdir}/OpenCoarrays-${pkgver}/build"
  make DESTDIR="${pkgdir}" install
  install -D -m644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
