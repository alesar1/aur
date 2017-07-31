# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

pkgname='python-pyarrow'
pkgver=0.5.0
pkgrel=1
pkgdesc="A columnar in-memory analytics layer for big data."
arch=('i686' 'x86_64')
url="https://arrow.apache.org"
license=('Apache')
depends=('arrow' 'jemalloc' 'parquet-cpp')
checkdepends=('python-pytest')
optdepends=()
makedepends=('cmake' 'cython')
source=("https://github.com/apache/arrow/archive/apache-arrow-$pkgver.tar.gz")
sha256sums=('eeb036e152a28289c3ab248d846901524a3e715771c4c460c30015317db59b7c')

build(){
  cd "$srcdir/arrow-apache-arrow-$pkgver/python"
  ARROW_HOME=/usr PARQUET_HOME=/usr \
    python setup.py build_ext --build-type=release \
    --with-parquet --inplace
}

package(){
  cd "$srcdir/arrow-apache-arrow-$pkgver/python"
  ARROW_HOME=/usr PARQUET_HOME=/usr \
  python setup.py build_ext --build-type=release \
  --with-parquet install --root=$pkgdir
}

check(){
  cd "$srcdir/arrow-apache-arrow-$pkgver/python"
  py.test
}
# vim:ts=2:sw=2:et:
