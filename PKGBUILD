# Maintainer: Angelo Dalzotto <angelodalzotto97 at gmail dot com>
pkgname=ns-usbloader
pkgver=4.1
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
sha256sums=('623f38f0f752eb7ca44bd96b83dd1c8d0b94d854468dc9f453a2ff3e79869466')

package() {
	install -Dm 644 res/app_icon32x32.png "${pkgdir}/usr/share/icons/hicolor/32x32/apps/ns-usbloader.png"
	install -Dm 644 res/app_icon48x48.png "${pkgdir}/usr/share/icons/hicolor/48x48/apps/ns-usbloader.png"
	install -Dm 644 res/app_icon64x64.png "${pkgdir}/usr/share/icons/hicolor/64x64/apps/ns-usbloader.png"
	install -Dm 644 res/app_icon128x128.png "${pkgdir}/usr/share/icons/hicolor/128x128/apps/ns-usbloader.png"
	install -Dm 755 "$pkgname-$pkgver.jar" "${pkgdir}/usr/share/java/ns-usbloader/ns-usbloader.jar"
	install -Dm 755 ../ns-usbloader "${pkgdir}/usr/bin/ns-usbloader"
	install -Dm 644 ../ns-usbloader.desktop "${pkgdir}/usr/share/applications/ns-usbloader.desktop"
}
