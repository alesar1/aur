# Maintainer: Patrizio Bekerle <patrizio at bekerle dot com>

pkgname=qownnotes
pkgver=1.2.4
tag="f500ccd87cb97fb69df00355c6c9cad72f30213b"
pkgrel=1
pkgdesc="Open source notepad and todo list manager with markdown support and ownCloud integration"
arch=('i686' 'x86_64')
url='http://www.qownnotes.org/'
license=('GPL2')
groups=('qownnotes')
depends=('qt5-base' 'qt5-svg' 'qt5-script' 'openssl')
makedepends=('git' 'qt5-tools')
source=("git://github.com/pbek/QOwnNotes.git#tag=$tag"
        "git://github.com/pbek/qmarkdowntextedit.git"
        "git://github.com/pbek/qt-piwik-tracker.git")
md5sums=('SKIP'
         'SKIP'
         'SKIP')

prepare() {
    cd "${srcdir}/QOwnNotes"

    git config submodule.src/editor/libs/qmarkdowntextedit.url "$srcdir/qmarkdowntextedit"
    git config submodule.src/editor/libs/qt-piwik-tracker.url "$srcdir/qt-piwik-tracker"
    git submodule update --init

    echo "#define VERSION \"${pkgver}\"" > src/version.h
    echo "#define RELEASE \"AUR\"" > src/release.h
}

build() {
    cd "${srcdir}/QOwnNotes/src"

    qmake
    make
}

package() {
    cd "${srcdir}/QOwnNotes/src"

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
}
