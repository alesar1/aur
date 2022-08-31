# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=mmsegmentation
pkgname=python-mmsegmentation
pkgver=1.0.0rc0
pkgrel=1
pkgdesc='OpenMMLab Semantic Segmentation Toolbox and Benchmark'
arch=('any')
url='https://github.com/open-mmlab/mmsegmentation'
license=('Apache')
depends=(
  python-matplotlib
  python-mmclassification
  python-mmcv
  python-numpy
  python-prettytable
)
makedepends=(
  python-setuptools
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/open-mmlab/mmsegmentation/archive/v${pkgver}.tar.gz")
sha512sums=('c560283337dce976a56e5901cf9a00ffdac3ea06a6bc4569ef423343ff350808b41a86df479faef47e91fcb3c38a347a79db9d896945cc7400eebfe7ae76b569')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  # remove unneeded files
  rm -rf "${pkgdir}${site_packages}/tests"
}
# vim:set ts=2 sw=2 et:
