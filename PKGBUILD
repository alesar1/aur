# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=xorgxrdp
pkgver=0.2.8
pkgrel=1
pkgdesc="Xorg drivers for xrdp"
arch=('i686' 'x86_64')
url="https://github.com/neutrinolabs/xorgxrdp"
license=('MIT')
depends=('glibc' 'xrdp')
makedepends=('nasm' 'xorg-server-devel')
options=('staticlibs')
source=("https://github.com/neutrinolabs/xorgxrdp/releases/download/v$pkgver/xorgxrdp-$pkgver.tar.gz"{,.asc})
sha256sums=('6e7e657eff8213e307451c5947e1ac5fa75683436768d73eafc1a1df09bdbae6'
            'SKIP')
validpgpkeys=('61ECEABBF2BB40E3A35DF30A9F72CDBC01BF10EB')  # Koichiro IWAO <meta@vmeta.jp>


build() {
  cd "$pkgname-$pkgver"

  ./configure --prefix="/usr"
  make
}

check() {
  cd "$pkgname-$pkgver"

  #make check
}

package() {
  cd "$pkgname-$pkgver"

  make DESTDIR="$pkgdir" install
  install -Dm644 "COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
