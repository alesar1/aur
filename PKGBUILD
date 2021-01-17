# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_account_stock_landed_cost_weight
_name=trytond_account_stock_landed_cost_weight
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module for landed cost per weight"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('b11a246fd2fedb578c0267fd71bfc0f58e641c4c9ab6225b82bbf764c404a927')
b2sums=('d697367f7e4896c7109c5dee63d5997240bc44a98af3bea477eeb6a76f54a74e2c556052fc37b5fce06adc5c4ba5efbe8f5cbb43bc7135d6947c8aec3fc032af')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
