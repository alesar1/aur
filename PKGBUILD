# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=ruptures
pkgname=python-ruptures
pkgver=1.1.6
pkgrel=1
pkgdesc='Change point detection in Python'
arch=('x86_64')
url='https://github.com/deepcharles/ruptures'
license=('BSD')
depends=(
  python-scipy
)
makedepends=(
  cython
  python-build
  python-installer
  python-setuptools
  python-setuptools-scm
  python-wheel
)
checkdepends=(
  python-pytest
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/deepcharles/ruptures/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('907ae94f55c1aefc43c99f8c7a316e30701062884dc60b86d68a64f30974b881ba6b3ae13a78daf13178de509448a66213065e8e91c030e78b1c9e7d6f225300')

get_pyver() {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

build() {
  cd "${_pkgname}-${pkgver}"
  SETUPTOOLS_SCM_PRETEND_VERSION=${pkgver} \
  python -m build --wheel --no-isolation --skip-dependency-check
}

check() {
  cd "${_pkgname}-${pkgver}"
  PYTHONPATH="${PWD}/build/lib.linux-${CARCH}-$(get_pyver)" pytest -v
}

package() {
  cd "${_pkgname}-${pkgver}"
  python -m installer --destdir="$pkgdir" dist/*.whl
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
