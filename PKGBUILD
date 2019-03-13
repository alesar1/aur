# Contributor: Alex Zose <alexander[dot]zosimidis[at]gmail[dot]com>
# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>

_name=pyzbar
pkgname=python-$_name
pkgver=0.1.8
pkgrel=2
pkgdesc="A ctypes-based wrapper around the zbar barcode reader"
arch=('any')
license=('MIT')
url="https://github.com/NaturalHistoryMuseum/$_name/"
depends=('python-pillow' 'zbar')
makedepends=('python-setuptools')
source=("$_name-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('f51c82c2864f8e5a8d44f55853e027f8cbc592324b7afffa62100f2f9c54cbdb')

build() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  install -Dm644 CHANGELOG.md  "$pkgdir/usr/share/doc/$pkgname/CHANGELOG.md"
  install -Dm644 DEVELOPING.md "$pkgdir/usr/share/doc/$pkgname/DEVELOPING.md"
  install -Dm644 README.rst    "$pkgdir/usr/share/doc/$pkgname/README.rst"
  install -Dm644 LICENSE.txt   "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}
