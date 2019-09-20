# Maintainer: Julien Savard <juju@juju2143.ca>
pkgname=x16-emulator
pkgver=r31
pkgrel=1
pkgdesc="An emulator for The 8-Bit Guy's Commander X16"
arch=('x86_64')
url="http://commanderx16.com/"
license=('BSD')
groups=('commander-x16')
depends=('sdl2')
makedepends=('pandoc')
optdepends=('x16-rom: ROMs for the emulator')
provides=()
conflicts=()
replaces=()
options=()
install=
changelog=
source=("https://github.com/commanderx16/$pkgname/archive/$pkgver.tar.gz")
md5sums=('abeffe30fea892e7494e105bb070999b')

build() {
	cd "$pkgname-$pkgver"
	make
	pandoc --from gfm --to html -c github-pandoc.css --standalone --metadata pagetitle="X16 Emulator" README.md --output README.html
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 x16emu "$pkgdir/usr/bin/x16emu"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 github-pandoc.css "$pkgdir/usr/share/doc/$pkgname/github-pandoc.css"
	install -Dm644 README.html "$pkgdir/usr/share/doc/$pkgname/README.html"
}
