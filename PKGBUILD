# Maintainer: Princeton Ferro (prince781) <princetonferro[at]gmail[dot]com)

pkgname=cambalache-git
_pkgname=cambalache
pkgver=0.6.0
pkgrel=1
pkgdesc='A new RAD tool for Gtk 4 and 3 with a clear MVC design and data model first philosophy'
url=https://gitlab.gnome.org/jpu/cambalache
arch=(any)
license=(GPL2)
depends+=('python-gobject' 'glib2' 'gtk3' 'python-lxml')
makedepends+=(git 'meson>=0.50.0')
conflicts=($_pkgname)
provides=($_pkgname=$pkgver)
source=('git+https://gitlab.gnome.org/jpu/cambalache.git')
sha512sums=('SKIP')

# pkgver() {
#     cd cambalache
#     git describe  --tags | sed 's/-/./g'
# }

build() {
    arch-meson cambalache build

    ninja -C build
}

package_cambalache-git() {
    DESTDIR="$pkgdir" ninja -C build install
}
