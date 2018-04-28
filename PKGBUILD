# Maintainer: Josip Ponjavic <josipponjavic at gmail dot com>
# Contributor:

pkgname=marker
pkgver=2018.04.27
pkgrel=1
pkgdesc='Markdown editor for linux made with Gtk+-3.0'
arch=('x86_64')
url='https://github.com/fabiocolacio/Marker'
license=('GPL3')
depends=('gtksourceview3' 'gtkspell3' 'webkit2gtk')
makedepends=('meson')
optdepends=('pandoc: export to HTML, PDF, RTF, OTF, DOCX, LaTeX')
options=(!buildflags)
source=("${pkgname}-${pkgver}.zip::${url}/releases/download/${pkgver}/${pkgname}.zip")
sha256sums=('238bae135712f8f844d71e19d429916c299e484718d8896bbb975446f0ab09f9')

prepare() {
    #fix "Cant get charter to work #187"
    sed -i 's/en_US/C/' ${pkgname}/src/scidown/src/charter/src/svg.c
}

build() {
    arch-meson ${pkgname} build
    ninja -C build
}

package() {
    DESTDIR="$pkgdir" ninja -C build install
}
