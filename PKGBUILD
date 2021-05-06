# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=pylibjpeg-rle
pkgname=python-pylibjpeg-rle
pkgver=1.1.0
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
sha512sums=('01f975f5ba1deb21236fe7ae51d022989171eb87c89ceb7cfc53f445834cacbc1c8f3965b07b3d0036ac1403cecd1f388b102a52506caa3c9f1d4a632031328c')

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
