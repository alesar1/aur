# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=gssdp
pkgname=lib32-gssdp
pkgver=1.2.3
pkgrel=1
pkgdesc="A GObject-based API for handling resource discovery and announcement over SSDP (32-bit)"
arch=(x86_64)
url="http://gupnp.org/"
license=(LGPL)
depends=(lib32-libsoup gssdp)
makedepends=(git gobject-introspection lib32-gtk3 meson vala)
_commit=a4eb74313a3df17c3ac5b99f3131522e6e8bccf4  # tags/gssdp-1.2.3^0
source=("git+https://git.gnome.org/browse/gssdp#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/^gssdp-//;s/-/+/g'
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    arch-meson $_basename build \
        --libdir='/usr/lib32' \
        -Dgtk_doc=false \
        -Dsniffer=false \
        -Dintrospection=false \
        -Dexamples=false

    meson compile -C build
}

check() {
    meson test -C build --print-errorlogs
}

package() {
    DESTDIR="$pkgdir" meson install -C build

    rm -rf "${pkgdir}/usr/include"
}
