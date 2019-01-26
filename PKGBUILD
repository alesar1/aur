# Maintainer: andrewwja <aanderso [at] tcd [DOt] ie>

pkgname=arm-linux-gnueabihf-openblas-lapack-openmp
_PkgName=OpenBLAS
_pkgname=openblas
pkgver=0.3.4
_lapackver=3.8.0
pkgrel=1
pkgdesc="Optimized BLAS library based on GotoBLAS2 1.13 BSD (providing blas, lapack, and cblas)"
arch=('any')
url="http://www.openblas.net/"
license=('BSD')
depends=('gcc-libs')
makedepends=('perl')
provides=('arm-linux-gnueabihf-openblas' "arm-linux-gnueabihf-cblas=${_lapackver}")
conflicts=()
options=(!emptydirs !strip)
source=(${_PkgName}-${pkgver}.tar.gz::https://github.com/xianyi/${_PkgName}/archive/v${pkgver}.tar.gz)
sha256sums=('SKIP')

_ncpus=$(eval "cat /proc/cpuinfo | grep MHz | wc -l")

_config="BINARY=32 CC=arm-linux-gnueabihf-gcc FC=arm-linux-gnueabihf-gfortran HOSTCC=gcc TARGET=ARMV7 \
  USE_OPENMP=1 USE_THREAD=1 USE_COMPILER_TLS=0 \
  MAKE_NB_JOBS=${_ncpus} \
  PREFIX=/usr/arm-linux-gnueabihf "

build(){
  cd "${srcdir}/${_PkgName}-${pkgver}"

  make ${_config} CFLAGS="-mtune=generic -I /usr/arm-linux-gnueabihf/include -L /usr/arm-linux-gnueabihf/lib" libs netlib shared
}

check(){
  #cd "${srcdir}/${_PkgName}-${pkgver}"

  #make ${_config} tests

  true
}

package(){
  cd "${srcdir}/${_PkgName}-${pkgver}"

  make ${_config} DESTDIR="${pkgdir}" install

  # Install license
  install -Dm644 LICENSE "${pkgdir}/usr/arm-linux-gnueabihf/share/licenses/${pkgname}/LICENSE"

  # Symlink to provide cblas
  cd "${pkgdir}/usr/arm-linux-gnueabihf/lib/"
  # CBLAS
  ln -sf libopenblas.so libcblas.so
  ln -sf libopenblas.so libcblas.so.${_lapackver:0:1}
  ln -sf libopenblas.so libcblas.so.${_lapackver}
}
# vim:set ts=2 sw=2 et:
