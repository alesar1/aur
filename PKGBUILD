# Maintainer: Patrizio Bekerle <patrizio at bekerle dot com>

pkgname=qownnotes
pkgver=17.04.4
tag="f7b41784d7f530235b57dda23d205def803c54a5"
pkgrel=1
pkgdesc="Open source notepad and todo list manager with markdown support and ownCloud/Nextcloud integration"
arch=('i686' 'x86_64' 'armv7l')
url='http://www.qownnotes.org/'
license=('GPL2')
groups=('qownnotes')
depends=('qt5-base' 'qt5-svg' 'qt5-declarative' 'openssl')
makedepends=('qt5-tools')
source=("http://downloads.sourceforge.net/project/${pkgname}/src/${pkgname}-${pkgver}.tar.xz")
sha256sums=('b2662422d44bc28aab5a848c164900b2d7f90524279ca7534161fe6e3dd8d631')

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

    # install application
    install -D -m755 QOwnNotes "${pkgdir}/usr/bin/QOwnNotes"

    # install visuals
    install -D -m644 QOwnNotes.desktop "${pkgdir}/usr/share/applications/QOwnNotes.desktop"
    install -D -m644 "images/icons/128x128/apps/QOwnNotes.png" "${pkgdir}/usr/share/pixmaps/QOwnNotes.png"
    for format in {16x16,24x24,32x32,48x48,64x64,96x96,128x128,256x256,512x512}; do
        install -D -m644 "images/icons/${format}/apps/QOwnNotes.png" "${pkgdir}/usr/share/icons/hicolor/$format/apps/QOwnNotes.png"
    done
    install -D -m644 "images/icons/scalable/apps/QOwnNotes.svg" "${pkgdir}/usr/share/icons/hicolor/scalable/apps/QOwnNotes.svg"

    # install languages
    install -d "${pkgdir}/usr/share/QOwnNotes/languages/"
    install -D -m644 languages/*.qm "${pkgdir}/usr/share/QOwnNotes/languages/"
}
