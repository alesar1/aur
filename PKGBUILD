# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=viper4linux-gui
pkgver=1.12
pkgrel=1
pkgdesc="Official UI for Viper4Linux"
arch=('any')
url="https://github.com/ThePBone/Viper4Linux-GUI"
license=('GPL3')
depends=('viper4linux' 'qt5-base' 'mesa')
makedepends=('cmake')
source=("$pkgname-$pkgver.tar.gz::https://github.com/ThePBone/Viper4Linux-GUI/archive/$pkgver.tar.gz"
		"viper4linux-gui.desktop")
sha256sums=('7e7243187412be7915739540f4a1812ce0f48af908cbf66ea7a4a716391801ff'
            '05a46b8ad3508e9275388d9255247cda09977eb8087fa5dd96d04bc25c17a77c')

build() {
	cd "Viper4Linux-GUI-$pkgver"
	qmake
	make PREFIX=/usr
}

package() {
	cd "Viper4Linux-GUI-$pkgver"
	install -Dm755 V4L_Frontend $pkgdir/usr/bin/viper-gui
	install -Dm644 $srcdir/${pkgname%-git}.desktop $pkgdir/usr/share/applications/${pkgname%-git}.desktop
	install -Dm644 viper.png $pkgdir/usr/share/pixmaps/viper-gui.png
}
