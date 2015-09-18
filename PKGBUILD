# Maintainer: Daniel Müllner <daniel@danifold.net>

# Remove the --enable-openmp flag below if you do not want parallelization.

pkgname=python2-graph-tool
pkgver=2.5
pkgrel=1
pkgdesc='A Python module for manipulation and statistical analysis of graphs'
arch=('i686' 'x86_64')
url='http://projects.skewed.de/graph-tool/'
license=(GPL3)
depends=(boost python2 expat python2-scipy python2-numpy cgal)
makedepends=(sparsehash python2-cairo)
optdepends=('graphviz: graph layout'
'cairomm: graph drawing'
'python2-cairo: graph drawing'
'python2-matplotlib: graph drawing')
options=(!libtool)
source=("http://downloads.skewed.de/graph-tool/graph-tool-$pkgver.tar.bz2")
sha256sums=('aa1a964de6237c0620f2ec5e9a38e389a756b58211270b8836216ad817f96bec')

prepare() {
  cd "$srcdir/graph-tool-$pkgver"
  ./configure --enable-openmp --prefix=/usr --docdir="/usr/share/doc/$pkgname" PYTHON=python2
  # Remove information about the source directory, which is temporary.
  sed -i 's|#define PACKAGE_SOURCE_DIR ".*"|/* removed since the source directory is temporary */|' config.h
}

build() {
  cd "$srcdir/graph-tool-$pkgver"
  make
}

check() {
  cd "$srcdir/graph-tool-$pkgver"
  make check
}

package() {
  cd "$srcdir/graph-tool-$pkgver"
  make DESTDIR="$pkgdir/" install
}
