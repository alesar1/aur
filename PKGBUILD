# Contributor: jellysheep <max.mail@dameweb.de>

pkgname=mingw-w64-eigen
pkgver=3.2.10
pkgrel=1
pkgdesc="Lightweight C++ template library for vector and matrix math, a.k.a. linear algebra. (mingw-w64)"
arch=('any')
url='http://eigen.tuxfamily.org'
license=('MPL2')
makedepends=('mingw-w64-cmake')
options=('!strip' '!buildflags' 'staticlibs')
source=("http://bitbucket.org/eigen/eigen/get/${pkgver}.tar.bz2"
        'eigen-3.2_gcc58087.patch')
sha1sums=('a85bb68c82988648c3d53ba9768d7dcbcfe105f8'
          '1930d287bf60afb8d2900dbab2e21d7e1dd9f0f7')
provides=('mingw-w64-eigen3')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cd "$srcdir"/eigen-eigen-*
  patch -p1 -i "$srcdir"/eigen-3.2_gcc58087.patch
}

build() {
  cd "$srcdir"/eigen-eigen-*
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/eigen-eigen-*/build-${_arch}
    make install DESTDIR="$pkgdir"
  done
}

