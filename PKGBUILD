# Maintainer: Wüstengecko <1579756+Wuestengecko@users.noreply.github.com>
pkgname=python-datauri
_name=${pkgname}
pkgver=1.0.0
pkgrel=1
pkgdesc="A li'l class for data URI manipulation in Python"
arch=(any)
url="https://github.com/fcurella/python-datauri"
license=('Unlicense')
depends=(python)
makedepends=(python-setuptools)
options=(!strip)
source=("$_name-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('82e53259cef2394268cb5b8e91453b48b68321d8473c32c6f903092e1b5c966f')

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

check() {
  cd "$_name-$pkgver"
  python -m unittest
}

package() {
  cd "$_name-$pkgver"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  PYTHONHASHSEED=0 python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  rm -rf "$pkgdir"/usr/lib/python*/site-packages/tests
}
