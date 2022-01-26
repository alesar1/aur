# Maintainer: Luis Martinez <luis at martinez at disroot dot org>
# Contributor: Caltlgin Stsodaat <contact@fossdaily.xyz>

pkgname=jello
pkgver=1.5.2
pkgrel=2
pkgdesc='Filter JSON and JSON Lines data with Python syntax'
arch=('any')
url='https://github.com/kellyjonbrazil/jello'
license=('MIT')
depends=('python-pygments')
makedepends=('python-setuptools')
changelog=CHANGELOG
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('b0089fe46001bf022674dd281ead641aa68bcffdb972aa784703e2717a60331e')

prepare() {
  cd "$pkgname-$pkgver"
  ## setup.py installs man page to site-package directory; we don't want that
  sed -i '/include_package_data/s/True/False/' setup.py
}

build() {
  cd "$pkgname-$pkgver"
  python setup.py build
}

check() {
  cd "$pkgname-$pkgver"
  python -m unittest
}

package() {
  export PYTHONHASHSEED=0
  cd "$pkgname-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 README.md ADVANCED_USAGE.md -t "$pkgdir/usr/share/doc/$pkgname"
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  install -Dm644 man/jello.1 -t "$pkgdir/usr/share/man/man1/"
}

# vim: ts=2 sw=2 et:
