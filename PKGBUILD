# Maintainer: Angelo Dalzotto <angelodalzotto97 at gmail dot com>
pkgname=ns-usbloader
pkgver=4.3
pkgrel=1
pkgdesc="Awoo Installer/TinFoil/GoldLeaf NSPs (and other files) uploader and RCM tool."
arch=('any')
url="https://github.com/developersu/ns-usbloader"
license=('GPL3')
depends=(
	'java-runtime'
)
optdepends=(
	'nx-udev: udev rules to run without root'
)
source=("https://github.com/developersu/ns-usbloader/releases/download/v$pkgver/$pkgname-$pkgver.jar")
sha256sums=('2926c8183389599ebf2ce4d53a96d05a8c344385114e1e28aedd32d43de406d8')

package() {
	install -Dm 644 res/app_icon32x32.png "${pkgdir}/usr/share/icons/hicolor/32x32/apps/ns-usbloader.png"
	install -Dm 644 res/app_icon48x48.png "${pkgdir}/usr/share/icons/hicolor/48x48/apps/ns-usbloader.png"
	install -Dm 644 res/app_icon64x64.png "${pkgdir}/usr/share/icons/hicolor/64x64/apps/ns-usbloader.png"
	install -Dm 644 res/app_icon128x128.png "${pkgdir}/usr/share/icons/hicolor/128x128/apps/ns-usbloader.png"
	install -Dm 755 "$pkgname-$pkgver.jar" "${pkgdir}/usr/share/java/ns-usbloader/ns-usbloader.jar"
	install -Dm 755 ../ns-usbloader "${pkgdir}/usr/bin/ns-usbloader"
	install -Dm 644 ../ns-usbloader.desktop "${pkgdir}/usr/share/applications/ns-usbloader.desktop"
}
