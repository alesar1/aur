# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: ftsell <aur@finn-thorben.me>
pkgname=pop-shell-shortcuts-git
pkgver=r27.a653635
pkgrel=1
epoch=1
pkgdesc="Application for displaying and demoing Pop Shell shortcuts"
arch=('x86_64')
url="https://github.com/pop-os/shell-shortcuts"
license=('GPL3')
depends=('gtk3')
makedepends=('git' 'rust')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/pop-os/shell-shortcuts.git')
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/shell-shortcuts"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir/shell-shortcuts"
    make prefix=/usr
}

package() {
    cd "$srcdir/shell-shortcuts"
    make prefix=/usr DESTDIR="$pkgdir" install
}

