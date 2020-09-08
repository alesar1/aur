# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=libhandy-git
pkgver=0.91.0.r1.ge3fb740
pkgrel=1
pkgdesc="Library full of GTK+ widgets for mobile phones"
url="https://gitlab.gnome.org/GNOME/libhandy"
license=(LGPL2.1)
arch=(i686 x86_64 armv7h aarch64)
depends=(gtk3)
makedepends=(git glade gobject-introspection meson vala)
provides=("libhandy=1" libhandy-1.so libhandy1)
conflicts=("libhandy>=0.80.0" libhandy1)
source=("git+$url.git")
md5sums=(SKIP)

pkgver() {
    cd libhandy
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    arch-meson libhandy build -Dgtk_doc=true -Dexamples=false
    ninja -C build
}

check() {
    meson test -C build --print-errorlogs
}

package() {
    DESTDIR="$pkgdir" meson install -C build
}
