# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Maintainer: Gianluca Pettinello <g_pet at hotmail dot com>
# Contributor: Christian Pfeiffer <cpfeiffer at live dot de>
pkgname=superlu_dist
pkgver=8.1.0
pkgrel=1
pkgdesc="Distributed memory, MPI based SuperLU"
arch=('x86_64')
url="https://github.com/xiaoyeli/${pkgname}"
license=('custom')
depends=(lapack parmetis) # openblas combblas
makedepends=(cmake)       # gcc-fortran ninja
source=(${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz)
sha512sums=('4c7fc7e4649282755cff018fa37413161224e9a35a471c4e64c09e439f4397d196fb4e7976edc6ca030867c1b61d88d91cb1505be522a1588c7b4de4a813a625')
options=('staticlibs')

# -DTPL_ENABLE_COMBBLASLIB=ON \
# -DTPL_COMBBLAS_INCLUDE_DIRS="/usr/include/CombBLAS;/usr/include/CombBLAS/Applications/BipartiteMatchings" \
# -DTPL_COMBBLAS_LIBRARIES="/usr/lib/libCombBLAS.so" \
# -DCMAKE_Fortran_COMPILER=mpifort \

build() {
  cmake \
    -S ${pkgname}-${pkgver} \
    -B build \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -Denable_examples=OFF \
    -DBUILD_SHARED_LIBS=ON \
    -DCMAKE_CXX_STANDARD=14 \
    -DCMAKE_C_COMPILER=mpicc \
    -DCMAKE_CXX_COMPILER=mpicxx \
    -DXSDK_ENABLE_Fortran=OFF \
    -Denable_doc=OFF \
    -Denable_single=ON \
    -Denable_double=ON \
    -DTPL_PARMETIS_INCLUDE_DIRS="/usr/include" \
    -DTPL_PARMETIS_LIBRARIES="/usr/lib/libparmetis.so" \
    -DTPL_BLAS_LIBRARIES="/usr/lib/libblas.so" \
    -DTPL_LAPACK_LIBRARIES="/usr/lib/liblapack.so" \
    -DTPL_ENABLE_LAPACKLIB=ON \
    -DTPL_ENABLE_PARMETISLIB=ON \
    -DTPL_ENABLE_COMBBLASLIB=OFF \
    -DTPL_ENABLE_CUDALIB=OFF \
    -DTPL_ENABLE_HIPLIB=OFF \
    -DTPL_ENABLE_INTERNAL_BLASLIB=OFF \
    -DCMAKE_INSTALL_INCLUDEDIR=include/superlu_dist \
    -Wno-dev
  cmake --build build --target all
}

package() {
  DESTDIR="${pkgdir}" cmake --build build --target install
  install -Dm644 ${pkgname}-${pkgver}/README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 ${pkgname}-${pkgver}/License.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 ${pkgname}-${pkgver}/DOC/ug.pdf "${pkgdir}/usr/share/doc/${pkgname}/ug.pdf"
}
