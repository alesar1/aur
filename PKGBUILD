# Maintainer: Patrizio Bekerle <patrizio at bekerle dot com>

pkgname=qownnotes
pkgver=16.06.1
tag="870e6ba32f5779c937b1aaef1b686703eb3a2e3e"
pkgrel=1
pkgdesc="Open source notepad and todo list manager with markdown support and ownCloud integration"
arch=('i686' 'x86_64' 'armv7l')
url='http://www.qownnotes.org/'
license=('GPL2')
groups=('qownnotes')
depends=('qt5-base' 'qt5-svg' 'qt5-declarative' 'openssl')
makedepends=('qt5-tools')
source=("http://downloads.sourceforge.net/project/${pkgname}/src/${pkgname}-${pkgver}.tar.xz")
sha256sums=('dfd77368b69159df082d9d1498a476934854c16ed9bba77466857397bef9aca5')

prepare() {
	cd "${pkgname}-${pkgver}"
    echo "#define RELEASE \"AUR\"" > release.h
}

build() {
	cd "${pkgname}-${pkgver}"
    qmake
    make
}

package() {
	cd "${pkgname}-${pkgver}"

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
    install -D -m 0644 languages/QOwnNotes_en.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_en.qm
    install -D -m 0644 languages/QOwnNotes_de.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_de.qm
    install -D -m 0644 languages/QOwnNotes_fr.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_fr.qm
    install -D -m 0644 languages/QOwnNotes_pl.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_pl.qm
    install -D -m 0644 languages/QOwnNotes_zh.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_zh.qm
    install -D -m 0644 languages/QOwnNotes_ru.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_ru.qm
    install -D -m 0644 languages/QOwnNotes_pt.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_pt.qm
    install -D -m 0644 languages/QOwnNotes_es.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_es.qm
    install -D -m 0644 languages/QOwnNotes_nl.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_nl.qm
    install -D -m 0644 languages/QOwnNotes_hu.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_hu.qm
    install -D -m 0644 languages/QOwnNotes_ja.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_ja.qm
    install -D -m 0644 languages/QOwnNotes_it.qm $pkgdir/usr/share/QOwnNotes/languages/QOwnNotes_it.qm
}
