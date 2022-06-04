# Maintainer: Dominik Adrian Grzywak <starterx4 at gmail dot com>

pkgname=oftoast-bin
pkgver=0.1.2
pkgrel=1
pkgdesc="Open Fortress installing and updating tool. Frontend for the Toast (TVN)."
arch=(x86_64)
url="https://openfortress.fun"
license=(GPL3)
provides=('oflauncher' 'oflauncher-rei')
makedepends=("imagemagick")
optdepends=("steam")
source=('oftoast::https://toast.openfortress.fun/toast/oftoast-linux.bin'
		'https://github.com/int-72h/oflauncher-rei/raw/main/ofrei/toast.png'
		'oftoast-bin.desktop')
sha256sums=('c8718e0d97cb34c85dbcfbc357bbab91c2321d38deb73f49f86643cf3e55cc3d'
			'91a2daf9cb92bf552595e352536df8f58ac3a86f069fb48ccb605bc11f8eb7d8'
			'f5c1cf0758431ecac6d011a270c27d306a14ffe7cd6cc71a010c3462f3be32a1')

package() {
	install -Dm0755 oftoast -t "${pkgdir}"/usr/bin

	install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	for _size in "192x192" "128x128" "96x96" "64x64" "48x48" "32x32" "24x24" "22x22" "20x20" "16x16"
	do
		install -dm755 "${pkgdir}/usr/share/icons/hicolor/${_size}/apps"
		convert "${srcdir}/toast.png" -strip -resize "${_size}" "${pkgdir}/usr/share/icons/hicolor/${_size}/apps/toast.png"
	done
}
