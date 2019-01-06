# Maintainer: Maikel Wever <maikelwever@gmail.com>
pkgname=python-numpy-stl
pkgver=2.9.0
pkgrel=1
pkgdesc="Simple library to make working with STL files (and 3D objects in general) fast and easy."
url="https://github.com/WoLpH/numpy-stl/"
license=('BSD')
depends=('python' 'python-numpy' 'python-nine' 'python-utils')
makedepends=('python-setuptools')
source=("https://github.com/WoLpH/numpy-stl/archive/v${pkgver}.tar.gz")
md5sums=('36446c6234a78059b10851931b79ef7b')
arch=('any')

package() {
  cd "$srcdir/numpy-stl-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
  mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}
  cp LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt
}

# vim:set ts=2 sw=2 et:
