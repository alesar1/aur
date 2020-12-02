# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=mmaction2
pkgname=python-mmaction2
pkgver=0.9.0
pkgrel=2
pkgdesc="OpenMMLab's Next Generation Action Understanding Toolbox and Benchmark"
arch=('any')
url='https://github.com/open-mmlab/mmaction2'
license=('Apache')
depends=(
  opencv
  python-matplotlib
  python-mmcv
  python-numpy
  python-pillow
  python-pytorch
  python-torchvision
)
makedepends=(
  python-setuptools
)
optdepends=(
  python-av
  python-onnx
  python-onnxruntime
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/open-mmlab/mmaction2/archive/v${pkgver}.tar.gz")
sha512sums=('9aa92cc0c564475574d5188ec1649ab5db7d74784fdde11b080670ff859888d447940cc9770353d1ce3f2d12d1a30257d578d288800be8bd41f94eb57967e6d8')

prepare() {
  cd "${_pkgname}-${pkgver}"
  # uncomment this line to relax mmcv version requirement
  # sed -i '10,13d' "mmaction/__init__.py"
}

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
# vim:set ts=2 sw=2 et:
