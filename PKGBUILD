# Maintainer: Patrizio Bekerle <patrizio at bekerle dot com>

pkgname=qownnotes
pkgver=17.07.8
tag="9692f4cf8289e6a63a3c842209a32425d9deef85"
pkgrel=1
pkgdesc="Open source notepad and todo list manager with markdown support and ownCloud/Nextcloud integration"
arch=('i686' 'x86_64' 'armv7l')
url='http://www.qownnotes.org/'
license=('GPL2')
groups=('qownnotes')
depends=('qt5-base' 'qt5-svg' 'qt5-declarative' 'openssl')
makedepends=('qt5-tools')
source=("http://downloads.sourceforge.net/project/${pkgname}/src/${pkgname}-${pkgver}.tar.xz")
sha256sums=('753931a3de2c18588e6550c9f8b2b42ad30b8f01a06794c93ce20ac43826d932')

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
