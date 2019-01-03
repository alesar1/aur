# Contributor: Guillaume DOLLÉ <dolle.guillaume at gmail.com>
# Contributor: George Eleftheriou <eleftg>

pkgname='feelpp'
pkgver=0.106.0_beta.2
pkgrel=1
pkgdesc="Finite Element Embedded Language and Library in C++"
arch=('i686' 'x86_64')
url="https://github.com/feelpp"
license=('LGPL')
depends=('cln' 'mumps' 'slepc' 'gmsh' 'fftw' 'ann' 'libbson' 'glpk' 'gsl' 'python' 'ginac')
makedepends=('cmake' 'python2')
source=("https://github.com/feelpp/feelpp/releases/download/v${pkgver}/feelpp-${pkgver}.tar.gz")
source=(https://github.com/feelpp/feelpp/archive/v${pkgver/_/-}.tar.gz)
sha256sums=('f95c3c0c10fccb3f95ad9b0279580e7422bd8ef4a0b8339417cdb67415b10fa5')

prepare() {
  cd $pkgbase-${pkgver/_/-}

  # https://github.com/feelpp/feelpp/issues/1247: boost 1.68 support
  curl -L https://github.com/feelpp/feelpp/commit/f5951158541f664a31d7e8b2d460f3bde7d26e51.patch | patch -p1
  curl -L https://github.com/feelpp/feelpp/commit/a10192595eea7895dfc0d9faabff48b8086b6cf7.patch | patch -p1
  curl -L https://github.com/feelpp/feelpp/commit/d0df2512cb56c838e2a27bc6721b63395ada5a21.patch | patch -p1
  curl -L https://github.com/feelpp/feelpp/pull/1251.patch | patch -p1

  # git submodules not included in tarball
  test -f feelpp/contrib/pybind11/CMakeLists.txt || git clone https://github.com/feelpp/pybind11.git feelpp/contrib/pybind11
  test -f feelpp/contrib/nlopt/CMakeLists.txt || git clone https://github.com/feelpp/nlopt.git feelpp/contrib/nlopt

  # error: no template named 'unordered_set' in namespace 'std'
  sed -i "40i#include <unordered_set>" feelpp/feel/feelmesh/filters.hpp
}

build() {
  cd $pkgbase-${pkgver/_/-}
  mkdir -p build && cd build
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DCMAKE_C_COMPILER=/usr/bin/clang \
    -DCMAKE_CXX_COMPILER=/usr/bin/clang++ \
    -DPETSC_DIR=/opt/petsc/linux-c-opt/ \
    -DFEELPP_MINIMAL_CONFIGURATION=ON \
    -DFEELPP_MINIMAL_BUILD=ON \
    -DFEELPP_ENABLE_QUICKSTART=OFF \
    -DFEELPP_ENABLE_PYFEELPP_LIBFEELPP=OFF \
    -DBUILD_GUILE=OFF -DBUILD_PYTHON=OFF \
    ..
  # templates take a lot of ram
  make -j1
}

package() {
  cd $pkgbase-${pkgver/_/-}/build
  make DESTDIR="$pkgdir/" install
  rm "$pkgdir"/usr/bin/{gflags_completions.sh,ginsh}
}

