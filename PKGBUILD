# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-fastai
_pkgname=fastai
pkgver=1.0.61
pkgrel=1
pkgdesc='Deep learning library build on PyTorch'
arch=('any')
url='https://github.com/fastai/fastai'
license=('BSD')
depends=(
  python-beautifulsoup4
  python-bottleneck
  python-fastprogress
  python-matplotlib
  python-numexpr
  python-numpy
  python-nvidia-ml-py3
  python-packaging
  python-pandas
  python-pillow
  python-pyaml
  python-pytorch
  python-scikit-image
  python-scipy
  python-torchvision
)
makedepends=(
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/fastai/fastai/archive/${pkgver}.tar.gz")
sha512sums=('aa9210a5b0a310d48e0aea69217a24d4b8ecdab1ab596de0cbcf10ce1acf71fdf1cae74bf0703fb77b2c6f31b85b341ed0d9a637760e5d5080bd5ad0f466def7')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
