# Maintainer: Caleb Bassi <calebjbassi@gmail.com>

pkgname=gotop
pkgver=1.0.0
pkgrel=1
pkgdesc="A TUI graphical activity monitor inspired by gtop"
arch=("x86_64")
url="https://github.com/cjbassi/gotop"
license=("AGPLv3")
provides=("gotop")
source=("https://github.com/cjbassi/gotop/releases/download/$pkgver/gotop-linux_amd64.tgz")
md5sums=("SKIP")

package() {
    mkdir -p "$pkgdir/usr/bin"
    mv $srcdir/gotop $pkgdir/usr/bin
}
