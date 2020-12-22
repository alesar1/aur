# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=xorgxrdp
pkgver=0.2.15
pkgrel=1
pkgdesc="Xorg drivers for xrdp"
arch=('i686' 'x86_64')
url="https://github.com/neutrinolabs/xorgxrdp"
license=('MIT')
depends=('glibc')
makedepends=('nasm' 'xorg-server-devel' 'xrdp')
options=('staticlibs')
source=("https://github.com/neutrinolabs/xorgxrdp/releases/download/v$pkgver/xorgxrdp-$pkgver.tar.gz"{,.asc})
sha256sums=('fde7ba96b6fc34ffdeaef9fc5a86c7f1f21cf82efd9df005f206f2d25b2afa37'
            'SKIP')
validpgpkeys=('61ECEABBF2BB40E3A35DF30A9F72CDBC01BF10EB')  # Koichiro IWAO <meta@vmeta.jp>


build() {
  cd "$pkgname-$pkgver"

  ./configure \
    --prefix="/usr"
  make
}

check() {
  cd "$pkgname-$pkgver"

  #make check
}

package() {
  cd "$pkgname-$pkgver"

  make DESTDIR="$pkgdir" install
  install -Dm644 "COPYING" -t "$pkgdir/usr/share/licenses/$pkgname"
}
