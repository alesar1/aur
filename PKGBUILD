# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Maintainer: PumpkinCheshire <me at pumpkincheshire dot top>
_base=scipyx
pkgname=python-${_base}
pkgdesc="SciPy fixes and extensions"
pkgver=0.0.17
pkgrel=1
arch=('x86_64')
url="https://github.com/nschloe/${_base}"
license=(BSD)
depends=(python-scipy)
makedepends=(python-setuptools)
checkdepends=(python-pytest-codeblocks)
source=(${url}/archive/${pkgver}.tar.gz)
sha512sums=('805538dbccb2111f64b948282027c2a4083a1c4d722427081fe669f6e58dbdb436e065ee3e11d913ae065e1d9b7fbc32cf88a406e88ae9d1a4f0069e2985bf65')

build() {
  cd "${_base}-${pkgver}"
  python -c "from setuptools import setup; setup();" build
}

check() {
  cd "${_base}-${pkgver}"
  python -c "from setuptools import setup; setup();" install --root="${PWD}/tmp_install" --optimize=1 --skip-build
  PYTHONPATH="${PWD}/tmp_install$(python -c "import site; print(site.getsitepackages()[0])"):${PYTHONPATH}" python -m pytest --codeblocks
}

package() {
  cd "${_base}-${pkgver}"
  export PYTHONHASHSEED=0
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -c "from setuptools import setup; setup();" install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
