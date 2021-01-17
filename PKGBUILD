# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_bank
_name=trytond_bank
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module with banks"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('30627245ffceee603b8e46630e21722a4106d306c58c4f467d388fccb605b093')
b2sums=('c225eda1df132868ea01d796f1dfdd24521ecc0bc995667dd14a6e829b2496492cd801c0d6fd9a1298b337f72b0d9e8a63c6a4ed7b4ed8108bf3ee19a67329b2')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
