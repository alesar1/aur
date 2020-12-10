pkgname=cminpack
pkgver=1.3.7
pkgrel=1
pkgdesc="A C/C++ rewrite of the MINPACK software"
arch=('x86_64')
url='http://devernay.free.fr/hacks/cminpack/cminpack.html'
license=('BSD')
depends=('cblas')
makedepends=('cmake')
source=("https://github.com/devernay/cminpack/archive/v${pkgver}.tar.gz")
sha256sums=('b891f33ffcfb8b246bb6147a4da6308cdb2386ca42a99892ff9b2e884f8b0386')

prepare() {
  cd $srcdir/cminpack-${pkgver}
  curl -L https://github.com/devernay/cminpack/pull/44.patch | patch -p1
}

build() {
  cd $srcdir/cminpack-${pkgver}
  mkdir -p build && pushd build
  cmake -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMINPACK_LIB_INSTALL_DIR=lib \
    -DBUILD_SHARED_LIBS=ON -DBUILD_EXAMPLES=OFF ..
  make
}

package() {
  cd $srcdir/cminpack-${pkgver}/build
  make install DESTDIR="${pkgdir}"
}
