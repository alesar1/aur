# Maintainer: Sam Burgos < sam dot burgos1089 at gmail dot com >
# Contributor: Carl George < arch at cgtx dot us >
# Contributor:  Ryan Peters < sloshy at sbcglobal dot net >
# Thanks to the Linux Mint project http://linuxmint.com/

pkgname='mint-x-icons'
pkgver=1.4.6
pkgrel=1
pkgdesc="Icon theme for Linux Mint"
arch=('any')
url="http://packages.linuxmint.com/pool/main/m/${pkgname}"
license=('GPL3')
source=("${url}/${pkgname}_${pkgver}.tar.xz")
depends=('gdk-pixbuf2' 'gtk-update-icon-cache')
sha256sums=('de5eff2b92fffb3fcd29ce7825cfc140449f8bb80c4ebdb7801dd473b0e9fa7d')

prepare() {
	find "${srcdir}" -type d ! -perm 755 -exec chmod 755 {} +
	find "${srcdir}" -type f ! -perm 644 -exec chmod 644 {} +
}

package() {
	cp -dr --no-preserve=ownership "${srcdir}/${pkgname}/usr" "${pkgdir}/"
}
