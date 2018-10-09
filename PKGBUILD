# Mantainer: Angelo Salton <gsalton4@hotmail.com>
pkgname=dynare
pkgver=4.5.6
pkgrel=1
pkgdesc="A software platform for handling (economic) DSGE and OLG models."
arch=('x86_64')
url="http://www.dynare.org/"
license=('GPL')
depends=('octave' 'boost' 'blas' 'gsl' 'libmatio')
makedepends=('gcc-fortran')
optdepends=('texlive-core')
source=(http://www.dynare.org/release/source/${pkgname}-${pkgver}.tar.xz)
md5sums=('d5a5ffba55c8020afc36b91a30d403c5')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr # simple configuration (Octave)
  # /configure --with-matlab=/usr/local/MATLAB/R2018a MATLAB_VERSION=R2018a --enable-openmp # example MATLAB configuration
  make
  #make pdf # increases the number of dependencies
  make html
  make info
}

check() {
  cd "$srcdir/$pkgname-$pkgver"
  #make check # /*takes a long time!*/
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  }
