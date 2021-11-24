# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-unet
_pkgname=unet
pkgver=0.7.8
pkgrel=1
pkgdesc='PyTorch Implementation of 2D and 3D U-Net'
arch=(any)
url='https://github.com/fepegar/unet'
license=(MIT)
depends=(
  python-pytorch
)
makedepends=(
  python-setuptools
)
checkdepends=(
  python-pytest
)

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/fepegar/unet/archive/v${pkgver}.tar.gz")
sha512sums=('da862009639f41d0e637a972c3b3b53b12478458bd6afd4ebb6f2ea0f25b89dedf463892952f6fec18d41f39e664093eeb41622bf164a9f8e81b4b53a025834b')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${_pkgname}-${pkgver}"
  pytest -v .
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
