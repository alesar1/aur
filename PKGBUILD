# Project maintainer: Romes (https://github.com/alt-romes)
# Package maintainer: Sam van der Kris <samvdkris@disroot.org>

pkgname="programmer-calculator"
pkgver=2.1
pkgrel=1
pkgdesc="A command line calculator made for programmers working with multiple number representations and close to the bits"
url="https://github.com/alt-romes/programmer-calculator"
arch=("x86_64")
license=("GPL3")
makedepends=("make" "gcc" "ncurses")
conflicts=("pcalc")

source=("$pkgname-$pkgver::$url/archive/v$pkgver.tar.gz")
sha256sums=("27cba8e04e73f1a2fbb4900abbf450fee07f7691c709addde21e5bb7a44c9988")


build() {
    cd "$pkgname-$pkgver"
    make
}

package() {
    cd "$pkgname-$pkgver"
    install -Dm 755 pcalc "$pkgdir/usr/local/bin/pcalc"
}
