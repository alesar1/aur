# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=xgalaga
pkgver=2.1.1.0
pkgrel=2
pkgdesc="An open source remake of the classic arcade game Galaga"
arch=('i686' 'x86_64')
url="http://rumsey.org/xgal.html"
license=('GPL')
depends=('libxmu' 'libxpm')
install=$pkgname.install
source=(http://downloads.sourceforge.net/$pkgname/$pkgname-$pkgver.tar.gz
        $pkgname.patch
        $pkgname.png
        $pkgname.desktop)
md5sums=('f37c3377b245d2d53b33eb489966bf28'
         'db024441d3bc6d41033891ab71e2cece'
         '3168c3fec9bd8345946ac93c6b9d7b32'
         'e8fbde4e6049202a087ebc7daf0f0170')

build() {
  cd "$srcdir"/$pkgname-$pkgver

  /bin/cp -f /usr/share/automake-1.14/config.guess .
  /bin/cp -f /usr/share/automake-1.14/config.sub   .

  patch -Np1 -i "$srcdir"/$pkgname.patch

  LDFLAGS='' ./configure \
	--mandir=/usr/share/man \
	--prefix=/usr/share/$pkgname \
	--exec-prefix=/usr/bin \
	--with-xpm-lib=/usr/lib

  make
}

package() {
  cd "$srcdir"/$pkgname-$pkgver

  make DESTDIR="$pkgdir" \
	mandir=/usr/share/man \
	prefix=/usr/share/$pkgname \
	exec_prefix=/usr/bin \
	scoredir=/var/lib/$pkgname \
	install

  install -Dm644 "$srcdir"/$pkgname.png "$pkgdir"/usr/share/pixmaps/$pkgname.png
  install -Dm644 "$srcdir"/$pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
  install -Dm644 README "$pkgdir"/usr/share/doc/$pkgname/README
}
