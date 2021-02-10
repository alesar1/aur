pkgname=cminpack
pkgver=1.3.8
pkgrel=1
pkgdesc="A C/C++ rewrite of the MINPACK software"
arch=('x86_64')
url='http://devernay.free.fr/hacks/cminpack/cminpack.html'
license=('BSD')
depends=('cblas')
makedepends=('cmake')
source=("https://github.com/devernay/cminpack/archive/v${pkgver}.tar.gz")
sha256sums=('3ea7257914ad55eabc43a997b323ba0dfee0a9b010d648b6d5b0c96425102d0e')

prepare() {
  cd $srcdir/cminpack-${pkgver}
}

build() {
  cd $srcdir/cminpack-${pkgver}
  mkdir -p build && pushd build
  cmake -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMINPACK_LIB_INSTALL_DIR=lib \
    -DBUILD_SHARED_LIBS=ON -DBUILD_EXAMPLES=OFF -DCMINPACK_PRECISION=d ..
  make
}

package() {
  cd $srcdir/cminpack-${pkgver}/build
  make install DESTDIR="${pkgdir}"
}
