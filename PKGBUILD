# Maintainer: Randoragon <randoragongamedev@gmail.com>

pkgname=mousemode-git
pkgver=1.0.0
pkgrel=1
epoch=
pkgdesc="An intuitive, home-row mouse replacement"
arch=('x86_64')
url="https://github.com/randoragon/mousemode"
license=('MIT')
depends=(libx11 libxtst xorgproto)
makedepends=(git)
source=("git+$url")
md5sums=('SKIP')

build() {
	cd mousemode
	make
}

package() {
	cd mousemode
    mkdir -p "$pkgdir/usr/bin"
	make DESTDIR="$pkgdir/" PREFIX=/usr/bin install
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/license.txt"
    install -Dm644 README.MD "$pkgdir/usr/share/doc/$pkgname/README.MD"
}

