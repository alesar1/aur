# Maintainer:       zzjzxq33 <wojiushixxx at 126 dot com>
# Co-Maintainer:    Misaka13514 <Misaka13514 at gmail dot com>
pkgname=bbg
pkgver=20221202
pkgrel=1
pkgdesc="A static blog generator built with electron"
arch=('any')
url="https://github.com/bbg-contributors/bbg"
license=('Unlicense')
depends=('electron20')
conflicts=("${pkgname}-git")
source=(
	'bbg.sh'
	'icon.png'::'https://github.com/bbg-contributors/bbg-resources/raw/30dfd1cbdfbed040a74f05b0312302f3bf0c1c85/icon.png'
	'bbg.desktop'
	"app-${pkgver}.asar"::"${url}/releases/download/${pkgver}/app.asar"
)
sha256sums=(
	'57ce50ce74ddfe30d0c62e497a20c05b0e650bdf5039a65e17bc8090b62ff7a6'
	'd5f8f191d914a140ab11999a176b226523dd78e6865a75b483013846503a5228'
	'f503d93639c1f4d4e050eceb11adf64d369908e5941cfdbda3af30b2f3c73d96'
	'b934ca3a430b4322e3e92711bc6b796255b784921e06d0d9c399f7f0e89e32e0'
)

package() {
	cd "$srcdir"
	install -Dm755 "bbg.sh"             "${pkgdir}/usr/bin/${pkgname}"
	install -Dm644 "app-${pkgver}.asar" "${pkgdir}/usr/lib/${pkgname}/app.asar"
	install -Dm644 "bbg.desktop"        "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	install -Dm644 "icon.png"           "${pkgdir}/usr/share/icons/${pkgname}.png"

	# install bbgvertype: https://github.com/bbg-contributors/bbg/blob/f3d61ce4d79680329bad4cb014c909fb86037f38/App/start.js
	echo "aur-bbg-zzjzxq33-misaka13514" | install -Dm644 /dev/stdin "${pkgdir}/usr/share/bbg/bbgvertype"
}
