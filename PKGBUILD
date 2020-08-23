# Maintainer: Anton Kudelin <kudelin at protonmail dot com>

pkgname=elpa
PkgName=ELPA
pkgver=2020.05.001
pkgrel=1
arch=('x86_64')
pkgdesc="Eigenvalue SoLvers for Petaflop-Applications"
url="https://elpa.mpcdf.mpg.de/html/Releases"
license=("LGPL3")
depends=('scalapack')
makedepends=('gcc-fortran' 'python' 'vim')
provides=('elpa')
source=("$url/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('66ff1cf332ce1c82075dc7b5587ae72511d2bcb3a45322c94af6b01996439ce5')

prepare() {
  export CC=mpicc
  export FC=mpifort
  unset CFLAGS
  unset FCFLAGS
  unset LDFLAGS
  
  # Detecting AVX compatibility
  _AVXCOMP=$( gcc -march=native -dM -E - < /dev/null \
      | egrep "AVX" | sort | tail -n 1 | awk -F'_' '{print $3}' )
  case $_AVXCOMP in
      AVX512*)
          _AVX=yes
          _AVX2=yes
          _AVX512=yes
          echo "Full vectorization is enabled"
          ;;
      AVX2)
          _AVX=yes
          _AVX2=yes
          _AVX512=no
          echo "Improved vectorization is enabled"
          ;;
      AVX)
          _AVX=yes
          _AVX2=no
          _AVX512=no
          echo "Basic vectorization is enabled"
          ;;
      *)
          _AVX=no
          _AVX2=no
          _AVX512=no
          echo "No vectorization is enabled"
          ;;
  esac
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
   ./configure --prefix=/usr                        \
               --enable-openmp                      \
               --enable-avx=$_AVX                   \
               --enable-avx2=$_AVX2                 \
               --enable-avx512=$_AVX512             \
               CFLAGS="-O3 -march=native"           \
               FCFLAGS="-O3 -march=native"          \
               LIBS='-lblas -llapack -lscalapack'   
  
  # As of 2020.05.01 parallel builds are still broken
  make -j1
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
