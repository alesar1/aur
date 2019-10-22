# Maintainer: Cem Keylan <cem at ckyln dot com>

pkgname=bm
_pkgname=bm
pkgrel=1
pkgver=0.3
pkgdesc="command-line bibliography manager for biblatex"
url="https://git.ckyln.com/bm/log.html"
arch=('any')
license=('GPL3')
depends=('jq')
optdepends=('poppler: for getting DOI metadata from a pdf')
source=("https://git.ckyln.com/archives/${pkgname}/${pkgname}-${pkgver}.tar.gz")
md5sums=('40fa15f4188a9734bd82ae2ecc066d4d')
provides=('bm')

package() {
	cd $srcdir/${pkgname}-${pkgver}
	make PREFIX=/usr DESTDIR="${pkgdir}" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/doc/${pkgname}/LICENSE"
	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
