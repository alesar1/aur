# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=pylibjpeg
pkgname=python-pylibjpeg
pkgver=1.4.0
pkgrel=1
pkgdesc='A Python framework for decoding JPEG images, with a focus on supporting pydicom'
arch=(any)
url='https://github.com/pydicom/pylibjpeg'
license=(MIT)
depends=(
  python-pylibjpeg-openjpeg
)
makedepends=(
  python-setuptools
)
checkdepends=(
  python-pytest
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/pydicom/pylibjpeg/archive/v${pkgver}.tar.gz")
sha512sums=('316649c6caca151b92a2e3b7ffc9dcf87591ec8d9b4395ac1752bbd877181e732b6897c38c6866403c6556440fc834f3b99881a988b3466a55b124b3e13f0a08')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "LICENCE.txt" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
