# Maintainer: Hu Butui <hot123tea123@gmail.com>
# Contributor: Chih-Hsuan Yen <yan12125@archlinux.org>

_pkgname=onnxconverter-common
pkgname=python-onnxconverter-common
pkgver=1.13.0
pkgrel=1
pkgdesc='Common utilities for ONNX converters'
arch=('any')
url='https://github.com/microsoft/onnxconverter-common'
license=('MIT')
depends=(
  python-numpy
  python-onnx
  python-protobuf
)
makedepends=(
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/microsoft/onnxconverter-common/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('78fa4fbc9eb180d31caad30e383489375d5b1796f369b62ac48ee1b7feb00faf')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
