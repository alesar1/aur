# Maintainer: Butui Hu <hot123tea123@gmail.com>
# Contributor: Chih-Hsuan Yen <yan12125@archlinux.org>
# Contributor: Jean Lucas <jean@4ray.co>
# Based on python-torchvision-git; original contributors:
# Contributor: Stephen Zhang <zsrkmyn at gmail dot com>

pkgname=python-torchvision
pkgver=0.2.2
pkgrel=6
pkgdesc='Datasets, transforms, and models specific to computer vision'
arch=(any)
url=https://github.com/pytorch/vision
license=(BSD)
depends=(python-numpy python-pillow python-pytorch python-scipy python-six python-tqdm)
makedepends=(python-setuptools)
checkdepends=(python-pytest python-scipy)
source=("torchvision-${pkgver}.tar.gz"::"https://github.com/pytorch/vision/archive/v${pkgver}.tar.gz")
sha512sums=('2831391b71257ae4daacd4e7d3f933a910fad548df8df1a70d2358947244de59a70ceb76c544ed3eb1bd07b9e170640234f49b4743d9bb9da0e2b33861c36849')

build() {
  cd "vision-${pkgver}"
  python setup.py build
}

check() {
  cd "vision-${pkgver}"
  PYTHONPATH=. pytest -v test
}

package() {
  cd "vision-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
