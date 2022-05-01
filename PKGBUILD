# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=xtcocoapi
pkgname=python-xcocotools
pkgver=1.12
pkgrel=1
pkgdesc='Extended COCO-API'
arch=('x86_64')
url='https://github.com/jin-s13/xtcocoapi'
license=('MIT')
depends=(
  python-numpy
  python-matplotlib
)
makedepends=(
  cython
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/jin-s13/xtcocoapi/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('bef2d183267a4134f66d6f7bdaf2d93c31b8a3c19584facbafc107622ddf2695ed0369e12e3e07ef4c1e6ed0450d6d5fe26bbda03ca9a88da8bf5a538415411a')

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
