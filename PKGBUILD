# Contributor: Patrick Jackson <PatrickSJackson gmail com>
# Maintainer: Christoph Vigano <mail@cvigano.de>

pkgname=st-white
_pkgname=st
pkgver=0.6
pkgrel=4
pkgdesc='A simple virtual terminal emulator for X.'
arch=('i686' 'x86_64')
license=('MIT')
conflicts=($_pkgname)
provides=($_pkgname)
depends=('libxft')
makedepends=('ncurses')
url="http://st.suckless.org"
source=(http://dl.suckless.org/st/$_pkgname-$pkgver.tar.gz
        config.h)

build() {
  cd $srcdir/$_pkgname-$pkgver
  cp $srcdir/config.h config.h
	make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11
}

package() {
  cd $srcdir/$_pkgname-$pkgver
  make PREFIX=/usr DESTDIR="$pkgdir" TERMINFO="$pkgdir/usr/share/terminfo" install
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 README "$pkgdir/usr/share/doc/$pkgname/README"
}
md5sums=('1a926f450b4eacb7e2f5ac5b8ffea7c8'
         '90ce5919be96de000bd9d9429b173490')
md5sums=('1a926f450b4eacb7e2f5ac5b8ffea7c8'
         'f610e4f0b387ea72d4ec00517cf3e25f')
md5sums=('1a926f450b4eacb7e2f5ac5b8ffea7c8'
         '4a761074f7f19b487ebd0d2a9aadc64e')
md5sums=('1a926f450b4eacb7e2f5ac5b8ffea7c8'
         '625038eae74decdfb513ef93813a589b')
md5sums=('1a926f450b4eacb7e2f5ac5b8ffea7c8'
         'd4b84a4fb1166ff5521eeb456c8af751')
