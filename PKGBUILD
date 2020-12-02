# Maintainer: Anton Kudelin <kudelin at protonmail dot com>
# Contributor: Eduardo Parra Mazuecos <eduparra90@gmail.com>

_pkgname=lml
pkgname=python-$_pkgname
pkgver=0.1.0
pkgrel=1
pkgdesc="Load me later. A lazy loading plugin management system."
arch=('any')
url='https://github.com/python-lml/lml'
license=('BSD')
makedepends=('python-setuptools')
depends=('python')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('b68a79b25cca1cd8028a208a49ebb37093ccf142454832f773c915431db0b90a')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1
  install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
  install -m755 LICENSE "$pkgdir/usr/share/licenses/$pkgname"
}
