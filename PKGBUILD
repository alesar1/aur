# Maintainer: Roberto Hueso < robertohueso96 at gmail dot com >
# Former Maintainer: jerry73204 <jerry73204@gmail.com>
# Former Maintainer: Govind Gopakumar < govind.93 at gmail dot com>
# Former Maintainer: Daniel Wallace <danielwallace at gtmanfred dot com>
pkgname=mlpack
pkgver=3.2.1
pkgrel=3
pkgdesc='A fast, flexible, scalable C++ machine learning library'
arch=('x86_64')
url="https://mlpack.org/"
license=('BSD')
depends=(
  'armadillo>=8.400.0'
  'boost>=1.49'
  'lapack'
  'ensmallen>=2.10.0'
  'libxml2>=2.6.0'
  'cython>=0.24'
  'python-numpy'
  'python-pandas>=0.15.0'
)

optdepends=(
  'openmp: parallel computation support'
)

makedepends=(
  'cmake>=3.3.2'
  'txt2man'
  'python-setuptools'
)
source=("https://www.mlpack.org/files/${pkgname}-${pkgver}.tar.gz")
sha256sums=('3fa25157a0a6e91fd5ba223ebd911e5d86c0664d969ea3f7768d823448562f36')
options=(!emptydirs)

prepare() {
  cd "${pkgname}-${pkgver}"
  mkdir -p build
}

build() {
  cd "${pkgname}-${pkgver}/build"

  cmake \
      -D CMAKE_INSTALL_PREFIX="/usr" \
      -D BUILD_PYTHON_BINDINGS=ON \
      -D BUILD_TESTS=OFF \
      -D USE_OPENMP=ON \
      ..
  make
}

package() {
  cd "${pkgname}-${pkgver}/build"

  make DESTDIR="$pkgdir" install

  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 ../LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}"
}
