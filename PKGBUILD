# Maintainer: Marc Vidal <mvidaldp@gmail.com>

pkgname="mcmojave-cursors"
pkgver=1.0
pkgrel=1
pkgdesc="x-cursor theme inspired by macOS and based on capitaine-cursors"
arch=("any")
url="https://github.com/vinceliuice/McMojave-cursors"
license=('GPL')
source=("https://github.com/vinceliuice/McMojave-cursors/archive/master.zip")
md5sums=('0beb30670b7ad4da538a86ab64b88d00')

build() {
	true
}

package() {
    cd $srcdir
	mkdir -p $pkgdir/usr/share/icons/$pkgname
	cp -r McMojave-cursors-master/dist/* $pkgdir/usr/share/icons/$pkgname
}
