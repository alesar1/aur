# Maintainer: Morgana <morganamilo@gmail.com>
pkgname=superproductivity
_pkgname=superProductivity
pkgver=1.5.2
pkgrel=1
pkgdesc='To Do List / Time Tracker with Jira Integration.'
arch=('x86_64')
url="http://super-productivity.com/"
license=('MIT')
depends=('gtk2' 'libxss' 'gconf' 'nss' 'nspr' 'libnotify' 'libappindicator' 'libxtst' 'alsa-lib')
makedepends=()
source=("https://github.com/johannesjo/super-productivity/releases/download/v${pkgver}/superProductivity_${pkgver}_amd64.deb" "LICENSE")
noextract=()
md5sums=('5f746c81e68867eff3abc70e286b869c' '66b9e0d3d2b55636d9687b1381f5f97d')

prepare() {
	cd ${srcdir}
	tar -xf data.tar.xz
}

package() {
	install -d "${pkgdir}/opt/${_pkgname}"
	cp -a "${srcdir}/opt/${_pkgname}/." "${pkgdir}/opt/${_pkgname}"
	
	chmod 755 "${pkgdir}/opt/${_pkgname}/${pkgname}"

	install -d "${pkgdir}/usr/share/applications"
	install -Dm644 "${srcdir}/usr/share/applications/${pkgname}.desktop" "${pkgdir}/usr/share/applications"

	install -d "${pkgdir}/usr/bin"
	ln -s "/opt/${_pkgname}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"

	install -d "${pkgdir}/usr/share/icons/hicolor"
	cp -a ${srcdir}/usr/share/icons/hicolor/  ${pkgdir}/usr/share/icons/hicolor/

	install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
