# Generated by debtap
# Maintainer: Jan Kohnert <bughunter@jan-kohnert.de>
# Contributor: Matthew Sexton <wsdmatty@gmail.com>
# Contributor: Lorenz Wellmer
pkgname=clockify-desktop
pkgver=1.8.61
pkgrel=2
pkgdesc="Truly free time tracker for teams, Desktop App"
arch=('x86_64')
url="https://clockify.me"
license=('custom')
depends=('gtk3' 'libxss' 'nss')
source=("https://clockify-resources.s3.eu-central-1.amazonaws.com/downloads/Clockify_Setup.deb")
sha512sums=('fe4e85ae0006817b0fa5dbe55dd2f1e5291a5f1c85df0846ccb6aa26c855cfeed4ad3517e9d30dbe59ae794306121f81c200aa1cc685fbb081d0ad2f24e596fd')

package() {
	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"
	install -dm755 "${pkgdir}/usr/bin"
	ln -sf "/opt/Clockify/clockify" "${pkgdir}/usr/bin/clockify"
	install -D -m644 "${pkgdir}/opt/Clockify/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
