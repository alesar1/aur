# Project maintainer: Romes (https://github.com/alt-romes)
# Package maintainer: Sam van der Kris <samvdkris@disroot.org>

pkgname="programmer-calculator"
pkgver=1.7
pkgrel=1
pkgdesc="A command line calculator made for programmers working with multiple number representations and close to the bits"
url="https://github.com/alt-romes/programmer-calculator"
arch=("x86_64")
license=("GPL3")
makedepends=("make" "gcc" "ncurses")
conflicts=("pcalc")

source=("$pkgname-$pkgver::$url/archive/v$pkgver.tar.gz")
sha256sums=("989a548ececaa35ed18d452efb805524bfef55566bf73ad13d5085ac56a51057")


build() {
    cd "$pkgname-$pkgver"
    make
}

package() {
    cd "$pkgname-$pkgver"
    install -Dm 755 pcalc "$pkgdir/usr/local/bin/pcalc"
}
