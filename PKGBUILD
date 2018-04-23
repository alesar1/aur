# Maintainer: Josip Ponjavic <josipponjavic at gmail dot com>
# Contributor:

pkgname=marker-git
pkgver=2018.03.09.r87.g4e0d3ef6
pkgrel=1
pkgdesc='Markdown editor for linux made with Gtk+-3.0'
arch=('x86_64')
url='https://github.com/fabiocolacio/Marker'
license=('GPL3')
depends=('gtksourceview3' 'gtkspell3' 'webkit2gtk')
makedepends=('git' 'meson')
optdepends=('pandoc: export to HTML, PDF, RTF, OTF, DOCX, LaTeX')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
options=(!buildflags)
source=("${pkgname%-*}::git+${url}.git"
        'scidown::git+https://github.com/Mandarancio/scidown.git'
        'charter::git+https://github.com/Mandarancio/charter.git'
        'tinyexpr::git+https://github.com/codeplea/tinyexpr.git')
sha256sums=('SKIP' 'SKIP' 'SKIP' 'SKIP')

pkgver() {
    cd ${pkgname%-*}
    git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
    cd ${pkgname%-*}
    git submodule init
    git config submodule.src/scidown.url "$srcdir/scidown"
    git submodule update src/scidown
    cd src/scidown
    git submodule init
    git config submodule.src/charter.url "$srcdir/charter"
    git submodule update src/charter
    cd src/charter
    git submodule init
    git config submodule.src/tinyexpr.url "$srcdir/tinyexpr"
    git submodule update src/tinyexpr

    #fix "Cant get charter to work #187"
    sed -i 's/en_US/C/' ${srcdir}/${pkgname%-*}/src/scidown/src/charter/src/svg.c
}

build() {
    arch-meson ${pkgname%-*} build
    ninja -C build
}

package() {
    DESTDIR="$pkgdir" ninja -C build install
}
