# $Id: $
# Maintainer: David C. Rankin <drankinatty @ gmail.com>

pkgname=gtkwrite
pkgver=0.1.3
pkgrel=1
pkgdesc="GTKwrite Text Editor with Syntax Highlight written in C, GTK+2 & GtkSourceView2"
url="https://github.com/drankinatty/${pkgname}"
license=('GPL-2.0+')
provides=('gtkwrite')
arch=('i686' 'x86_64')
options=('!emptydirs')
makedepends=('gcc' 'glib2' 'gtk2' 'gtksourceview2')
source=("https://github.com/drankinatty/${pkgname}/archive/v${pkgver}.tar.gz")
validpgpkeys=()
sha1sums=('fe903f20c030a35fcf2db6c2d705bf2ef0d38ba1')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    msg2 'prepare() gtkwrite - done'
}

build() {
    msg2 'build() gtkwrite'
    cd "${srcdir}/${pkgname}-${pkgver}"
    make with=-DWGTKSOURCEVIEW2
}

package() {
    msg2 'package() gtkwrite'
    cd "${srcdir}/${pkgname}-${pkgver}"
    
    install -d -m755 ${pkgdir}/usr/bin
    install -m755 bin/${pkgname} ${pkgdir}/usr/bin

    install -D -m644 gpl-2.0.txt "${pkgdir}/usr/share/licenses/${pkgname}/gpl-2.0.txt"
    install -D -m644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
