#!/hint/bash
# shellcheck disable=SC2034
# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>
# Contributor: pingplug <pingplug@foxmail.com>
# Contributor: cornholio <vigo.the.unholy.carpathian@gmail.com>

##### Configuration Options
# Specify GPU compute capability Fermi (2.x) or Kepler (3.x) or Maxwell (5.x)
#_GPU_TARGET=Fermi
#_GPU_TARGET=Kepler
#_GPU_TARGET=Maxwell
#_GPU_TARGET=Pascal
#_GPU_TARGET=Volta
# Can also be one of these: sm_20 sm_30 sm_50 sm_60 sm_70 etc.
#_GPU_TARGET=sm_30
##### End

pkgname=magma
pkgver=2.5.1
pkgrel=1
pkgdesc="Provides a dense linear algebra library similar to LAPACK but for heterogeneous/hybrid architectures, starting with current 'Multicore+GPU' systems (with CUDA)"
arch=('x86_64')
url="https://icl.cs.utk.edu/magma/"
license=('custom')
depends=('blas' 'lapack')
checkdepends=('python')
makedepends=('gcc-fortran' 'cmake' 'cuda')

options=('staticlibs')
source=("http://icl.cs.utk.edu/projectsfiles/${pkgname}/downloads/${pkgname}-${pkgver}.tar.gz")
sha256sums=('ce32c199131515336b30c92a907effe0c441ebc5c5bdb255e4b06b2508de109f')

_CMAKE_FLAGS=( -DCMAKE_BUILD_TYPE=Release
               -DCMAKE_INSTALL_PREFIX=/opt/magma )

[ -n "${_GPU_TARGET}" ]                   && _CMAKE_FLAGS+=(-DGPU_TARGET=${_GPU_TARGET})
[ -f "/usr/lib/ccache/bin/nvcc-ccache" ]  && _CMAKE_FLAGS+=( -DCUDA_NVCC_EXECUTABLE=/usr/lib/ccache/bin/nvcc-ccache )

if _cuda_gcc=$(basename $(readlink /opt/cuda/bin/gcc)) ; then
  [ -L "/usr/lib/ccache/bin/$_cuda_gcc" ] && _CMAKE_FLAGS+=( -DCUDA_HOST_COMPILER=/usr/lib/ccache/bin/$_cuda_gcc )
fi

build() {
  cd "${srcdir}/magma-${pkgver}"

    msg2 "Build dynmic ${pkgname} library"
    mkdir build-shared && pushd build-shared
    cmake ${_CMAKE_FLAGS[@]} -DBUILD_SHARED_LIBS:BOOL=ON ..
    make magma magma_sparse
    popd

    msg2 "Build static ${pkgname} library"
    mkdir build-static && pushd build-static
    cmake ${_CMAKE_FLAGS[@]} -DBUILD_SHARED_LIBS:BOOL=OFF ..
    make magma magma_sparse
    popd
}

package() {
  for dir in ${srcdir}/magma-${pkgver}/build-*; do
    pushd "$dir"
    # do not build test
    sed -i "s/install: preinstall/install: magma_sparse/g" Makefile
    make DESTDIR="${pkgdir}" install
    popd
  done

  mkdir -p ${pkgdir}/opt/magma/example
  cp -ru ${srcdir}/magma-${pkgver}/example/* ${pkgdir}/opt/magma/example/
  mkdir -p ${pkgdir}/opt/magma/testing
  cp -ru ${srcdir}/magma-${pkgver}/testing/* ${pkgdir}/opt/magma/testing/
  rm -rf ${pkgdir}/opt/magma/lib/pkgconfig
  mkdir -p ${pkgdir}/usr/share/licenses/magma
  cp ${srcdir}/magma-${pkgver}/COPYRIGHT ${pkgdir}/usr/share/licenses/magma/LICENSE
}

# vim:set ts=2 sw=2 et:
