# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=NiaAML
pkgname=python-${_base,,}
pkgver=1.1.11
pkgrel=1
pkgdesc="Python automated machine learning framework"
url="https://github.com/lukapecnik/${_base}"
arch=(any)
license=(MIT)
depends=(python-niapy python-scikit-learn)
makedepends=(python-build python-install python-poetry-core)
checkdepends=(python-pytest)
source=(${_base}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz)
sha512sums=('6513879a1843be932f271ad3a1d6bd92736a7d7c2e3dbd37c543f6c49563c10281ffeba2e2133dbb182cb68a68287a8bb61ba508a756ef094858ffb0c5e96aa9')

build() {
  cd ${_base}-${pkgver}
  python -m build --wheel --skip-dependency-check --no-isolation
}

check() {
  cd ${_base}-${pkgver}
  python -m pytest
}

package() {
  cd ${_base}-${pkgver}
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -m install --optimize=1 --destdir="${pkgdir}" dist/*.whl
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
