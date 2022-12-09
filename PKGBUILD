# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=PhiK
pkgname=python-phik
pkgver=0.12.3
pkgrel=1
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
sha512sums=('ab56b640542ffdf67fe91c65f580e07a591cc1c28c1d071d9bf76acee911eb79e0671882242af83250607775154b69539dcdaa7c7dae49715cc7a827191e9fdd')

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
