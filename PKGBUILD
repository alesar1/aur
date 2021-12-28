# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=gupnp
pkgname=lib32-gupnp
pkgver=1.4.1
pkgrel=1
pkgdesc="An object-oriented UPNP framework (32-bit)"
arch=(x86_64)
url="https://wiki.gnome.org/Projects/GUPnP"
license=(LGPL)
depends=(lib32-gssdp gupnp)
makedepends=(git gobject-introspection meson vala)
_commit=21cf45befcdfbda8882ff4805f9e791270e28274 # tags/gupnp-1.4.1^0
source=("git+https://gitlab.gnome.org/GNOME/gupnp.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd gupnp

    git describe --tags | sed 's/^gupnp-//;s/-/+/g'
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    arch-meson gupnp build \
        --libdir='/usr/lib32' \
        -Dgtk_doc=false \
        -Dintrospection=false \
        -Dexamples=false

    meson compile -C build
}

check() {
    meson test -C build --print-errorlogs
}

package() {
    meson install -C build --destdir "$pkgdir"

    rm -rf "${pkgdir}"/usr/{bin,include,share}
}
