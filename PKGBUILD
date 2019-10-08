# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>

_pkgname=tarjan
pkgname="python2-${_pkgname}"
pkgver=0.2.3.2
pkgrel=1
pkgdesc="Python implementation of Tarjan’s algorithm"
arch=('any')
url="https://pypi.org/project/${_pkgname}"
license=('LGPLv3')
depends=('python2')
makedepends=('python2-setuptools')
source=("${_pkgname}-${pkgver}::https://pypi.python.org/packages/source/${_pkgname:0:1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('cffa9147e3bb80d60e72a3c692dd53145e19b14bc68b4452b5a5ee1a4cff9c6d')

build() {
  cd "${_pkgname}-${pkgver}"

  python2 setup.py build
}

check() {
  cd "${_pkgname}-${pkgver}"

  export PYTHONPATH="build/lib"
  python2 setup.py test
}

package() {
  cd "${_pkgname}-${pkgver}"

  python2 setup.py install --root="${pkgdir}" --optimize=1
}
