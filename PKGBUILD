# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mystuff
pkgver=4.0
pkgrel=3
pkgdesc="Create a custom menu in a popup window"
url="http://www.kornelix.net/mystuff/mystuff.html"
arch=('i686' 'x86_64')
license=('GPL3')
depends=('clutter-gtk')
source=("http://www.kornelix.net/downloads/downloads/$pkgname-$pkgver.tar.gz")
sha256sums=('5fc3a043e4df3939cc1d7ee7b47cd4ad0d844443e36ea8c67fc6295e805ab41b')
options=('!emptydirs')

build() {
  cd $pkgname
  make PREFIX=/usr 
}

package() {
  cd $pkgname
  make DESTDIR="$pkgdir" ICONDIR=/usr/share/pixmaps install
  sed -i 's+/usr/share/mystuff/icons/++' \
      "$pkgdir"/usr/share/applications/$pkgname.desktop
}
