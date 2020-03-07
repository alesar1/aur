pkgname=gtkcord3-git
_pkgname=gtkcord3
pkgver=r103.b60f45b
pkgrel=1
pkgdesc='Discord client written in go and gtk3'
arch=('any')
url='https://github.com/diamondburned/gtkcord3'
license=('GPL3')
depends=('gtk')
makedepends=('git' 'go')
source=('git+https://github.com/diamondburned/gtkcord3')
sha1sums=('SKIP')

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd $_pkgname
	go build
}

package() {
	cd $_pkgname
	install -Dm755 "$_pkgname" "$pkgdir/usr/bin/$_pkgname"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}

