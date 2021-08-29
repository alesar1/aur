# Maintainer: NOGISAKA Sadata <ngsksdt@gmail.com>
# vim:set ts=2 sw=2 et:

pkgname=python-mecab
_pkgname=mecab-python3
pkgver=1.0.4
pkgrel=1
pkgdesc="Morphological Analysis Tool - Python3 interface"
arch=('x86_64' 'i686')
url="http://taku910.github.io/mecab/"
license=('BSD' 'LGPL2.1' 'GPL2')
depends=('python' 'mecab' 'mecab-ipadic')
makedepends=('python-setuptools' 'swig')
source=("https://github.com/SamuraiT/${_pkgname}/archive/refs/tags/v${pkgver}.tar.gz")

prepare() {
  cd "${srcdir}/${_pkgname}"
  git checkout "${pkgver}"
}

build() {
  cd "${srcdir}/${_pkgname}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}"
  python setup.py install --root=${pkgdir}
  install -Dm644 COPYING ${pkgdir}/usr/share/licenses/${pkgname}/COPYING
}
sha256sums=('920a09b4ee14dca1d38161f2f7a643069d3ced3633996901d24386a908100b8e')
