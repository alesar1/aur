# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=cyvlfeat
pkgname=python-cyvlfeat
pkgver=0.6.0
pkgrel=3
pkgdesc='A thin Cython wrapper around select areas of vlfeat'
arch=('x86_64')
url='https://github.com/menpo/cyvlfeat/'
license=('BSD')
depends=(
  python-numpy
  python-scipy
  python-matplotlib
  vlfeat
)
makedepends=(
  cython
  python-setuptools
)
checkdepends=(
  python-pytest
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/menpo/cyvlfeat/archive/v${pkgver}.tar.gz")
sha512sums=('f7c325fbe4ec52e79e01ee20ccbaa61d2009a8cbae8795a0de49da21ac42dd942a7a53d4bf7bdc49e8e3bf63d12ac4f3794792477632fad010e2357fe6e29ce5')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build_ext --inplace
  python setup.py build
}

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  pytest -v
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "LICENSE.txt" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
