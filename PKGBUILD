# Maintainer: Patrizio Bekerle <patrizio at bekerle dot com>

pkgname=qownnotes
pkgver=17.08.6
tag="4b5e3ed57d6e2e07d6ee27d73fe416468034aade"
pkgrel=1
pkgdesc="Open source notepad and todo list manager with markdown support and ownCloud/Nextcloud integration"
arch=('i686' 'x86_64' 'armv7l')
url='http://www.qownnotes.org/'
license=('GPL2')
groups=('qownnotes')
depends=('qt5-base' 'qt5-svg' 'qt5-declarative' 'openssl')
makedepends=('qt5-tools')
source=("http://downloads.sourceforge.net/project/${pkgname}/src/${pkgname}-${pkgver}.tar.xz")
sha256sums=('5f3443a32567444a609644d0dbd85eab1d961312e0ba6ef80cb931042e30edd4')

prepare() {
    cd "${pkgname}-${pkgver}"
    echo "#define RELEASE \"AUR\"" > release.h
}

build() {
    cd "${pkgname}-${pkgver}"
    qmake QMAKE_CFLAGS_RELEASE="${CFLAGS}" QMAKE_CXXFLAGS_RELEASE="${CXXFLAGS}" QMAKE_LFLAGS_RELEASE="${LDFLAGS}"
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
