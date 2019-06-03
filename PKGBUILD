# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=viper4linux-gui
pkgver=1.9
pkgrel=1
pkgdesc="Unofficial UI for Viper4Linux"
arch=('any')
url="https://github.com/ThePBone/Viper4Linux-GUI"
license=('GPL3')
depends=('viper4linux' 'qt5-base' 'mesa')
makedepends=('cmake')
source=("$pkgname-$pkgver.tar.gz::https://github.com/ThePBone/Viper4Linux-GUI/archive/$pkgver.tar.gz"
		"viper4linux-gui.desktop")
sha256sums=('9edbe2140f507b58a4da860665001a0e1fe8361856081988446d643c49fab788'
            '012e8b24684d876240b3fd6d62741b236cd41bfbcaaf9b41bbe9f8375ca7df71')

build() {
	cd "Viper4Linux-GUI-$pkgver"
	qmake
	make PREFIX=/usr
}

package() {
	cd "Viper4Linux-GUI-$pkgver"
	make INSTALL_ROOT="$pkgdir" install
	mv $pkgdir/usr/bin/V4L_Frontend $pkgdir/usr/bin/viper-gui
	install -Dm644 $srcdir/${pkgname%-git}.desktop $pkgdir/usr/share/applications/${pkgname%-git}.desktop
	install -Dm644 viper.png $pkgdir/usr/share/icons/hicolor/512x512/apps/${pkgname%-git}.png
}
