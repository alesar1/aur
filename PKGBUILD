# Generated by debtap
# Maintainer: Nick Haghiri (n s dot hag hiri at G mail dot com)
pkgname=obinslab-starter
pkgver=1.0.10
pkgrel=1
pkgdesc="Obinslab Starter for Anne Pro and Anne Pro 2"
arch=('x86_64')
url="http://en.obins.net/obinslab-starter"
license=(custom)
groups=('')
depends=('desktop-file-utils' 'gconf' 'hicolor-icon-theme' 'libappindicator-gtk2' 'libnotify' 'libxss' 'libxtst' 'nss')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("http://releases.obins.net/occ/linux/deb/ObinslabStarter_${pkgver}_x64.deb")
sha256sums_x86_64=('d5ad0f5dd9fd26c469fe6c6b229ac1a6081c019dd37096a1104da92f56b64c98')


package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	install -D -m644 "${pkgdir}/opt/Obinslab Starter/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-CHROMIUM"

	install -D -m644 "${pkgdir}/opt/Obinslab Starter/LICENSE.electron.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-ELECTRON"

}
