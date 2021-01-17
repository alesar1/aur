# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_stock_product_location
_name=trytond_stock_product_location
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to add default location on product"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('194f05637dd5d0886b05f8849411bf0aad13cd7b04497545b3c564694a78d388')
b2sums=('60c753c84b84a49b73f46d56a1d9e9085b6d6ea7826e41838a2a5b76656e641e5e764ddc4f3b71f123f44cb76b60ce39de3fc0d9982567f2e87439f76bf31327')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
