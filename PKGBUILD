# Maintainer: Eric Berquist <eric dot berquist at gmail dot com>

_name="QCElemental"
_pkgname="qcelemental"
pkgname="python-${_pkgname}"
pkgver=0.11.1
pkgrel=1
pkgdesc=" Periodic table, physical constants, and molecule parsing for quantum chemistry"
arch=("any")
url="https://qcelemental-docs.helpmanual.io/"
license=("MIT")
depends=("python-numpy" "python-pint" "python-pydantic")
makedepends=("python-setuptools")
optdepends=("python-networkx")
checkdepends=("python-pytest-cov")
source=("https://github.com/MolSSI/${_pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('90bf265ebafbf648221fc283ae8546625d516cadfe5840d969c48ed4d20ae037')

build() {
  cd "${srcdir}"/"${_name}"-"${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}"/ --optimize=1 --skip-build
  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE
}

check() {
  cd "${srcdir}/${_name}-${pkgver}"
  pytest -v --cov=${_pkgname}/ ${_pkgname}/
}
