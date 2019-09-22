# Maintainer: Husam Bilal <me@husam.dev>

pkgname=clipman
pkgver=1.0.1
pkgrel=1
pkgdesc="A simple clipboard manager for Wayland"
url="https://github.com/yory8/clipman"
depends=("wl-clipboard>=2.0")
makedepends=("go-pie")
provides=("clipman")
license=("GPL3")
arch=("x86_64" "i686")
md5sums=("75555908a3507333b1d58977b56269a6")
source=("https://github.com/yory8/${pkgname}/archive/v${pkgver}.tar.gz")

build() {
  cd $pkgname-$pkgver
  go build .
}

package() {
  cd $pkgname-$pkgver
  install -Dm755 $pkgname "$pkgdir"/usr/bin/$pkgname
}
