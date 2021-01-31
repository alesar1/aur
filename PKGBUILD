# Maintainer: Munzir Taha <munzirtaha at gmail.com>
# Contributor: Wyegu <bsdazs17 at gmail dot com>
# Contributor: Firmicus <firmicus at gmx dot net>
pkgname=ttf-sil-scheherazade
pkgver=3.000
pkgrel=1
pkgdesc="An Arabic Naskh-style Unicode typeface"
arch=('any')
url="https://software.sil.org/scheherazade/"
license=('OFL')
conflicts=('ttf-sil-fonts<=6')
source=("https://software.sil.org/downloads/r/scheherazade/ScheherazadeNew-$pkgver.zip")
sha256sums=('43fa1fbcbd5776b963aff6270577124bc6893152c52dc7084675b53c4ffad701')

package() {
	cd "$srcdir/ScheherazadeNew-$pkgver"
	install -Dm644 *.ttf -t ${pkgdir}/usr/share/fonts/TTF/
	install -Dm644 OFL.txt OFL-FAQ.txt -t ${pkgdir}/usr/share/licenses/${pkgname}/
	install -Dm644 README.txt FONTLOG.txt documentation/* -t "$pkgdir/usr/share/doc/$pkgname/"
}
