# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-pytorch-lightning
_pkgname=lightning
pkgver=1.6.5
pkgrel=2
pkgdesc="The lightweight PyTorch wrapper for high-performance AI research"
arch=('any')
url='https://lightning.ai'
license=('Apache')
depends=(
  python-fsspec
  python-jsonargparse
  python-pandas
  python-pyaml
  python-pydeprecate
  python-numpy
  python-scikit-learn
  python-pytorch
  python-torchmetrics
  python-torchvision
  python-twine
  python-tqdm
  tensorboard
)
optdepends=(
  'python-apex: mixed precision support'    
  'python-horovod: for distributed training'
)
makedepends=(
  python-build
  python-installer
  python-wheel
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/Lightning-AI/lightning/archive/refs/tags/${pkgver}.tar.gz")
sha512sums=('e257dca3ac3ee82e2684501a91000cb26b735935b86dff3ff5ebe73b185be7809b8b13d1afae751b75a6107476ca0ca8848ef2aaa9d244b8ac8cc64971d0b946')

build() {
  cd "${_pkgname}-${pkgver}"
  python -m build --wheel --no-isolation
}

package() {
  cd "${_pkgname}-${pkgver}"
  python -m installer --destdir="${pkgdir}" dist/*.whl
}
# vim:set ts=2 sw=2 et:
