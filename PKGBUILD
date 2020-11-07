# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=(python-detectron2 python-detectron2-cuda)
_pkgname=detectron2
pkgver=0.3
pkgrel=1
pkgdesc="FAIR's next-generation platform for object detection and segmentation"
arch=('x86_64')
url='https://github.com/facebookresearch/detectron2'
license=('Apache')
depends=(
  python-cloudpickle
  python-future
  python-fvcore
  python-matplotlib
  python-mock
  python-pillow
  python-pycocotools
  python-pydot
  python-tabulate
  python-termcolor
  python-tqdm
  python-yacs
  tensorboard
)
optdepends=('opencv')
makedepends=(
  cuda
  python-setuptools
  python-pytorch-cuda
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/facebookresearch/detectron2/archive/v${pkgver}.tar.gz")
sha256sums=('1a4d122c755e58779f251101c1a51bf54d58f3417548ffb8c262f669b4d1b651')

prepare() {
  cp -a "${_pkgname}-${pkgver}" "python-${_pkgname}-${pkgver}" 
  cp -a "${_pkgname}-${pkgver}" "python-${_pkgname}-cuda-${pkgver}" 
}

build() {
  cd "python-${_pkgname}-${pkgver}"
  python setup.py build

  cd "${srcdir}/python-${_pkgname}-cuda-${pkgver}"
  TORCH_CUDA_ARCH_LIST="5.2;5.3;6.0;6.0+PTX;6.1;6.1+PTX;6.2;6.2+PTX;7.0;7.0+PTX;7.2;7.2+PTX;7.5;7.5+PTX;8.0;8.0+PTX" \
  FORCE_CUDA=1 python setup.py build
}

package_python-detectron2() {
  depends+=(
    python-pytorch
  )
  cd "${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

package_python-detectron2-cuda() {
  pkgdesc="${pkgdesc} (with CUDA)"
  depends+=(
    cuda
    python-pytorch-cuda
  )
  cd "${pkgname}-${pkgver}"
  TORCH_CUDA_ARCH_LIST="5.2;5.3;6.0;6.0+PTX;6.1;6.1+PTX;6.2;6.2+PTX;7.0;7.0+PTX;7.2;7.2+PTX;7.5;7.5+PTX;8.0;8.0+PTX" \
  FORCE_CUDA=1 python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
# vim:set ts=2 sw=2 et:
