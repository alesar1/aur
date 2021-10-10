# Maintainer: Nick Haghiri (n s dot hag hiri at G mail dot com)
pkgname=obinskit
pkgver=1.1.8
pkgrel=3
pkgdesc="ObinsKit for Anne Pro and Anne Pro 2"
arch=('x86_64')
url="http://en.obins.net/obinskit"
license=(custom)
depends=('desktop-file-utils' 'hicolor-icon-theme' 'libappindicator-gtk3' 'libnotify' 'libxss' 'libxtst' 'nss' 'libxkbcommon-x11')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://s3.hexcore.xyz/occ/linux/tar/ObinsKit_${pkgver}_x64.tar.gz"
"deb_extra_files_obins.tar.gz")
sha256sums_x86_64=('3206ac6e07b139db1c42b52d7bfe8ecc24ab73be11bda06ae38a07a65400fc67'
'137296d606b8127dfda7626421fd17fbee06712678b7ae25793e51d78221fab5')


package(){

	# Install the main files
	install -d "${pkgdir}/opt/${pkgname}"
	cp -a "${srcdir}/ObinsKit_${pkgver}_x64/." "${pkgdir}/opt/${pkgname}"
	install -d "${pkgdir}/usr"
	cp -a "${srcdir}/usr/." "${pkgdir}/usr"

	# Exec bit
	chmod 755 "${pkgdir}/opt/${pkgname}/obinskit"

	# License
	install -D -m644 "${pkgdir}/opt/obinskit/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-CHROMIUM"

	install -D -m644 "${pkgdir}/opt/obinskit/LICENSE.electron.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-ELECTRON"

}
