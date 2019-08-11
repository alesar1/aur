# Maintainer: Helder Bertoldo <helder.bertoldo@gmail.com>
# Contributor:

_gitname=proton
_author=raggesilver-proton
pkgname=("${_gitname}-ide-git")
pkgver=r126.ca6ae32
pkgrel=1
pkgdesc="A new IDE made with Vala."
arch=('i686' 'x86_64')
url="https://gitlab.com/${_author}/${_gitname}"
license=('GPL3')
depends=('gtk3' 'granite' 'glib2' 'gtksourceview4' 'json-glib' 'libdazzle' 'vte3-git')
optdepends=('')
makedepends=('git' 'meson' 'vala')
provides=("${_gitname}-ide")
conflicts=("${_gitname}-ide")
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
    cd "${_gitname}"
    ( set -o pipefail
        git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
        printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

build() {
    cd "${_gitname}/"
    meson . _build --prefix=/usr
    ninja -C _build
}

package() {
    cd "${_gitname}/"
    DESTDIR="${pkgdir}" ninja -C _build install
}

