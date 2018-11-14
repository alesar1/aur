# Maintainer: Helder Bertoldo <helder.bertoldo@gmail.com>
# Contributor: 

_author=monday15
_gitname=lounge-gtk-theme
pkgname=("${_gitname}-git")
pkgver=latest
pkgrel=1
pkgdesc="Simple and clean theme, based on original Adwaita"
arch=('i686' 'x86_64')
url="https://github.com/${_author}/${_gitname}"
license=('GPL3')
depends=('gtk3' 'vala' 'granite')
optdepends=('')
makedepends=('git' 'meson' 'ninja'
			'sassc')
provides=("${_gitname}")
conflicts=("${_gitname}")
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

