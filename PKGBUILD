# -*- mode:sh -*-

# Maintainer: Alejandro Barocio A. <abarocio80@gmail.com>
pkgname=pacslim-git
pkgver=0.0.2
pkgrel=3
epoch=
pkgdesc="Put your system on package diet."
arch=(any)
url="https://gitlab.com/abarocio80/pacslim"
license=('GPL3')
groups=()
depends=("pacman")
makedepends=("make")
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+$url")
noextract=()
md5sums=('SKIP')
validpgpkeys=()

pkgver() {
	cd "pacslim"
	git describe --long 2>/dev/null | sed 's/-/_r/;s/-/_/g'
}

build() {
	cd "pacslim"
	make
}

package() {
	cd "pacslim"
	make DESTDIR="$pkgdir/" PREFIX="/usr" install
}
