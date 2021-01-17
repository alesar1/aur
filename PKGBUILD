# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_sale_stock_quantity
_name=trytond_sale_stock_quantity
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to add stock warning on sale"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('45bfa3103f9de9ab14e800a8bee135dbaede86c60a738c19fc27f962c071a6e0')
b2sums=('88ab3bf9282efaf597e1163119472980314cb6f2e45f41caf892b451be2536e3bb2b70de2f04c814f62b46a897ddbbd89937b14ec9f1a8abfe68bbca1211a9f1')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
