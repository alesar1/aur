# Maintainer: TheCynicalTeam <TheCynicalTeam@github.com>
# Contributor: TheCynicalTeam <TheCynicalTeam@github.com>
pkgname=qt-logout
pkgver=2020.11.03
pkgrel=1
pkgdesc='Logout script for qt5'
arch=('any')
url="https://github.com/TheCynicalTeam/$pkgname"
license=('GPL3')
depends=('python-pyqt5' 'gtk-engine-murrine')
optdepends=('multimonitorlock: default lock screen for qt-logout')
source=("${pkgname}-$pkgver-$pkgrel.tar.gz::${url}/archive/$pkgver-$pkgrel.tar.gz")
sha256sums=('5a10c06e946baddb45501efccf3dee74dc06dcdfd6aeba81c85c6ff8962f0a09')

package() {
  cp -a $srcdir/$pkgname-$pkgver-$pkgrel/etc $pkgdir/etc
  mkdir -p $pkgdir/usr
	cp -a $srcdir/$pkgname-$pkgver-$pkgrel/usr/bin $pkgdir/usr/bin
  mkdir -p $pkgdir/usr/lib
	cp -a $srcdir/$pkgname-$pkgver-$pkgrel/usr/lib/qt-logout $pkgdir/usr/lib/qt-logout
}
