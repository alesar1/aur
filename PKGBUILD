# Maintainer: Pellegrino Prevete <pellegrinoprevete@gmail.com>
# Contributor: Philip Goto <philip.goto@gmail.com>
# Contributor: Davide Depau <davide@depau.eu>
# Contributor: Rafael Fontenelle <rafaelff@gnome.org>

_pkgname=libadwaita
pkgname=$_pkgname-git
pkgver=1.1.0.r.g73c17e0
pkgrel=3
pkgdesc="Library full of GTK widgets for mobile phones"
url="https://gitlab.gnome.org/exalm/$_pkgname"
license=(LGPL)
arch=(i686 x86_64 armv7h aarch64)
depends=(gtk4)
makedepends=(git gobject-introspection meson vala wayland-protocols)
checkdepends=(xorg-server-xvfb)
source=("git+$url")
provides=($_pkgname)
conflicts=($_pkgname)
md5sums=(SKIP)

pkgver() {
  cd $_pkgname
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
    arch-meson $_pkgname build -Dgtk_doc=false -Dexamples=true
    DESTDIR="$pkgdir" ninja -C build
}

package() {
    DESTDIR="$pkgdir" ninja -C build install
}
