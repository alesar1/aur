# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_purchase
_name=trytond_purchase
pkgver=5.6.0
_pkgdir=5.6
pkgrel=1
pkgbase=$_name
pkgdesc="Tryton module for purchase"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('7fdcd194f8c47c0be336500870611e8813be2b122f416512d6e453cc21ecd27e')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
