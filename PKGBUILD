# Maintainer: Timo Wilken <aur@twilken.net>
pkgname=alidistlint
pkgver=1.0.0
pkgrel=2
pkgdesc='A code linter for ALICE build recipes at CERN'
arch=(any)
url='https://github.com/TimoWilken/alidistlint'
license=(GPL3)
depends=(shellcheck yamllint python-yaml python-cerberus)
makedepends=(python-build python-installer python-wheel)
optdepends=()
source=("https://github.com/TimoWilken/$pkgname/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('6f1939ff0542020e2a3e26fc3750ffc209cd374f5b90aaed77b6d2aec83b1f22')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  python -m build --wheel --no-isolation
}

check() {
  cd "$srcdir/$pkgname-$pkgver"
  #python -m unittest discover tests
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl
}

# vim:set ts=2 sw=2 et:
