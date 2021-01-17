# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_sale_supply_production
_name=trytond_sale_supply_production
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to supply sales from production"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('2a5f8523b9947cc96b0da70b14c0c2e09c09b4fd7c6ce209bd83e4ed5e79d9c6')
b2sums=('014359d3d4a5ccd709a3aebc59ef0723cda65a40073138e0280766d64096106e6810d9cb5203ea9ea33dd55e6326df87f8370f4b22de92231c46f550b755b5b4')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
