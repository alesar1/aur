# $Id$
# Maintainer: Shane Stone <shanewstone at gmail>
pkgname=python-spiceypy
pkgver=3.0.2
pkgrel=1
pkgdesc="A Python wrapper for the NAIF C SPICE Toolkit (N66) written using ctypes."
arch=('any')
url="https://github.com/AndrewAnnex/SpiceyPy"
license=('MIT')
makedepends=('python-numpy')
depends=('python-numpy')
optdepends=('python-pytest: testing' 'python-pandas: testing')
source=("$pkgname-$pkgver.tar.gz::https://github.com/andrewannex/spiceypy/archive/v$pkgver.tar.gz")
md5sums=('7e8beac872150d89fd826d9b58def08a')

build() {
  cd SpiceyPy-$pkgver

  python setup.py build
}

package() {
  cd SpiceyPy-$pkgver

  python setup.py install --skip-build --root="$pkgdir" --optimize=1

  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
