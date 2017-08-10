# Maintainer: Thulinma <jaron@vietors.com>
pkgname=mistserver
pkgdesc="The MistServer media server toolkit, open source edition"
pkgver=2.12
pkgrel=1
license=('AGPL3')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://mistserver.org"
makedepends=('cmake')
source=("https://github.com/DDVTECH/mistserver/archive/$pkgver.tar.gz")
md5sums=('1895eebb1c72eda590f60cd7ff70cebe')
build() {
  cd "$srcdir/$pkgname-$pkgver"
  echo $pkgver > VERSION
  cmake . -DDEBUG=3 -DRELEASE="Generic_$CARCH" -DBUILD_SHARED_LIBS=true -DCMAKE_INSTALL_PREFIX="$pkgdir/usr"
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make install
  mkdir -p "$pkgdir/usr/lib/systemd/system/"
  install mistserver.service "$pkgdir/usr/lib/systemd/system/"
}

