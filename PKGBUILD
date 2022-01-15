# Maintainer: Tomas S. <me+aur at wereii.cz>
# Contributor: Simon Perry <aur [at] sanxion [dot] net>

pkgname=python-diskcache
pkgver=5.4.0
pkgrel=1
pkgdesc="Python disk and file backed cache library"
arch=('any')
license=('Apache')
url="https://github.com/grantjenks/python-diskcache"
makedepends=('python-setuptools')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/grantjenks/python-diskcache/archive/v${pkgver}.tar.gz")
sha256sums=('5cdfcb16c9773584e8dca21c23c622e3c787721b1b09635a25e4f00c28073b2a')

build() {
  cd "${srcdir}"/"${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}"/"${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE
}

