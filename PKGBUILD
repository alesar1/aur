# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_currency
_name=trytond_currency
pkgver=5.2.0
_pkgdir=5.2
pkgrel=1
pkgdesc="Tryton module with currencies"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('bc7a823eef93c36ff424712fce46d8fafe8c1d0894e393e4db78537a8f1d94b8')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
