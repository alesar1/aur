# Maintainer: Hao Zhang <hao [at] hao-zhang [dot] com>

pkgname=python-quantlib
_pkgname=QuantLib-SWIG
pkgver=1.24
pkgrel=1
pkgdesc="A Python binding for QuantLib."
arch=("x86_64")
url="http://quantlib.org"
license=("BSD")
options=(!libtool)
depends=("quantlib>=1.24" "python")
makedepends=("clang" "boost")
source=(https://github.com/lballabio/$_pkgname/releases/download/$_pkgname-v$pkgver/$_pkgname-$pkgver.tar.gz)
sha256sums=("b04f85965bf3f890ef91eb2f826c64c27bd974078edca376013b497410605a4d")

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  sed -i "s#boost::dynamic_pointer_cast#ext::dynamic_pointer_cast#g" Python/QuantLib/quantlib_wrap.cpp
  ./configure --prefix=/usr CC=clang CXX=clang++
  make -C Python
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  sed -i "s#setup.py install#setup.py install --root=\"${pkgdir}\"#g" Python/Makefile
  make -C Python install
}
