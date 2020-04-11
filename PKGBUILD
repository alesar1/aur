pkgname=mingw-w64-suitesparse
pkgver=5.7.2
pkgrel=1
pkgdesc="A collection of sparse matrix libraries (mingw-w64)"
url="http://www.cise.ufl.edu/research/sparse/SuiteSparse/"
arch=('any')
depends=('mingw-w64-lapack' 'mingw-w64-metis')
makedepends=('mingw-w64-cmake' 'mingw-w64-make')
license=('GPL')
options=('!buildflags' '!strip' 'staticlibs')
source=("https://github.com/DrTimothyAldenDavis/SuiteSparse/archive/v${pkgver}.tar.gz" suitesparse-no-demo.patch)
sha256sums=('fe3bc7c3bd1efdfa5cffffb5cebf021ff024c83b5daf0ab445429d3d741bd3ad' SKIP)

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare () {
  cd "$srcdir"/SuiteSparse-${pkgver}

  # no demos
  patch -p1 -i "$srcdir"/suitesparse-no-demo.patch
  sed -i "s|default: all|default: library|g" */Makefile
  sed -i "s|all: C cov|all: library|g" */Makefile

  # undefined refs to gcov
  sed -i "s|SET(CMAKE_EXE_LINKER_FLAGS_DEBUG|#SET(CMAKE_EXE_LINKER_FLAGS_DEBUG|g" Mongoose/CMakeLists.txt
  sed -i "s|SET(CMAKE_CXX_FLAGS_DEBUG|#SET(CMAKE_CXX_FLAGS_DEBUG|g" Mongoose/CMakeLists.txt
  sed -i "s|SET(CMAKE_C_FLAGS_DEBUG|#SET(CMAKE_C_FLAGS_DEBUG|g" Mongoose/CMakeLists.txt

  # related to mingw
  curl -L https://raw.githubusercontent.com/msys2/MINGW-packages/master/mingw-w64-suitesparse/0001-mingw-w64-Use-a-not-lib-as-AR_TARGET-extension.patch | patch -p1
  curl -L https://raw.githubusercontent.com/msys2/MINGW-packages/master/mingw-w64-suitesparse/0002-mingw-w64-Set-SO_OPTS--shared-move-dlls-create-import-libs.patch | patch -p1
  curl -L https://raw.githubusercontent.com/msys2/MINGW-packages/master/mingw-w64-suitesparse/0004-mingw-w64-install-static-libs.patch | patch -p1

  # x86_64 conversion errors
  sed -i "s|nzmax = std::max(nzmax, 1L)|nzmax = std::max(nzmax, (csi)1)|g" Mongoose/Source/Mongoose_CSparse.cpp
  sed -i "s|Int M, N, nz;|long M, N, nz;|g" Mongoose/Source/Mongoose_IO.cpp
  sed -i "s|mm_read_mtx_crd_data(file, M, N, nz, I, J, val, matcode);|mm_read_mtx_crd_data(file, M, N, nz, (long*)I, (long*)J, val, matcode);|g" Mongoose/Source/Mongoose_IO.cpp
}

build() {
  cd "$srcdir"
  for _arch in ${_architectures}; do
    cp -r SuiteSparse-${pkgver} build-${_arch} && pushd build-${_arch}
    ${_arch}-make \
      UNAME=Windows BLAS="-llapack -lblas -lgfortran -lquadmath" \
      CHOLMOD_CONFIG='-DNPARTITION' \
      CMAKE_OPTIONS="-DCMAKE_INSTALL_PREFIX=\"/usr/${_arch}\" -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=\"/usr/share/mingw/toolchain-${_arch}.cmake\"" \
      MY_METIS_LIB="-lmetis" JOBS=2
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    install -dm755 "${pkgdir}"/usr/${_arch}/{bin,lib,include/suitesparse}
    cd "${srcdir}"/build-${_arch}
    ${_arch}-make install \
      UNAME=Windows BLAS="-llapack -lblas -lgfortran -lquadmath" \
      CHOLMOD_CONFIG='-DNPARTITION' \
      CMAKE_OPTIONS="-DCMAKE_INSTALL_PREFIX=\"/usr/${_arch}\" -DCMAKE_BUILD_TYPE=Release -DCMAKE_TOOLCHAIN_FILE=\"/usr/share/mingw/toolchain-${_arch}.cmake\"" \
      MY_METIS_LIB="-lmetis" \
      DESTDIR="${pkgdir}" INSTALL="${pkgdir}"/usr/${_arch}
    rm "${pkgdir}"/usr/${_arch}/bin/*.exe
    rm -rf "${pkgdir}"/usr/${_arch}/share
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
