# Maintainer: Brian Bidulock <bidulock@openss7.org>
pkgname=xqproxy
pkgver=0.1.1
pkgrel=1
pkgdesc="XDCMP query proxy"
arch=('i686' 'x86_64')
url="http://cgit.freedesktop.org/xqproxy"
license=('MIT')
depends=('bash' 'libx11')
makedepends=('git')
source=("$pkgname::git://anongit.freedesktop.org/xqproxy#tag=$pkgver"
	"build.patch")
md5sums=('SKIP'
         'c81a0aabcb01f6a24d44196aed092d47')

prepare() {
  cd $pkgname
  patch -Np2 -b -z .orig -i ../build.patch
  autoreconf -fiv
}
build() {
  cd $pkgname
  ./configure --prefix=/usr
  make
}
package() {
  cd $pkgname
  make DESTDIR="$pkgdir" install
  install -Dm755 xqssh "$pkgdir/usr/bin/xqssh"
  install -Dm644 <(head -24 xqproxy.c) "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
