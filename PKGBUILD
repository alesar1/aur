# Maintainer: nano thirteen <nano13@gmx.net>

_pkgname=('trinitrotoluol')
pkgname=('trinitrotoluol-git')
pkgver=55
pkgrel=1
pkgdesc='A software for managing your supporters and your mailings)'
arch=('any')
licence=('gpl')
url='https://tambi-soft.github.io'
makedepends=('git')
depends=('qt5-base' 'qt5-webview' 'qt5-charts')
source=(${_pkgname}::git+https://github.com/tambi-soft/trinitrotoluol.git)
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git rev-list --count HEAD
}

build() {
    cd "$srcdir"/"$_pkgname"
    qmake-qt5 -o Makefile trinitrotoluol.pro
    make
    make clean
}

package() {
    install -D -m 755 ${srcdir}/${_pkgname}/debug/trinitrotoluol ${pkgdir}/usr/bin/trinitrotoluol
    install -D -m 644 ${srcdir}/${_pkgname}/assets/logo.ico ${pkgdir}/usr/share/icons/hicolor/128x128/apps/trinitrotoluol_logo.ico
    install -D -m 644 ${srcdir}/${_pkgname}/assets/trinitrotoluol.desktop ${pkgdir}/usr/share/applications/trinitrotoluol.desktop
}
