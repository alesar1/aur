# Maintainer: Morgana <morganamilo@gmail.com>
pkgname=superproductivity
_pkgname=superProductivity
pkgver=1.10.36
pkgrel=1
pkgdesc='To Do List / Time Tracker with Jira Integration.'
arch=('x86_64')
url="http://super-productivity.com/"
license=('MIT')
depends=('gtk2' 'libxss' 'gconf' 'nss' 'nspr' 'libnotify' 'libappindicator'
'libxtst' 'alsa-lib' 'xprintidle')
makedepends=()
source=("https://github.com/johannesjo/super-productivity/releases/download/v${pkgver}/superProductivity_${pkgver}_amd64.deb" "LICENSE")
noextract=()
md5sums=('4fb8f8aabc68c9295694bb0b65d26c51'
         '66b9e0d3d2b55636d9687b1381f5f97d')

prepare() {
	cd ${srcdir}
	tar -xf data.tar.xz
}

package() {
	cd ${srcdir}
	install -d "${pkgdir}/opt/${_pkgname}"
	cp -a "${srcdir}/opt/${_pkgname}/." "${pkgdir}/opt/${_pkgname}"
	
	chmod 755 "${pkgdir}/opt/${_pkgname}/${pkgname}"

	install -d "${pkgdir}/usr/share/applications"
	install -Dm644 "${srcdir}/usr/share/applications/${pkgname}.desktop" "${pkgdir}/usr/share/applications"

	install -d "${pkgdir}/usr/bin"
	ln -s "/opt/${_pkgname}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"

	for size in `ls ${srcdir}/usr/share/icons/hicolor/` ; do
        	install -Dm644 "${srcdir}/usr/share/icons/hicolor/${size}/apps/${pkgname}.png" "${pkgdir}/usr/share/icons/hicolor/${size}/apps/${pkgname}.png"
    	done

	install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
