# Maintainer: Quentin Glidic <sardemff7@eventd.org>

pkgname=eventd
pkgver=0.21.0
_pkgdir=${pkgname}-${pkgver}
pkgrel=1
pkgdesc="A small daemon to act on remote or local events"
arch=(
    i686
    x86_64
)
url="https://www.eventd.org"
license=(
    GPL3
    LGPL3
    MIT
)
depends=(
    'cairo>=1.12.0'
    gdk-pixbuf2
    'glib2>=2.40.0'
    glib-networking
    pango
    libsystemd
    libxcb
    util-linux
    xcb-util
    xcb-util-wm
)
makedepends=(
    libxslt
    docbook-xsl
)
optdepends=(
    'avahi: DNS-SD support'
    'gssdp: SSDP support'
    'librsvg: SVG images support'
    'libsoup: WebSocket support'
)
options=(
    !strip
)
source=(
    https://www.eventd.org/download/${pkgname}/${pkgname}-${pkgver}.tar.xz
)
sha256sums=(
    f4e1bf014e3e17bf79d3b2a61d947cf4d34000d35fab0b90b869f33f002d2349
)

build() {
    local params=(
        --prefix=/usr
        --enable-systemd
        --disable-introspection
        --disable-nd-wayland
        --disable-im
        --disable-sound
    )

    cd "${srcdir}"/${_pkgdir}
    ./configure "${params[@]}"

    make
}

check() {
    cd "${srcdir}"/${_pkgdir}
    make check
}

package() {
    cd "${srcdir}"/${_pkgdir}
    make DESTDIR="${pkgdir}" install
}
