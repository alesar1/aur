# Maintainer: Mufeed Ali <fushinari@protonmail.com>

pkgname=libhandy1
_author=GNOME
_gitname=libhandy
pkgver=0.83.0
pkgrel=1
pkgdesc="Library full of GTK+ widgets for mobile phones (1.0, can be installed alongside 0.0)"
url="https://gitlab.gnome.org/GNOME/libhandy"
license=(LGPL2.1)
arch=(i686 x86_64 armv7h aarch64)
depends=(gtk3)
conflicts=(libhandy-git)
makedepends=(git glade gobject-introspection meson vala)
source=("https://gitlab.gnome.org/$_author/$_gitname/-/archive/$pkgver/$_gitname-$pkgver.tar.gz")
sha256sums=('64b4036a97fc89430ef2388dcded2a89a0d2728b9f0d7c03f5990cb0a05a8b9c')

build() {
    arch-meson $_gitname-$pkgver build -Dgtk_doc=true -Dexamples=false
    ninja -C build
}

check() {
    meson test -C build --print-errorlogs
}

package() {
    DESTDIR="$pkgdir" meson install -C build
}
