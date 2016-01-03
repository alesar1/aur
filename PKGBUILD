# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mystuff
pkgver=2.2
pkgrel=1
pkgdesc="Create a custom menu in a popup window"
url="http://www.kornelix.com/mystuff"
arch=('i686' 'x86_64')
license=('GPL3')
depends=('gtk3')
source=("http://www.kornelix.net/downloads/tarballs/$pkgname-$pkgver.tar.gz")
md5sums=('fc805e2f2a1641fa520a5fd744bbde7f')

build() {
  cd $srcdir/$pkgname-$pkgver
  sed -i 's+xdg-deskto+#xdg-deskto+' Makefile
  sed -i 's+/usr/share/mystuff/icons/++' desktop
  make PREFIX=/usr LDFLAGS="-lpthread" ICONDIR=/usr/share/pixmaps
}

package() {
  cd $srcdir/$pkgname-$pkgver
  install -Dm644 desktop $pkgdir/usr/share/applications/$pkgname.desktop 
  make DESTDIR=$pkgdir ICONDIR=/usr/share/pixmaps install 
}
