# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_product_price_list
_name=trytond_product_price_list
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module with price list"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('91124d2dd99dd49debb08fd76e9ecc15804d6d07be11d6b1f0143c58ca396f2a')
b2sums=('ab8d9927fda98470199dbb6557f72a79f8b62a8ec4ed78f46f2ab3e7f5f721be5a62695545e19c7930b446423d189ec6ced841eeb3a5151b5ae49d73f1d27e20')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
