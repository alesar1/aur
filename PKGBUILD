# Maintainer: Patrizio Bekerle <patrizio at bekerle dot com>

pkgname=qownnotes
pkgver=0.84
pkgrel=1
pkgdesc="Open source notepad and todo list manager with ownCloud integration"
arch=('i686' 'x86_64')
url='http://www.qownnotes.org/'
license=('GPL2')
groups=('qownnotes')
depends=('qt5-base' 'qt5-svg' 'qt5-script')
makedepends=('git' 'qt5-tools')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source=("https://github.com/pbek/QOwnNotes.git")
md5sums=('SKIP')

build() {
	cd "${pkgname}-${pkgver}/src"
	qmake
	make
}

package() {
	cd "${pkgname}-${pkgver}/src"

    install -D -m 0755 QOwnNotes $pkgdir/usr/bin/QOwnNotes
    install -D -m 0644 QOwnNotes.desktop $pkgdir/usr/share/applications/QOwnNotes.desktop
    install -D -m 0644 images/icons/128x128/QOwnNotes.png $pkgdir/usr/share/pixmaps/QOwnNotes.png
    install -D -m 0644 images/icons/16x16/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/16x16/apps/QOwnNotes.png
    install -D -m 0644 images/icons/24x24/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/24x24/apps/QOwnNotes.png
    install -D -m 0644 images/icons/32x32/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/32x32/apps/QOwnNotes.png
    install -D -m 0644 images/icons/48x48/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/48x48/apps/QOwnNotes.png
    install -D -m 0644 images/icons/64x64/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/64x64/apps/QOwnNotes.png
    install -D -m 0644 images/icons/96x96/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/96x96/apps/QOwnNotes.png
    install -D -m 0644 images/icons/128x128/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/128x128/apps/QOwnNotes.png
    install -D -m 0644 images/icons/256x256/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/256x256/apps/QOwnNotes.png
    install -D -m 0644 images/icons/512x512/QOwnNotes.png $pkgdir/usr/share/icons/hicolor/512x512/apps/QOwnNotes.png
    install -D -m 0644 images/icons/scalable/QOwnNotes.svg $pkgdir/usr/share/icons/hicolor/scalable/apps/QOwnNotes.svg
}
