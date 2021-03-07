# Maintainer: Darkpelz
pkgname=uwufetch-git
pkgver=r48.c5ecef7
pkgrel=1
pkgdesc="A meme system info tool for Linux, based on nyan/uwu trend on r/linuxmasterrace."
arch=('any')
url="https://github.com/TheDarkBug/${pkgname/-git/}"
license=('GPL3')
makedepends=("gcc")
source=("git+https://github.com/TheDarkBug/${pkgname/-git/}.git")
sha256sums=("SKIP")

pkgver() {
	cd "$srcdir/${pkgname/-git/}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/${pkgname/-git/}"
	make build
}

package() {
	cd "$srcdir/${pkgname/-git/}"
	install -D "uwufetch" "$pkgdir/usr/bin/uwufetch"
}
