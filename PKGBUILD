# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=python-pyvisa-py
pkgver=0.5.2
pkgrel=1
pkgdesc="A pure python backend for PyVISA"
url="https://github.com/pyvisa/pyvisa-py"
arch=(any)
license=(MIT)
depends=(
python
python-pyvisa
python-pyserial
python-pyusb
)
makedepends=(
python-wheel
python-setuptools
python-setuptools-scm
python-pytest
)
conflicts=(python-pyvisa-py-git)
optdepends=('linux-gpib: gpib instrument support')

source=(${pkgname}-${pkgver}.tar.gz::https://github.com/pyvisa/pyvisa-py/archive/${pkgver}.tar.gz)
sha256sums=('5a39209acbcdb597b3bd8f997d484e193d91b5622cb691dd1f513d610317594c')

export SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver

prepare() {
  cd pyvisa-py-${pkgver}
}

build() {
  cd pyvisa-py-${pkgver}
  python setup.py build
}

check() {
  cd pyvisa-py-${pkgver}
  python -m pytest --pyargs pyvisa_py
}

package() {
  cd pyvisa-py-${pkgver}
  python setup.py install --skip-build --prefix=/usr --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
