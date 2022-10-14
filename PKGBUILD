# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Maintainer: Gianluca Pettinello <g_pet at hotmail dot com>
# Contributor: Alessandro G. Magnasco <alessandromagnasco at gmail dot com>
# Contributor: Bertrand Lacoste <bertrandlacoste at gmail dot com>
# Contributor: Tim Langlois <langlois at cs dot cornell dot edu>
# Contributor: Christian Pfeiffer <cpfeiffer at live dot de>
# Contributor: Wink Saville <wink at saville dot com>
pkgname=hypre
pkgver=2.26.0
pkgrel=1
pkgdesc="Parallel solvers for sparse linear systems featuring multigrid methods"
arch=('x86_64')
url="https://github.com/${pkgname}-space/${pkgname}"
license=('APACHE' 'MIT' 'LGPL')
depends=('superlu' 'superlu_dist')
makedepends=('gcc-fortran')
source=(${pkgname}-${pkgver}::${url}/archive/v${pkgver}.tar.gz)
sha512sums=('d5c5c9f5f7d8e4229ccbc41510d1dea0bc896ce6e969c3df75bac94e5355b8d5405f71a457ec2f0f3252840fe27f8c8bf8735b4595f05d6d4b250c93dd69f435')

build() {
  cd ${pkgname}-${pkgver}/src
  # disable internal superlu and fei for now, not sure yet how to get it to use external superlu
  CFLAGS="${CFLAGS} -fopenmp" CXXFLAGS="${CXXFLAGS} -fopenmp" LDFLAGS="${LDFLAGS} -lgomp" \
    ./configure \
    --prefix="${pkgdir}/usr" \
    --includedir="${pkgdir}/usr/include/hypre" \
    --enable-shared \
    --with-superlu \
    --with-superlu-include=/usr/include/superlu \
    --with-superlu-lib="-lsuperlu" \
    --with-dsuperlu \
    --with-dsuperlu-include=/usr/include/superlu_dist \
    --with-dsuperlu-lib="-lsuperlu_dist" \
    --with-blas \
    --with-lapack \
    --with-openmp \
    --enable-fortran \
    --with-mli \
    --with-MPI
  make
}

check() {
  cd ${pkgname}-${pkgver}/src
  make test
}

package() {
  cd ${pkgname}-${pkgver}/src
  make install
  install -Dm 644 ${srcdir}/${pkgname}-${pkgver}/LICENSE-APACHE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm 644 ${srcdir}/${pkgname}-${pkgver}/LICENSE-MIT -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
