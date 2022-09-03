# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=tiptop
pkgname=${_base}-cli
pkgdesc="Command-line system monitoring"
pkgver=0.2.8
pkgrel=1
arch=(any)
url="https://github.com/nschloe/${_base}"
license=(MIT)
depends=(python-py-cpuinfo python-distro python-psutil python-textual)
makedepends=(python-setuptools)
checkdepends=(python-pytest-codeblocks)
provides=(${_base})
conflicts=(${_base})
source=(${_base}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz)
sha512sums=('6347c1a838de1aaaa836b98488d765ac1ebcc6df3507ad9f5b116b1fafb95d31dae42d0346911b7b19fd866530a736cda1a548a30b53cd873932e07e229569dc')

build() {
  cd ${_base}-${pkgver}
  python -c "from setuptools import setup; setup();" build
}

check() {
  cd ${_base}-${pkgver}
  python -c "from setuptools import setup; setup();" install --root="${PWD}/tmp_install" --optimize=1 --skip-build
  PATH="${PWD}/tmp_install/usr/bin:$PATH" PYTHONPATH="${PWD}/tmp_install$(python -c "import site; print(site.getsitepackages()[0])"):${PYTHONPATH}" python -m pytest --codeblocks
}

package() {
  cd ${_base}-${pkgver}
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -c "from setuptools import setup; setup();" install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
