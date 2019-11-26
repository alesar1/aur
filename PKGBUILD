# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev@orum.in>
# Contributor: Adam <adam900710@gmail.com>

_basename=gst-plugins-ugly
pkgname=lib32-gst-plugins-ugly
pkgver=1.16.1
pkgrel=1
pkgdesc="GStreamer open-source multimedia framework ugly plugins (32-bit)"
url="https://gstreamer.freedesktop.org/"
arch=(x86_64)
license=(LGPL)
depends=(lib32-gst-plugins-base-libs lib32-libdvdread lib32-libmpeg2 lib32-a52dec lib32-libsidplay
         lib32-libcdio lib32-x264 lib32-opencore-amr gst-plugins-ugly)
makedepends=(git meson python)
_commit=34c7d2b37b1ef73206e282e15d6382fae2182137  # tags/1.16.1^0
source=("git+https://gitlab.freedesktop.org/gstreamer/gst-plugins-ugly.git#commit=$_commit"
        "gst-common::git+https://gitlab.freedesktop.org/gstreamer/common.git")
sha256sums=('SKIP'
            'SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/-/+/g'
}

prepare() {
    cd $_basename

    git submodule init
    git config --local submodule.common.url "$srcdir/gst-common"
    git submodule update
}

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    arch-meson $_basename build \
        --libdir=/usr/lib32 \
        -D gobject-cast-checks=disabled \
        -D glib-asserts=disabled \
        -D glib-checks=disabled \
        -D package-name="GStreamer Ugly Plugins (Arch Linux)" \
        -D package-origin="https://www.archlinux.org/"

    ninja -C build
}

check() {
    meson test -C build --print-errorlogs
}

package() {
    DESTDIR="$pkgdir" meson install -C build

    rm -rf "${pkgdir}/usr/share"
}
