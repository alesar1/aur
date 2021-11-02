# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=codepy
pkgname=python-${_base}
pkgdesc="Generate and execute native code at run time, from Python"
pkgver=2019.1
pkgrel=1
arch=('x86_64')
url="https://documen.tician.de/${_base}"
license=(MIT)
depends=(python-cgen boost)
makedepends=(python-setuptools git)
checkdepends=(python-pytest)
source=("git+https://github.com/inducer/${_base}.git?signed#tag=v${pkgver}")
validpgpkeys=("900A958D9A0ACA58B1468F2471AA298BCA171145") # Andreas Kloeckner
sha512sums=('SKIP')

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
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
