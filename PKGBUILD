# Contributor: Ed Sandberg <scarypezsanta@gmail.com>
# Maintainer: Xyne

pkgname=abinit
pkgver=9.6.2
pkgrel=1
pkgdesc="Full-featured atomic-scale first-principles simulation software."
arch=('i686' 'x86_64')
url="https://www.abinit.org/"
license=('GPLv3')
depends=('lapack' 'blas' 'openmpi' 'netcdf' 'netcdf-fortran' 'hdf5' 'libxc')
makedepends=('gcc-fortran' 'perl')
source=(
  "https://www.abinit.org/sites/default/files/packages/$pkgname-$pkgver.tar.gz"
)

build() {
  cd -- "$srcdir/$pkgname-$pkgver"
  mkdir -p build && cd build
  ../configure \
    FC=gfortran \
    CC=cc \
    --with-libxc \
    --with-hdf5 \
    --with-netcdf \
    --with-netcdf-fortran \
    --enable-openmp \
    --without-mpi \
    --prefix=/usr \
    #--disable-all-plugins
  make
}

package() {
  cd -- "$srcdir/$pkgname-$pkgver/build"
  make DESTDIR="$pkgdir" install
}

sha512sums=('63c565362f03b7015ba2326213102f4ea9421756d3b4076debf5384057f6c7855afe3cab35160b18fceba8fddc864847ec351995cbf485077a2dc7b932b49631')
