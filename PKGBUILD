# Maintainer:  Anton Kudelin <kudelin at protonmail dot com>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Eduardo Parra Mazuecos <eduparra90@gmail.com>

_pkgname=pyexcel
pkgname=python-$_pkgname
pkgver=0.6.7
pkgrel=1
pkgdesc="Single API for reading, manipulating and writing data in excel files"
arch=(any)
url="https://github.com/pyexcel/pyexcel"
license=('BSD')
makedepends=('python-setuptools')
depends=('python-texttable' 'python-pyexcel-io')
source=($pkgname-$pkgver.tar.gz::"$url/archive/v$pkgver.tar.gz")
sha256sums=('844ca1744ce221423d803188f0fc5d7097a21dcb0a776d3350cee9ebfd5979d9')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  export PYTHONHASHSEED=0
  python setup.py install --root="$pkgdir" -O1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
