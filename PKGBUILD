# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_sale_subscription_asset
_name=trytond_sale_subscription_asset
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="A module to handle asset in the sale subscriptions"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('622ca7b117dff30eec0e8b326788eab004577c2e4903efad4e3246ad726109e6')
b2sums=('44307c1385e9a71ec398e4fd6f88b4fcea682c78eb8b592f2310d0142b2e584d880c8f35d0081e7c9e518c32b1bb80336631368a71786845b078cebc8dc5ea69')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
