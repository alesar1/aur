# Maintainer: Greyson Christoforo <grey@christoforo.net>
# Contributor: Alex Forencich <alex@alexforencich.com>
pkgname=python-pyvisa
pkgver=1.11.3
pkgrel=2
pkgdesc="A Python package with bindings to the 'Virtual Instrument Software Architecture' VISA library"
arch=(any)
url="https://github.com/pyvisa/pyvisa"
license=('MIT')
depends=(
python
python-distribute
python-docutils
python-typing_extensions
)
optdepends=('python-pyvisa-py: Pure Python backend')
makedepends=(
python-setuptools
python-setuptools-scm
python-pytest
)
source=("${pkgname}=${pkgver}.tar.gz::https://github.com/pyvisa/pyvisa/archive/$pkgver.tar.gz")
sha256sums=('8f8a309050a784b518a04b1506a06d34c69c630ee553e8a88d9d89cea4fd318a')

export SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver

prepare() {
  cd pyvisa-${pkgver}
}

build() {
  cd pyvisa-${pkgver}
  python setup.py build
}

check(){
  cd pyvisa-${pkgver}
  PYTHONPATH="${srcdir}/pyvisa-${pkgver}" python -m pytest --pyargs pyvisa 
}

package(){
  cd pyvisa-${pkgver}
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

