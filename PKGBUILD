# Maintainer: Clemens Brunner <clemens dot brunner at gmail dot com>
pkgname=python-biosig
pkgver=2.3.3
pkgrel=1
pkgdesc="Python module for reading and writing routines for different biosignal data formats"
arch=('i686' 'x86_64')
url="http://biosig.sourceforge.net/"
license=('GPL')
depends=('libbiosig' 'python-numpy')
makedepends=('python-setuptools')
source=(https://sourceforge.net/projects/biosig/files/BioSig%20for%20C_C%2B%2B/src/biosig-$pkgver.src.tar.gz)
sha1sums=('ff6c2ed26f9d6c7045bee07a88316cd8a417dd0e')

build() {
  cd "$srcdir/biosig-$pkgver/biosig4c++/python"
  python setup.py build
}

package() {
  cd "$srcdir/biosig-$pkgver/biosig4c++/python"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
