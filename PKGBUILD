# Contributor: Balló György <ballogyor+arch at gmail dot com>

pkgname=dooble
pkgver=2020.02.02
pkgrel=1
pkgdesc="Dooble is the weather bug browser."
arch=(x86_64)
url="https://textbrowser.github.io/dooble/"
license=('BSD')
depends=('qt5-webengine')
source=("$pkgname-$pkgver.tar.gz::https://github.com/textbrowser/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('18d1c1f78fa3f10cb4942e4d9d0369affccb1229135c97302041450dc5407c45')

prepare() {
	cd $pkgname-$pkgver/2.x
	sed -i '/QMAKE_LFLAGS_RELEASE += -Wl,-rpath/d' dooble.pro
	sed -i '/-Werror/d' dooble.pro
	sed -i 's|Exec=.*|Exec=dooble|
                s|Icon=.*|Icon=dooble|' dooble.desktop
	sed -i 's|QString path(QDir::currentPath());|QString path("/usr/share/dooble");|' Source/dooble_settings.cc
}

build() {
	cd $pkgname-$pkgver/2.x
	qmake
	make
}

package() {
	cd $pkgname-$pkgver/2.x
	install -Dm755 Dooble "$pkgdir/usr/bin/dooble"
	install -Dm644 Icons/Logo/dooble.png "$pkgdir/usr/share/pixmaps/dooble.png"
	install -Dm644 dooble.desktop "$pkgdir/usr/share/applications/dooble.desktop"
	install -Dm644 -t "$pkgdir/usr/share/dooble/Translations" Translations/dooble_*.qm
	install -Dm644 ../LICENSE "$pkgdir/usr/share/licenses/dooble/LICENSE"
}
