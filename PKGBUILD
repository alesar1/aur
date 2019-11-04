# Maintainer: Anatoly Rugalev <anatoly.rugalev gmail com>

pkgname=libinput-xrandr-autorotate
pkgver=0.1.0
pkgrel=4
pkgdesc="Allows to rotate screen and touch input for 2-in-1 laptops"
url="https://github.com/AnatolyRugalev/libinput-xrandr-autorotate"
license=('GPLv3')
arch=('x86_64')
depends=()

source=("https://github.com/AnatolyRugalev/libinput-xrandr-autorotate/releases/download/${pkgver}/libinput-xrandr-autorotate_${pkgver}_Linux_x86_64.tar.gz")
sha256sums=('1b0001b0d9d215bdff822ab5b774095af9c8d9867b8b09c72963ec6e6fd9429e')
package() {
  cd "$srcdir"
  install -d "$pkgdir/usr/bin"
  install -m755 libinput-xrandr-autorotate "$pkgdir/usr/bin/libinput-xrandr-autorotate"
  install -DT -m0755 "$srcdir/libinput-xrandr-autorotate.service" "$pkgdir/usr/lib/systemd/system/libinput-xrandr-autorotate.service"
}
