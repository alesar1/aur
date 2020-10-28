pkgname=mingw-w64-pybind11
pkgver=2.6.0
pkgrel=1
pkgdesc='A lightweight header-only library that exposes C++ types in Python and vice versa (mingw-w64)'
arch=('any')
url='https://pybind11.readthedocs.org/'
license=('BSD')
depends=('mingw-w64-crt')
makedepends=('mingw-w64-cmake' 'mingw-w64-boost' 'mingw-w64-eigen')
options=('!buildflags' '!strip' 'staticlibs')
source=("https://github.com/pybind/pybind11/archive/v${pkgver}.tar.gz")
sha256sums=('90b705137b69ee3b5fc655eaca66d0dc9862ea1759226f7ccd3098425ae69571')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/pybind11-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake -DPYBIND11_NOPYTHON=ON -DBUILD_TESTING=OFF ..
    make
    popd
  done
}

package() {
  for _arch in $_architectures; do
    cd "$srcdir"/pybind11-${pkgver}/build-${_arch}
    make install DESTDIR="$pkgdir"
  done
}
