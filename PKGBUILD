# Maintainer: Malacology <guoyizhang at malacology dot com>
# Contributor: Malacology <guoyizhang at malacology dot com>

pkgname=mega
_pkgname=mega
pkgver=11.0.7
pkgrel=1
pkgdesc=" Molecular Evolutionary Genetics Analysis"
arch=('x86_64')
url="https://megasoftware.net"
license=('custom')
depends=(
	'desktop-file-utils'
	'gconf'
	'gtk2>=2.0'
	'hicolor-icon-theme'
	'metasploit>=2.0'
)
source=("https://megasoftware.net/releases/mega_${pkgver}-1_amd64_alpha.deb")
sha256sums=('d90e5012ac339f4daae722a3438a7f9659977cbe97585278dd248840ea63157a')

package() {
	tar -p -xf data.tar.xz -C "${pkgdir}"
	chmod 755 -R ../pkg/${pkgname}/usr
	cp -r ../pkg/${pkgname}/usr/local/* ../pkg/${pkgname}/usr/
	rm -r ../pkg/${pkgname}/usr/local 
}
