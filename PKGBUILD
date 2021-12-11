# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Contributor: Pavel Merzlyakov <pavel.merzlyakov@gmail.com>
_base=allure
pkgname=python-${_base}-commons
pkgver=2.9.45
pkgrel=1
pkgdesc="Common module for integrate allure with python-based frameworks"
arch=('any')
url="https://github.com/${_base}-framework/${_base}-python"
depends=(python-pluggy python-six python-attrs)
makedepends=(python-setuptools-scm git)
source=("git+${url}.git#tag=${pkgver}")
sha512sums=('SKIP')

build() {
  cd "${_base}-python/${_base}-python-commons"
  python setup.py build
}

package() {
  cd "${_base}-python/${_base}-python-commons"
  export PYTHONHASHSEED=0
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
}
