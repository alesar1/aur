# Maintainer: Christian Pfeiffer <cpfeiffer at live dot de>
pkgname=superlu_dist
pkgver=6.1.1
pkgrel=1
pkgdesc="Set of subroutines to solve a sparse linear system (MPI parallel version)"
arch=('x86_64')
url="http://crd-legacy.lbl.gov/~xiaoye/SuperLU/"
license=('custom')
depends=('lapack' 'parmetis' 'combblas')
makedepends=('cmake' 'gcc-fortran')
source=(${url}${pkgname}_$pkgver.tar.gz ${url}License.txt
        ${url}ug.pdf)

sha512sums=('a91ec7557d213541b964ab7ee52ceb7c8908487d4266c6bb920fbba822ae7060dbc40dee86dfb5bafb46f4a8be7fa21ff5b5a06ac1db7e4ce981f873dfa0ee56'
            '10d4e497b4cc3aa2aaa2807e75641f9c0046f38876587adda33202546b7218a5d77843742e43ceca917726be0b985e7364b924e40d7377efafeba27bbbb5b7de'
            '19f8c8609f6c6d77c657756695c40da0dd0554a511b7090d8d17566e0d770c32e7f2d087530cc51aae80042e6068b0182a01ddaed6a7a086a77e087459b271e2')
options=('staticlibs')

prepare() {
  mkdir build

  # CombBLAS uses C++14 in its headers. Otherwise the code won't build
  sed -i "s/set(CMAKE_CXX_STANDARD 11)/set(CMAKE_CXX_STANDARD 14)/" "${srcdir}/SuperLU_DIST_${pkgver}/CMakeLists.txt"
}

build() {
  cd build
  cmake ../SuperLU_DIST_${pkgver}/ \
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

  install -m644 $srcdir/ug.pdf $pkgdir/usr/share/doc/$pkgname/ug.pdf
  install -m644 $srcdir/License.txt $pkgdir/usr/share/licenses/$pkgname
}

