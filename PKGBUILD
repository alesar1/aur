# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=PhiK
pkgname=python-phik
pkgver=0.11.2
pkgrel=1
pkgdesc='Phi_K correlation analyzer library'
arch=('any')
url='https://github.com/kaveio/phik'
license=('Apache')
depends=(
  python-numpy
  python-scipy
  python-pandas
  python-matplotlib
  python-joblib
)
checkdepends=(
  python-pytest
  python-pytest-pylint
  jupyter-nbconvert
  python-jupyter_client
)
makedepends=(
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/KaveIO/PhiK/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('ffc7a34773c108290549d789dc9a0ce8714083f4e3e341a79006aa58eae1e23a9af1968b80b3c3a747b9793a6e099e49fecd020df09f2962d2463985f604583e')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${_pkgname}-${pkgver}"
  PYTHONPATH=${PWD}/build/lib pytest -v
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
# vim:set ts=2 sw=2 et:
