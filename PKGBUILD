# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_currency
_name=trytond_currency
pkgver=5.6.0
_pkgdir=5.6
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module with currencies"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('c8d487cdb32474da1485fa6b61e82bdb4819b7722947b78b9f573ab56eb7def4')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
