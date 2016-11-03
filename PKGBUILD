# Maintainer: Lukas Jirkovsky <l.jirkovsky@gmail.com>
# Contributor: speps <speps at aur dot archlinux dot org>
pkgname=glogg
pkgver=1.1.2
pkgrel=1
pkgdesc="A Qt GUI application to browse and search through long or complex log files."
arch=('i686' 'x86_64')
url="http://glogg.bonnefon.org/"
license=('GPL3')
depends=('qt5-base' 'boost-libs' 'hicolor-icon-theme')
makedepends=('boost')
source=("http://glogg.bonnefon.org/files/$pkgname-$pkgver.tar.gz")
md5sums=('b500ee02c9ff3c9efd2bcb22b201ee55')

build() {
  cd $pkgname-$pkgver
  qmake-qt5
  make
}

package() {
  cd $pkgname-$pkgver
  make install INSTALL_ROOT="$pkgdir/usr"
}

# vim:set ts=2 sw=2 et:
