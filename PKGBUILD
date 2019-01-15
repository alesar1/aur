# Maintainer: andrewwja <aanderso [at] tcd [DOt] ie>
# Contributor: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Jiaxi Hu <sftrytry _AT_ gmail _DOT_ com>
# Contributor: Giuseppe Borzi <gborzi _AT_ ieee _DOT_ org>

pkgname=aarch64-linux-gnu-openblas-lapack-openmp
_PkgName=OpenBLAS
_pkgname=openblas
pkgver=0.3.4
# grep VERSION "${srcdir}/${_PkgName}-${pkgver}"/lapack-netlib/README.md | tail -n 1 | cut -d ' ' -f 2
_lapackver=3.8.0
pkgrel=6
pkgdesc="Optimized BLAS library based on GotoBLAS2 1.13 BSD (providing blas, lapack, and cblas)"
arch=('any')
url="http://www.openblas.net/"
license=('BSD')
depends=('gcc-libs')
makedepends=('perl')
provides=('aarch64-linux-gnu-openblas' "aarch64-linux-gnu-cblas=${_lapackver}")
conflicts=()
options=(!emptydirs)
source=(${_PkgName}-${pkgver}.tar.gz::https://github.com/xianyi/${_PkgName}/archive/v${pkgver}.tar.gz)
sha256sums=('SKIP')

_config="HOSTCC=gcc CC=aarch64-linux-gnu-gcc CROSS=1 TARGET=ARMV8 BINARY=64 \
  USE_OPENMP=1 USE_THREAD=1 \
  USE_COMPILER_TLS=0 \
  NO_LAPACK=1 \
  NO_LAPACKE=1 \
  MAKE_NB_JOBS=2"

build(){
  cd "${srcdir}/${_PkgName}-${pkgver}"

  make ${_config} CFLAGS="-mtune=generic -I /usr/aarch64/include -L /usr/aarch64/lib -L /usr/aarch64/lib64" libs netlib shared static
}

check(){
  #cd "${srcdir}/${_PkgName}-${pkgver}"

  #make ${_config} tests

  true
}

package(){
  cd "${srcdir}/${_PkgName}-${pkgver}"

  make ${_config} PREFIX=/usr/aarch64-linux-gnu/ DESTDIR="${pkgdir}" install

  # Install license
  install -Dm644 LICENSE "${pkgdir}/usr/aarch64-linux-gnu/usr/share/licenses/${pkgname}/LICENSE"

  # Symlink to provide cblas
  cd "${pkgdir}/usr/aarch64-linux-gnu/usr/lib/"
  # CBLAS
  ln -sf libopenblas.so libcblas.so
  ln -sf libopenblas.so libcblas.so.${_lapackver:0:1}
  ln -sf libopenblas.so libcblas.so.${_lapackver}
}
# vim:set ts=2 sw=2 et:
