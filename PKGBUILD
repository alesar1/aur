# Maintainer: mekb https://github.com/mekb-turtle
pkgname=mekfetch
pkgver=1.0.0
pkgrel=1
pkgdesc='Simple neofetch alternative written in C'
arch=('any')
url="https://github.com/mekb-turtle/mekfetch"
source=("mekfetch::git+${url}.git#tag=$pkgver")
sha256sums=(SKIP)
optdepends=('ttf-nerd-fonts-symbols: Nerd font support')
package() {
	install -Dm755 "$srcdir/mekfetch/mekfetch" "$pkgdir/usr/bin/mekfetch"
}
build() {
	make -C "$srcdir/mekfetch"
}
