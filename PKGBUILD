# Maintainer: Gabriel Rauter <rauter.gabriel@gmail.com>

pkgname=gcfflasher
pkgver=4.0.0_beta
pkgrel=1
pkgdesc="Tool to program the firmware of dresden elektronik's Zigbee products."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/dresden-elektronik/gcfflasher"
license=(BSD)
depends=(libgpiod)
makedepends=(git)
provides=("$pkgname")
conflicts=("$pkgname")
source=("git+https://github.com/dresden-elektronik/$pkgname.git#tag=v${pkgver//_/-}")
sha256sums=('SKIP')

build() {
  cd $pkgname
  ./build_linux.sh
}

package() {
  cd $pkgname
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 GCFFlasher "$pkgdir/usr/bin/GCFFlasher"
}
