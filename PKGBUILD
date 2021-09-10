# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=genpy
pkgname=python-${_base}
pkgdesc="AST for Python code generation, in Python"
pkgver=2021.1
pkgrel=1
arch=('x86_64')
url="https://documen.tician.de/${_base}"
license=(MIT)
depends=(python-pytools)
makedepends=(python-setuptools git)
checkdepends=(python-pytest)
source=("git+https://github.com/inducer/${_base}.git?signed#tag=v${pkgver}")
validpgpkeys=("900A958D9A0ACA58B1468F2471AA298BCA171145") # Andreas Kloeckner
sha512sums=('SKIP')

export PYTHONPYCACHEPREFIX="${BUILDDIR}/${pkgname}/.cache/cpython/"

build() {
  cd "${_base}"
  python setup.py build
}

check() {
  cd "${_base}"
  PYTHONPATH="$PWD/build/lib/${_base}/" python -m pytest
}

package() {
  cd "${_base}"
  export PYTHONHASHSEED=0
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
