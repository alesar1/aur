# Maintainer: Hao Zhang <theivorytower [at] gmail [dot] com>

pkgname=python-quantlib
_pkgname=QuantLib-SWIG
pkgver=1.11
pkgrel=1
pkgdesc="A Python binding for QuantLib."
arch=("i686" "x86_64")
url="http://quantlib.org"
license=("BSD")
options=(!libtool)
depends=("quantlib>=1.11" "python")
makedepends=("make"  "gcc")
source=(http://downloads.sourceforge.net/project/quantlib/QuantLib/$pkgver/other%20languages/$_pkgname-$pkgver.tar.gz)
md5sums=("958fcd92ba1fb2bb967ba915ae7b2782")

build() {
  cd "$srcdir"/"$_pkgname-$pkgver"/
  ./configure --prefix=/usr
  make -C Python
}

package() {
  cd "$srcdir"/"$_pkgname-$pkgver"/
  sed -i "s#setup.py install#setup.py install --root=\"${pkgdir}\"#g" Python/Makefile
  make  -C Python install
}
