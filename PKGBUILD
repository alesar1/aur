# Maintainer: nycex <nycex / cccp.org>
_pkgbasename=lookupunicode
pkgname=${_pkgbasename}-git
pkgrel=1
pkgver=r2.05db01b
pkgdesc="swizz army knife for unicode - a utility to search in the unicode database"
arch=('any')
url="https://codeberg.org/nycex/${_pkgbasename}"
license=('GPL3')
depends=('cargo' 'unicode-character-database')
source=(git+${url})
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgbasename}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${srcdir}/${_pkgbasename}"
	cargo build --release
}

package() {
	cd "${srcdir}/${_pkgbasename}"

	install -D -m755 target/release/$_pkgbasename "${pkgdir}/usr/bin/$_pkgbasename"
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/$_pkgbasename/LICENSE"
}
