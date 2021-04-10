# Maintainer: Ilya Zlobintsev <ilya.zl@protonmail.com>
pkgname=sway-marker-git
pkgver=r2.f2732f8
pkgrel=1
license=("MIT")
pkgdesc="Popup for using vim-like marks in sway"
url="https://github.com/fdw/rofi-rbw"
makedepends=("rust")
depends=("gtk3" "gtk-layer-shell")
arch=("x86_64" "arch64")
source=("git+https://github.com/ilyazzz/sway-marker.git")
sha512sums=("SKIP")

pkgver() {
	cd sway-marker
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd sway-marker
	cargo build --release
}

package() {
	cd $srcdir/sway-marker
	mkdir -p $pkgdir/usr/bin
	install -Dm755 target/release/sway-marker $pkgdir/usr/bin/
}
