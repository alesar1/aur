# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_sale_supply_drop_shipment
_name=trytond_sale_supply_drop_shipment
pkgver=5.6.0
_pkgdir=5.6
pkgrel=1
pkgbase=python-$_name
pkgdesc=""
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('b57f7edcc4858e6c06431023951775c376c8affabc930705bb6c15f71c5e160b')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
