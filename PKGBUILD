# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=freefem++-hg
pkgver=3.54.r4145.a208347e48e7
pkgrel=1
pkgdesc='A PDE oriented language using the finite element method (Mercurial)'
arch=('i686' 'x86_64')
url="http://www.freefem.org/ff++/index.htm"
license=('LGPL')
depends=('fftw' 'freeglut' 'glu' 'suitesparse' 'hdf5-cpp-fortran' 'gsl' 'openmpi' 'openblas-lapack' 'arpack' 'parmetis' 'python')
makedepends=('mercurial' 'flex-git' 'texlive-core')
provides=("freefem++=$_pkgver")
conflicts=('freefem++')
backup=('etc/freefem++.pref')
source=('hg+http://www.freefem.org/ff++/ff++/')
sha256sums=('SKIP')
options=('!makeflags')

pkgver() {
  cd "$srcdir/ff++"
  _pkgver=$(awk -F, '/AC_INIT/ {print $2}' configure.ac)
  printf "${_pkgver}.r%s.%s" $(hg identify -n|sed 's/+//') $(hg identify -i|sed 's/+//')
}

prepare() {
  cd "$srcdir/ff++/download"
  sed -i 's+e0af74476935c9ff6d971df8bb6b82fc+0a5b38af0016f009409a9606d2f1b555+' getall
}

build() {
  cd "$srcdir/ff++"
  autoreconf -i 
  perl download/getall -a
  ./configure CC=mpicc CXX=mpic++ FC=mpifort \
	      --enable-download --enable-m64 --sysconfdir=/etc \
	      --with-mpi --prefix=/usr 
  
  ./configure CC=mpicc CXX=mpic++ FC=mpifort \
	      CXXFLAGS=" -std=c++11" \
    --prefix=/usr \
    --sysconfdir=/etc \
    --enable-download \
    --with-mpi 
  make 
}

#check() {
#  cd "$srcdir/ff++"
#  make check || true
#}

package() {
  cd "$srcdir/ff++"
  make -d DESTDIR="$pkgdir" install||true
  install -Dm644 examples++/freefem++.pref $pkgdir/etc/freefem++.pref
  find $pkgdir/usr/lib/ff++/ -name "*.h" -exec chmod o+r {} \;
  # remove unneeded files
  rm -f $pkgdir/usr/share/freefem++/${_pkgver}/INSTALL*
  rm -f $pkgdir/usr/share/freefem++/${_pkgver}/README_*
  rm -f $pkgdir/usr/share/freefem++/${_pkgver}/mode-mi-edp.zip
  rm -rf $pkgdir/usr/share/freefem++/${_pkgver}/download
}
