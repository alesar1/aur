# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>

pkgname=python2-pytest-localserver
_pkgname=pytest-localserver
pkgver=0.3.4
pkgrel=1
pkgdesc='pytest plugin to test server connections locally.'
arch=('i686' 'x86_64')
url="https://pypi.python.org/pypi/$_pkgname"
license=('MIT')
depends=('python2-pytest')
source=("https://pypi.python.org/packages/source/p/${_pkgname}/${_pkgname}-${pkgver}.zip")
md5sums=('f233e9701798e1d6430c4f8a67c8a8b3')

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py install --prefix=/usr --root="$pkgdir"
}
