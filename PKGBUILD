# Maintainer: Butui Hu <hot123tea123@gmail.com>
# Contributor: Chih-Hsuan Yen <yan12125@archlinux.org>
# Contributor: Jean Lucas <jean@4ray.co>
# Based on python-torchvision-git; original contributors:
# Contributor: Stephen Zhang <zsrkmyn at gmail dot com>

pkgname=python-torchvision
_pkgname=vision
pkgver=0.4.0
pkgrel=4
pkgdesc='Datasets, transforms, and models specific to computer vision'
arch=('x86_64')
url='https://github.com/pytorch/vision'
license=('BSD')
depends=(
  'python-av'
  'python-numpy'
  'python-pillow'
  'python-pytorch'
  'python-scipy'
  'python-six'
  'python-tqdm'
)
makedepends=('python-setuptools')
checkdepends=(
  'python-mock'
  'python-pytest'
  'python-scipy'
)
source=("https://github.com/pytorch/vision/archive/v${pkgver}.tar.gz")
sha512sums=('e0443ec443b7fab0b67a674b4706a2d1145723c32ea81a44c1395a77877fb44787c86e0d271fbd295e4e577d6616ef8d0a2e3549015d5c5ae95182d5fd12c920')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${_pkgname}-${pkgver}"
  PYTHONPATH="${PWD}/build/lib.linux-${CARCH}-3.7" pytest -v
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
