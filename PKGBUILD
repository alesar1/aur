# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=huggingface_hub
pkgname=python-huggingface-hub
pkgver=0.1.2
pkgrel=1
pkgdesc='All the open source things related to the Hugging Face Hub'
arch=('any')
url='https://github.com/huggingface/huggingface_hub'
license=('Apache')
depends=(
  python-filelock
  python-requests
  python-tqdm
  python-yaml
  python-typing_extensions
  python-packaging
)
makedepends=(
  python-setuptools
)

source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/huggingface/huggingface_hub/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('f227623ddf94889f58d3abbe5112d7cf99788f3ec1aa2ac6a871e5b63c1d7e7809174e713029b99ccfe797bfc2b353bf42a4060f3a3a45256966c9023473f736')

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
