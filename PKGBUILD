# Maintainer: Lucas H. Gabrielli <heitzmann@gmail.com>
repo=heitzmann
modname=gdspy
pkgname=python-${modname}
pkgver=1.2
pkgrel=1
pkgdesc="Gdspy is a Python module for creating GDSII stream files, usually CAD layouts."
url="https://github.com/${repo}/${modname}"
arch=('x86_64' 'i686')
license=('GPL3')
depends=('python' 'python-numpy')
makedepends=('python-setuptools')
conflicts=()
replaces=()
backup=()
install=
source=("https://github.com/${repo}/${modname}/archive/v${pkgver}.tar.gz")
md5sums=('5dc96a45abf31e125c96c244510e83db')

build() {
  cd "${srcdir}/${modname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${modname}-${pkgver}"
  python setup.py install --root=${pkgdir}
}

# vim:set ts=2 sw=2 et:
