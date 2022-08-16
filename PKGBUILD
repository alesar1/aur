# Maintainer: David McInnis <dave@dave3.xyz>
# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=pyamg
pkgname=python-${_base}
pkgdesc="Algebraic Multigrid Solvers in Python"
_gitcommit=1fd1ef6915969ebd24cf16cf6b9532644e0e0e23
pkgver=4.2.3
pkgrel=2
arch=(x86_64)
url="https://github.com/${_base}/${_base}"
license=(MIT)
depends=(python-scipy python-pytest)
makedepends=(python-setuptools-scm pybind11 git) # python-matplotlib
source=("${_base}-${pkgver}::git+${url}.git?signed#commit=${_gitcommit}")
validpgpkeys=('4DDCC34E24417C71C667DC2850BBE7E24BA62FF7') # Luke Olson <luke.olson@gmail.com>
sha512sums=('SKIP')

# https://bbs.archlinux.org/viewtopic.php?id=249188
build() {
  cd ${_base}-${pkgver}
  python setup.py build
}

check() {
  local _pyversion=$(python -c "import sys; print(f'{sys.version_info.major}{sys.version_info.minor}')")
  PYTHONPATH="${srcdir}/${_base}-${pkgver}/build/lib.linux-${CARCH}-cpython-${_pyversion}:${PYTHONPATH}" python -c "import pyamg; pyamg.test()"
}

package() {
  cd ${_base}-${pkgver}
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE.txt -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
