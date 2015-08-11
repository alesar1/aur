# Maintainer: Anatol Pomozov <anatol.pomozov@gmail.com>

pkgname=wolfssl
pkgver=3.6.2
pkgrel=1
pkgdesc='Embedded SSL Library for Applications, Devices, IoT, and the Cloud'
arch=(i686 x86_64)
license=(GPL)
url='https://www.wolfssl.com/'
source=(https://github.com/wolfSSL/wolfssl/archive/v$pkgver.tar.gz)
sha1sums=('70477370f1ebbfddc49ec49723d50a74753f9118')

build() {
  cd $pkgname-$pkgver
  ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc --disable-fastmath \
              --disable-fasthugemath --disable-bump \
              --enable-opensslextra --enable-fortress \
              --enable-keygen --enable-certgen \
              --disable-debug --disable-ecc \
              --disable-ntru --disable-examples
  make
}

package() {
  cd $pkgname-$pkgver
  make install DESTDIR="$pkgdir"

  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
}
