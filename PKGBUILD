# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=einops
pkgname=python-einops
pkgver=0.4.1
pkgrel=1
pkgdesc='Deep learning operations reinvented (for pytorch, tensorflow, jax and others)'
arch=('any')
url='https://github.com/arogozhnikov/einops'
license=('MIT')
depends=(
  python
)
makedepends=(
  python-setuptools
)

source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/arogozhnikov/einops/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('21a414b0c673ef02bf182ec3469e465c65c8ca73c52de50a444ae4e2842287798bcd67e989f4f0c0f3185fa4038dfeb549625a0d822c63b3f9b46756b406a272')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
