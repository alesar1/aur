# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev@orum.in>
# Contributor: Adam <adam900710@gmail.com>

_basename=gst-plugins-ugly
pkgname=lib32-gst-plugins-ugly
pkgver=1.18.2
pkgrel=1
pkgdesc="Multimedia graph framework - ugly plugins (32-bit)"
url="https://gstreamer.freedesktop.org/"
arch=(x86_64)
license=(LGPL)
depends=(lib32-gst-plugins-base-libs lib32-libdvdread lib32-libmpeg2 lib32-a52dec lib32-libsidplay
         lib32-libcdio lib32-x264 lib32-opencore-amr gst-plugins-ugly)
makedepends=(git meson python)
_commit=45c7522506ff49fcde0933c65c1eba48e1df7500  # tags/1.18.2^0
source=("git+https://gitlab.freedesktop.org/gstreamer/gst-plugins-ugly.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/-/+/g'
}

prepare() {
    cd $_basename
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    arch-meson $_basename build \
        --libdir=lib32 \
        --libexecdir=lib32 \
        -D doc=disabled \
        -D gobject-cast-checks=disabled \
        -D package-name="GStreamer Ugly Plugins (Arch Linux)" \
        -D package-origin="https://www.archlinux.org/"

    meson compile -C build
}

check() {
    meson test -C build --print-errorlogs
}

package() {
    DESTDIR="$pkgdir" meson install -C build

    rm -rf "${pkgdir}/usr/share"
}
