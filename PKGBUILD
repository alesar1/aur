# Maintainer: Lennard Hofmann <lennard dot hofmann at web dot de>
pkgname=otf-andada-git
_pkgname=Andada
pkgver=r14.c06d7dc
pkgrel=2
pkgdesc='Organic-slab serif font made for Guaraní and Spanish'
arch=(any)
url="https://github.com/huertatipografica/$_pkgname"
license=('OFL')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+$url.git")
sha256sums=(SKIP)

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/$_pkgname"
	install -D -m644 -t "$pkgdir/usr/share/licenses/$pkgname" OFL.txt
	install -D -m644 -t "$pkgdir/usr/share/doc/$pkgname" README.md
	install -D -m644 -t "$pkgdir/usr/share/fonts/OTF" fonts/otf/*.otf
}
