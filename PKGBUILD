# Project maintainer: Romes (https://github.com/alt-romes)
# Package maintainer: Sam van der Kris <samvdkris@disroot.org>

pkgname="programmer-calculator"
pkgver=2.0
pkgrel=1
pkgdesc="A command line calculator made for programmers working with multiple number representations and close to the bits"
url="https://github.com/alt-romes/programmer-calculator"
arch=("x86_64")
license=("GPL3")
makedepends=("make" "gcc" "ncurses")
conflicts=("pcalc")

source=("$pkgname-$pkgver::$url/archive/v$pkgver.tar.gz")
sha256sums=("8380ea0a0cf156c0c97167b776307f67b41acebe58c141634ede6e6f088f55dc")


build() {
    cd "$pkgname-$pkgver"
    make
}

package() {
    cd "$pkgname-$pkgver"
    install -Dm 755 pcalc "$pkgdir/usr/local/bin/pcalc"
}
