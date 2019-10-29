# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-nvidia-dali
_pkgname=dali
pkgver=0.15.0
pkgrel=3
pkgdesc='A library containing both highly optimized building blocks and an execution engine for data pre-processing in deep learning applications'
arch=('x86_64')
url='https://github.com/NVIDIA/DALI'
license=('Apache')
depends=(
  'cuda'
  'libjpeg-turbo'
  'lmdb'
  'opencv'
  'protobuf'
)
opt_depends=(
  'python-tensorflow'
)
makedepends=(
  'clang'
  'cmake'
  'git'
  'python-setuptools'
  'python-tensorflow'
)
source=("${pkgname}::git+https://github.com/NVIDIA/DALI.git#tag=v${pkgver}")
sha512sums=('SKIP')

prepare() {
  cd "${srcdir}/${pkgname}"
  git submodule update --init --recursive

  # use clang
  export CC=clang
  export CXX=clang++
}

build() {
  mkdir "${srcdir}/${pkgname}/build"
  cd "${srcdir}/${pkgname}/build"
  cmake \
    -DCMAKE_BUILD_TYPE:String=Release \
    -DCMAKE_INSTALL_PREFIX:PATH=/usr \
    -DCMAKE_EXE_LINKER_FLAGS="$(pkg-config --libs protobuf)" \
    -DCMAKE_SHARED_LINKER_FLAGS="$(pkg-config --libs protobuf)" \
    -DCMAKE_SKIP_RPATH:BOOL=ON \
    -DProtobuf_INCLUDE_DIR='/usr/include' \
    -DProtobuf_LIBRARY='/usr/lib' \
    -DBUILD_LMDB:BOOL=ON \
    ..
  make
  cd 'dali/python'
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}/build"
  make DESTDIR="${pkgdir}" install
  cd 'dali/python'
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  # create softlink for libdali.so
  ln -s '/usr/lib/python3.7/site-packages/nvidia/dali/libdali.so' "${pkgdir}/usr/lib/libdali.so"
}
# vim:set ts=2 sw=2 et:

