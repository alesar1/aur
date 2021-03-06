#  Maintainer: Blair Bonnett <blair.bonnett@gmail.com>
# Contributor: Maikel Wever <maikelwever@gmail.com>

pkgname=python-numpy-stl
pkgver=2.15.1
pkgrel=2
pkgdesc="Library to make working with STL files (and 3D objects in general) fast and easy"
url="https://github.com/WoLpH/numpy-stl/"
license=('BSD')
depends=('python' 'python-numpy' 'python-utils')
makedepends=('cython' 'python-setuptools')
checkdepends=('python-pytest' 'python-pytest-cov' 'python-pytest-flake8')
source=("numpy-stl-v${pkgver}-2.tar.gz::https://github.com/WoLpH/numpy-stl/archive/v${pkgver}.tar.gz")
sha256sums=('ab64a7a06c28bd47a1db1768cb2b1b486b383d5e07daad6e3ee555ab22485419')
arch=('x86_64')

build() {
  cd "$srcdir/numpy-stl-$pkgver"
  python setup.py build
}

check() {
  cd "$srcdir/numpy-stl-$pkgver"
  local python_version=$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
  PYTHONPATH="$PWD/build/lib.linux-$CARCH-${python_version}" pytest \
    -vv tests --cov-fail-under=50 \
    -k "not test_use_with_qt_with_custom_locale_decimal_delimeter"
}

package() {
  cd "$srcdir/numpy-stl-$pkgver"
  python setup.py install --root="$pkgdir/" --prefix=/usr --skip-build --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
