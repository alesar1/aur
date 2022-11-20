# Maintainer: Felix Yan <felixonmars@archlinux.org>

pkgname=python38-func-timeout
pkgver=4.3.5
pkgrel=5
pkgdesc="Python module which allows you to specify timeouts when calling any existing function. Also provides support for stoppable-threads"
url="https://github.com/kata198/func_timeout"
license=('LGPL')
arch=('any')
depends=('python38')
makedepends=('python38-setuptools')
source=("$pkgname-$pkgver.tar.gz::https://github.com/kata198/func_timeout/archive/$pkgver.tar.gz")
sha512sums=('0711b8bdd2b55e7473fb525e70b0e6596bb11ba074e6110c52e7fdc842d87ef2d57307f02af86eef1b1e7e4c84a9faf25ec450d25addce3ebb93e3d341b566ac')

build() {
  cd func_timeout-$pkgver
  python3.8 setup.py build
}

check() {
  cd func_timeout-$pkgver
  python3.8 testit.py
}

package() {
  cd func_timeout-$pkgver
  python3.8 setup.py install --root="$pkgdir" --optimize=1
}
