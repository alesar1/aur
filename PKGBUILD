# Maintainer: Christian Pfeiffer <cpfeiffer at live dot de>
pkgname=superlu_dist
pkgver=6.1.1
pkgrel=2
pkgdesc="Set of subroutines to solve a sparse linear system (MPI parallel version)"
arch=('x86_64')
url="https://github.com/xiaoyeli/superlu_dist"
license=('custom')
depends=('lapack' 'parmetis' 'combblas')
makedepends=('cmake' 'gcc-fortran')
source=(${url}/archive/v$pkgver.tar.gz)

sha512sums=('1071f76f799a856113401020e1dc14d370326554803d93bac3a0ee1ee6be5704f5a0e5a974f43a9c4cc1bbe950b492611ac8854f22730ed699f75d8f2ac3a1a8')
options=('staticlibs')

prepare() {
  mkdir -p build

  # CombBLAS uses C++14 in its headers. Otherwise the code won't build
  sed -i "s/set(CMAKE_CXX_STANDARD 11)/set(CMAKE_CXX_STANDARD 14)/" "$srcdir/$pkgname-$pkgver/CMakeLists.txt"
}

build() {
  cd build
  cmake ../$pkgname-$pkgver/ \
  	-DTPL_PARMETIS_INCLUDE_DIRS="/usr/include" \
  	-DTPL_PARMETIS_LIBRARIES="/usr/lib/libparmetis.so" \
  	-DTPL_ENABLE_COMBBLASLIB=ON \
  	-DTPL_COMBBLAS_INCLUDE_DIRS="/usr/include/CombBLAS;/usr/include/CombBLAS/BipartiteMatchings" \
  	-DTPL_COMBBLAS_LIBRARIES="/usr/lib/libCombBLAS.so" \
  	-DTPL_ENABLE_BLASLIB=OFF \
  	-DTPL_ENABLE_LAPACKLIB=ON \
  	-DBUILD_SHARED_LIBS=ON \
	-DCMAKE_BUILD_TYPE=Release \
  	-DCMAKE_INSTALL_LIBDIR=lib \
    -DCMAKE_INSTALL_INCLUDEDIR=include/superlu_dist \
  	-DCMAKE_INSTALL_PREFIX=/usr

  make
}

package() {
  cd build

  make DESTDIR="${pkgdir}" install

  mkdir -p $pkgdir/usr/share/doc/$pkgname \
           $pkgdir/usr/share/licenses/$pkgname

  install -m644 $srcdir/$pkgname-$pkgver/README.md $pkgdir/usr/share/doc/$pkgname
  install -m644 $srcdir/$pkgname-$pkgver/License.txt $pkgdir/usr/share/licenses/$pkgname
  install -m644 $srcdir/$pkgname-$pkgver/DOC/ug.pdf $pkgdir/usr/share/doc/$pkgname/ug.pdf
}

