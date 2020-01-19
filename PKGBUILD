# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>
# shellcheck disable=SC2034,SC2164 # mask unused variable warning, mask cd without fallback warning.

_name=alice-vision
#_fragment="#commit=eebc3e4f"
_fragment="#branch=develop"
pkgname=${_name}-git
pkgver=2.2.0.r299.gbb78c6e0a
pkgrel=1
pkgdesc="Photogrammetric Computer Vision Framework which provides a 3D Reconstruction and Camera Tracking algorithms"
arch=('i686' 'x86_64')
url="https://alicevision.github.io/"
license=('MPL2' 'MIT')
groups=()
conflicts=("${_name}" geogram uncertainty-framework)
provides=("${_name}" geogram uncertainty-framework)


depends=('alembic' 'boost-libs' 'openimageio' 'flann' 'opengv' 'coin-or-clp' 'google-glog')
depends+=('glu' 'glfw-x11') # geogram deps.
depends+=('magma' 'ceres-solver') # uncertaintyTE deps.
makedepends=('ninja' 'boost' 'eigen' 'freetype2' 'gflags' 'doxygen' 'python-sphinx' 'coin-or-coinutils' 'coin-or-lemon' 'git' 'cmake')
source=("${pkgname}::git+https://github.com/alicevision/AliceVision.git${_fragment}"
        "ute_lib::git+https://github.com/alicevision/uncertaintyTE.git"
        "geogram::git+https://github.com/alicevision/geogram.git"
        "submodule.patch"
        )
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'eb62c8be5a0d7ce537a928314c9d0028')

# shellcheck disable=SC2191 # mask \= warning.
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
  cd "${pkgname}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
# shellcheck disable=SC2154 # mask $srcdir missing assignment.
  cd "${srcdir}/${pkgname}"
  git submodule init
#  git config submodule.src/dependencies/MeshSDFilter.url ${srcdir}/MeshSDFilter
#  git config submodule.src/dependencies/nanoflann.url
#  git config submodule.src/dependencies/osi_clp.url
  git submodule update
  git apply "${srcdir}/submodule.patch"
# fix doc build
  sed -i '/^ *install.*doc/s/doc/htmlDoc/' src/CMakeLists.txt
}


build() {
  msg2 "Build uncertaintyTE library"
  mkdir -p ute_build
  cmake -DCMAKE_INSTALL_PREFIX=/ -DMAGMA_ROOT=/usr -G Ninja -S ute_lib -B ute_build
# shellcheck disable=SC2030,SC2031,SC2046 # ninja call won't work with shell substitution in quotes.
  ninja $([ -v MAKEFLAGS ] || echo -j1) -C ute_build
  DESTDIR="${srcdir}/ute_bin" ninja install -C ute_build install

  msg2 "Build geogram library"
  mkdir -p geogram_build
  cmake -DCMAKE_INSTALL_PREFIX=/ -DGEOGRAM_LIB_ONLY=ON -DGEOGRAM_USE_SYSTEM_GLFW3=ON -DCMAKE_BUILD_TYPE:STRING=Release -DVORPALINE_PLATFORM:STRING=Linux64-gcc-dynamic -G Ninja -S geogram -B geogram_build
# shellcheck disable=SC2030,SC2031,SC2046 # ninja call won't work with shell substitution in quotes.
  ninja $([ -v MAKEFLAGS ] || echo -j1) -C geogram_build
  DESTDIR="${srcdir}/geogram_bin" ninja -C geogram_build install

  msg2 "Build AliceVision library"
  mkdir -p build
  cmake "${_CMAKE_FLAGS[@]}" -DGEOGRAM_INSTALL_PREFIX="${srcdir}/geogram_bin" -DUNCERTAINTYTE_DIR="${srcdir}/ute_bin" -G Ninja -S ${pkgname} -B build
# shellcheck disable=SC2030,SC2031,SC2046 # ninja call won't work with shell substitution in quotes.
  ninja $([ -v MAKEFLAGS ] || echo -j1) -C build
}


package() {
  msg2 "Install uncertaintyTE"
# shellcheck disable=SC2154 # mask $pkgdir missing assignment.
  DESTDIR="${pkgdir}/usr" ninja -C ute_build install

  msg2 "Install geogram"
  DESTDIR="${pkgdir}/usr" ninja -C geogram_build install

  msg2 "Install Alice-Vision"
  DESTDIR="${pkgdir}" ninja -C build install
  
  #fix conflict with openmvg
  rm "${pkgdir}"/usr/lib/libvlsift.a

# install custom licenses.
  cd "${pkgdir}"/usr/share
  install -dm755 licenses/${pkgname}/
  mv aliceVision/LICENSE-{MPL2,MIT-libmv}.md licenses/${pkgname}

# prune empty dirs
  cd "${pkgdir}"/usr
  find . -type d | tac | xargs rmdir 2>/dev/null || true
}
# vim:set ts=2 sw=2 et:
