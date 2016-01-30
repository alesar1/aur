# Maintainer: Graeme Gott <graeme@gottcode.org>

pkgname=simsu
pkgver=1.3.2
pkgrel=1
pkgdesc='A basic Sudoku game'
arch=('i686' 'x86_64')
url="http://gottcode.org/$pkgname/"
license=('GPL3')
depends=('qt5-base')
install="$pkgname.install"
source=("http://gottcode.org/$pkgname/$pkgname-$pkgver-src.tar.bz2")
sha256sums=('bf147e675ae01e7bccf092cd9b9e5ae89b7f0893e28f7e65239b8b0371f6562a')

build() {
  cd "$pkgname-$pkgver"

  qmake-qt5 PREFIX=/usr
  make
}

package() {
  cd "$pkgname-$pkgver"

  make INSTALL_ROOT="$pkgdir/" install
}
