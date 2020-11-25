# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=pymodm
pkgname=python-pymodm
pkgver=0.4.3
pkgrel=1
pkgdesc='A Pythonic, object-oriented interface for working with MongoDB'
arch=('any')
url='https://github.com/mongodb/pymodm'
license=('Apache')
depends=(
  python-pymongo
)
makedepends=(
  python-setuptools
)
checkdepends=(
  python-pytest
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/mongodb/pymodm/archive/${pkgver}.tar.gz")
sha512sums=('d79ee3c1087dea9670faa715fa2ce1a1d4b1f156293e153d6a374b84dcdbdb6eae048653d599323499add4f1c7fb5cfb8671c9f8bfe927822051d6fc59e45dd2')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${_pkgname}-${pkgver}"
  pytest -v
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
# vim:set ts=2 sw=2 et:
