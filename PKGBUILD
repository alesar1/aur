# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=PhiK
pkgname=python-phik
pkgver=0.12.2
pkgrel=2
pkgdesc='Phi_K correlation analyzer library'
arch=('x86_64')
url='https://github.com/kaveio/phik'
license=('Apache')
depends=(
  python-joblib
  python-matplotlib
  python-numpy
  python-pandas
  python-scipy
)
checkdepends=(
  jupyter-nbconvert
  python-jupyter_client
  python-pytest
  python-pytest-pylint
)
makedepends=(
  cmake
  pybind11
  python-build
  python-installer
  python-scikit-build
  python-wheel
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/KaveIO/PhiK/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('b310cb84eb8947807911856c7bf9968f111b5fba8e7f60116ab6dfc038418755a015c80f6049dc6e138126fbe80ecf413b00f9b26d8d75a02669b83098757f29')

get_pyver() {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

build() {
  cd "${_pkgname}-${pkgver}"
  CMAKE_GENERATOR="Unix Makefiles" \
  python -m build --wheel --no-isolation --skip-dependency-check
}

check() {
  cd "${_pkgname}-${pkgver}"
  PYTHONPATH="${PWD}/_skbuild/linux-${CARCH}-$(get_pyver)/cmake-install" pytest -v
}

package() {
  cd "${_pkgname}-${pkgver}"
  python -m installer --destdir="$pkgdir" dist/*.whl
  # delete unneeded files
  rm -vf "${pkgdir}/usr/CMakeLists.txt"
  rm -vf "${pkgdir}/usr/LICENSE"
  rm -vf "${pkgdir}/usr/NOTICE"
  rm -vf "${pkgdir}/usr/README.rst"
  rm -vf "${pkgdir}/usr/pyproject.toml"
  rm -vf "${pkgdir}/usr/setup.py"
}
# vim:set ts=2 sw=2 et:
