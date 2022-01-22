# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=pylibjpeg-rle
pkgname=python-pylibjpeg-rle
pkgver=1.3.0
pkgrel=1
pkgdesc='Fast DICOM RLE plugin for pylibjpeg'
arch=('x86_64')
url='https://github.com/pydicom/pylibjpeg-rle'
license=(MIT)
depends=(
  python-numpy
)
makedepends=(
  python-pip
  python-wheel
  python-setuptools
  python-setuptools-rust
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/pydicom/pylibjpeg-rle/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('cb24d00e9a24b0d9afd483e514ef42a42226f1c7c0d9bf24c615336c6d5d4f1052ca13e6be9f3510868de5ad5b74ec7b0ce13f524858c21c65f86868ebcc30ba')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py bdist_wheel
}

package() {
  cd "${_pkgname}-${pkgver}"
  PIP_CONFIG_FILE=/dev/null pip install --isolated --root="${pkgdir}" --ignore-installed --no-deps dist/*.whl
  python -O -m compileall "${pkgdir}/usr/lib"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
