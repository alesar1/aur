# Maintainer: piernov <piernov@piernov.org>

pkgname=tixeoclient
pkgver=15.0.3.0
pkgrel=1
pkgdesc="Tixeo secure video conferencing client"
arch=('x86_64')
url="https://www.tixeo.com"
license=('custom')
depends=('libxss' 'libsecret' 'libappindicator-gtk3' 'zlib' 'dbus-glib' 'gtk3' 'xdg-utils')
makedepends=()
source=("http://repos.tixeo.com/debian/pool/non-free/t/tixeoclient/${pkgname}_${pkgver}_amd64.deb")
md5sums=('bb5952decd45e20d3f6732bdf36d8bd3')

package() {
	tar -C "${pkgdir}" -xf data.tar.gz

	install -d -m755 "${pkgdir}/usr/bin"
	ln -s "/opt/tixeoclient/tixeoclient" "${pkgdir}/usr/bin/tixeoclient"

	install -d -m755 "${pkgdir}/usr/share/icons/hicolor/scalable/apps/"
	ln -s "/opt/tixeoclient/Res/tixeoclient.svg" "${pkgdir}/usr/share/icons/hicolor/scalable/apps/tixeo-tixeoclient.svg"

	install -d -m755 "${pkgdir}/usr/share/applications/"
	ln -s "/opt/tixeoclient/Res/tixeo-tixeoclient.desktop" "${pkgdir}/usr/share/applications/tixeo-tixeoclient.desktop"
}
