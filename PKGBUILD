pkgname=mingw-w64-eigen
pkgver=3.3.9
pkgrel=1
pkgdesc="Lightweight C++ template library for vector and matrix math, a.k.a. linear algebra. (mingw-w64)"
arch=('any')
url='http://eigen.tuxfamily.org'
license=('MPL2')
depends=('mingw-w64-crt')
makedepends=('mingw-w64-cmake')
options=('!strip' '!buildflags' 'staticlibs')
source=("https://gitlab.com/libeigen/eigen/-/archive/${pkgver}/eigen-${pkgver}.tar.bz2"
        'eigen-3.2_gcc58087.patch')
sha256sums=('0fa5cafe78f66d2b501b43016858070d52ba47bd9b1016b0165a7b8e04675677'
            'f9471414bc39a19a0a5cd81a1ff65515e2bece3802348cf1f7309215f66ce35a')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cd "$srcdir"/eigen-${pkgver}
  patch -p1 -i "$srcdir"/eigen-3.2_gcc58087.patch
}

build() {
  cd "$srcdir"/eigen-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake -DINCLUDE_INSTALL_DIR:PATH="include/eigen3" ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/eigen-${pkgver}/build-${_arch}
    make install DESTDIR="$pkgdir"
  done
}

