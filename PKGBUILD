# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-imagehash
_pkgname=imagehash
pkgver=4.3.1
pkgrel=1
pkgdesc='A Python Perceptual Image Hashing Module'
arch=('any')
url='https://github.com/JohannesBuchner/imagehash'
license=('BSD')
depends=(
  python-numpy
  python-pillow
  python-pywavelets
  python-scipy
  python-six
)
makedepends=(python-setuptools)
checkdepends=(python-pytest)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/JohannesBuchner/imagehash/archive/v${pkgver}.tar.gz"
)
sha512sums=('21c1610289cd373b20bf8b4894ca2e3a4185936e8f22e58d317aeaee4ac5ecd6ebd9eda42972f0523e86f80242fa6870fa9c51f21f8a6f4f04a1dd9482c2cea1')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  pytest -v
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  rm -rfv "${pkgdir}/usr/images"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
