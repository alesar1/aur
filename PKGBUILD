# Maintainer: YoyPa <yoann dot p dot public at gmail dot com>
pkgname=fluffy-switch
pkgver=2.6
pkgrel=4
pkgdesc="Goldtree and Tinfoil GUI for USB install on switch"
arch=('any')
url="https://github.com/fourminute/Fluffy"
license=('GPL')
depends=(
	'python-pyusb'
	'libusb'
	'python-pyqt5'
	'tk'
)
optdepends=(
	'python-qdarkstyle: dark theme toggle in fluffy'
)
backup=(
	'etc/udev/rules.d/80-fluffy-switch.rules'
)
source=("Fluffy-${pkgver}.tar.gz::https://github.com/fourminute/Fluffy/archive/v${pkgver}.tar.gz")
sha256sums=('a35ac4e399ef65c4a2139a79a4be29874ce0c657b8fb3147ab472939e2a4b9cf')

# Change .desktop file PATH from /tmp to ~/.config/fluffy (Make fluffy config file persistent)
prepare() {
	cd "Fluffy-${pkgver}"
	sed -e "s|/tmp|$HOME/.config/fluffy|" -i linux/fluffy.desktop
}

package() {
	mkdir -p "${pkgdir}$HOME/.config/fluffy"
	chown $USER:$USER "${pkgdir}$HOME/.config/fluffy"
	cd "Fluffy-${pkgver}"
	install -Dm 644 linux/80-fluffy-switch.rules "${pkgdir}/etc/udev/rules.d/80-fluffy-switch.rules"
	install -Dm 644 linux/fluffy.desktop "${pkgdir}/usr/share/applications/fluffy.desktop"
	install -Dm 644 icons/16x16/fluffy.png "${pkgdir}/usr/share/icons/hicolor/16x16/apps/fluffy.png"
	install -Dm 644 icons/24x24/fluffy.png "${pkgdir}/usr/share/icons/hicolor/24x24/apps/fluffy.png"
	install -Dm 644 icons/32x32/fluffy.png "${pkgdir}/usr/share/icons/hicolor/32x32/apps/fluffy.png"
	install -Dm 644 icons/48x48/fluffy.png "${pkgdir}/usr/share/icons/hicolor/48x48/apps/fluffy.png"
	install -Dm 644 icons/64x64/fluffy.png "${pkgdir}/usr/share/icons/hicolor/64x64/apps/fluffy.png"
	install -Dm 644 icons/128x128/fluffy.png "${pkgdir}/usr/share/icons/hicolor/128x128/apps/fluffy.png"
	install -Dm 755 fluffy.pyw "${pkgdir}/usr/bin/fluffy"
}
