# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mystuff
pkgver=2.3
pkgrel=1
pkgdesc="Create a custom menu in a popup window"
url="http://www.kornelix.com/mystuff"
arch=('i686' 'x86_64')
license=('GPL3')
depends=('gtk3')
source=("http://www.kornelix.net/downloads/tarballs/$pkgname-$pkgver.tar.gz")
md5sums=('00deeb85e9f760cb3d28f36e11b99e2a')

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
