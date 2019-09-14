# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>

_name=alice-vision
#_fragment="#commit=eebc3e4f"
_fragment="#branch=develop"
pkgname=${_name}-git
pkgver=2.2.0.r17.g63a3d6ad
pkgrel=2
pkgdesc="Photogrammetric Computer Vision Framework which provides a 3D Reconstruction and Camera Tracking algorithms"
arch=('i686' 'x86_64')
url="https://alicevision.github.io/"
license=('MPL2' 'MIT')
groups=()
conflicts=(alice-vision)
provides=(alice-vision)
depends=('openblas-lapack' 'gflags' 'glfw-x11' 'alembic' 'boost-libs' 'openexr' 'openimageio' 'opengv-git' 'flann' 'coin-or-coinutils' 'coin-or-clp' 'coin-or-lemon' 'coin-or-osi' 'google-glog')
makedepends=('boost' 'doxygen' 'python-sphinx' 'eigen' 'ceres-solver' 'cuda' 'git' 'cmake' 'magma')
source=("${pkgname}::git+https://github.com/alicevision/AliceVision.git${_fragment}"
        "ute_lib::git+https://github.com/alicevision/uncertaintyTE.git"
        "geogram::git+https://github.com/alicevision/geogram.git"
        "submodule.patch"
        )
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'eb62c8be5a0d7ce537a928314c9d0028'
        )

_CMAKE_FLAGS=(
              -DCMAKE_INSTALL_PREFIX=/usr
              -DCMAKE_INSTALL_LIBDIR=lib
              -DEIGEN_INCLUDE_DIR_HINTS=/usr/include/eigen3
              -DFLANN_INCLUDE_DIR_HINTS=/usr/include/flann
              -DCOINUTILS_INCLUDE_DIR_HINTS=/usr/include/coin
              -DLEMON_INCLUDE_DIR_HINTS=/usr/include/lemon
              -DCLP_INCLUDE_DIR_HINTS=/usr/include/coin
              -DOSI_INCLUDE_DIR_HINTS=/usr/include/coin
              -DCERES_DIR=/usr/include/ceres
              -DMAGMA_ROOT=/usr
              -DCUDA_HOST_COMPILER=/opt/cuda/bin/gcc
             )


pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ${srcdir}/${pkgname}
  git submodule init
#  git config submodule.src/dependencies/MeshSDFilter.url ${srcdir}/MeshSDFilter
#  git config submodule.src/dependencies/nanoflann.url
#  git config submodule.src/dependencies/osi_clp.url
  git submodule update
  git apply ${srcdir}/submodule.patch
# fix doc build
  sed -i '/^ *install.*doc/s/doc/htmlDoc/' src/CMakeLists.txt
}


build() {
  cd ${srcdir}

  msg2 "Build uncertaintyTE library"
  mkdir -p ute_build && cd ute_build
  cmake -DCMAKE_INSTALL_PREFIX=/ -DMAGMA_ROOT=/usr ../ute_lib 
  make
  make DESTDIR="../ute_bin" install
  cd ..

  msg2 "Build geogram library"
  mkdir -p geogram_build && cd geogram_build
  cmake -DCMAKE_INSTALL_PREFIX=/ -DGEOGRAM_LIB_ONLY=ON -DGEOGRAM_USE_SYSTEM_GLFW3=ON -DCMAKE_BUILD_TYPE:STRING=Debug -DVORPALINE_PLATFORM:STRING=Linux64-gcc-dynamic ../geogram
  make 
  make DESTDIR="../geogram_bin" install
  cd ..

  msg2 "Build AliceVision library"
  mkdir -p build && cd build
  cmake ${_CMAKE_FLAGS[@]} -DUNCERTAINTYTE_DIR=${srcdir}/ute_bin -DGEOGRAM_INSTALL_PREFIX=${srcdir}/geogram_bin ../${pkgname}
  make
}


package() {
  msg2 "Install uncertaintyTE"
  cd ${srcdir}/ute_build
  make DESTDIR=${pkgdir}/usr install

  msg2 "Install geogram"
  cd ${srcdir}/geogram_build
  make DESTDIR=${pkgdir}/usr install

  cd ${srcdir}/build
  make DESTDIR=${pkgdir} install
  
  #fix conflict with openmvg
  rm ${pkgdir}/usr/lib/libvlsift.a
}
# vim:set ts=2 sw=2 et:
