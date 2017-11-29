# Maintainer: Andrew Anderson <aanderso@tcd.ie>

pkgname=mkl-dnn
pkgver=0.10
pkgrel=1

epoch=
pkgdesc="Intel® Math Kernel Library for Deep Neural Networks"
arch=( 'x86_64' )
url="https://github.com/01org/mkl-dnn"
license=('APACHE')
groups=()
depends=()
makedepends=( 'git' 'cmake>=2.8' 'doxygen>=1.8.5' )
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+https://github.com/01org/mkl-dnn.git")
sha1sums=('SKIP')

build() {
  cd "${srcdir}/mkl-dnn"
  git checkout v0.10
  cd scripts && ./prepare_mkl.sh && cd -
  mkdir -p build && cd build && cmake -DCMAKE_INSTALL_PREFIX="${pkgdir}"/usr .. && make doc mkldnn
  mkdir -p /usr/include/mkldnn/include/
  cp -r external/mkl*/include/* /usr/include/mkldnn/include/
  mkdir -p /usr/lib/mkldnn/lib/
  cp -r external/mkl*/lib/* /usr/include/mkldnn/lib/
}

#check() {}

package() {
  cd "${srcdir}/mkl-dnn/build"
  make install
}
