pkgname=mingw-w64-spectra
pkgver=1.0.1
pkgrel=1
pkgdesc="A header-only C++ library for large scale eigenvalue problems (mingw-w64)"
license=('MPL2')
arch=('any')
url="https://spectralib.org/"
depends=('mingw-w64-eigen')
makedepends=('mingw-w64-cmake')
options=('!buildflags' '!strip' 'staticlibs')
source=("https://github.com/yixuan/spectra/archive/v${pkgver}.tar.gz")
sha256sums=('919e3fbc8c539a321fd5a0766966922b7637cc52eb50a969241a997c733789f3')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}"/spectra-$pkgver
    mkdir build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake ..
    make install DESTDIR="$pkgdir"
  done
}

