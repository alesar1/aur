# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=cyvlfeat
pkgname=python-cyvlfeat
pkgver=0.5.1
pkgrel=1
pkgdesc='A thin Cython wrapper around select areas of vlfeat'
arch=('x86_64')
url='https://github.com/menpo/cyvlfeat/'
license=('BSD')
depends=(
  python-numpy
  vlfeat
)
makedepends=(
  cython
  python-setuptools
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/menpo/cyvlfeat/archive/v${pkgver}.tar.gz")
sha512sums=('f995d06cc5fd0f248efc88e42a181a2019c99b0049d30670d1d49c0cc80dde347b4af36dff20274de7250910ee4b376636ca2ef0527090ae77f01911781dd4da')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "LICENSE.txt" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
