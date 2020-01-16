# Maintainer: Johannes Wienke <languitar@semipol.de>

pkgname=drawio-desktop-bin
pkgver=12.5.3
pkgrel=1
pkgdesc="Diagram drawing application built on web technology"
arch=('x86_64')
url="https://github.com/jgraph/drawio-desktop"
license=('Apache')
depends=(
    "alsa-lib"
    "at-spi2-atk"
    "atk"
    "gconf"
    "gdk-pixbuf2"
    "gtk3"
    "libcups"
    "libnotify"
    "libx11"
    "libxcb"
    "libxcomposite"
    "libxcursor"
    "libxdamage"
    "libxext"
    "libxfixes"
    "libxi"
    "libxrandr"
    "libxrender"
    "libxss"
    "libxss"
    "libxtst"
    "nspr"
    "nss"
    "pango"
)
provides=('drawio-desktop')
conflicts=('drawio-desktop')
optdepends=()
makedepends=()
source=("${pkgname}-${pkgver}.deb::https://github.com/jgraph/drawio-desktop/releases/download/v${pkgver}/draw.io-amd64-${pkgver}.deb")
sha256sums=('15f292a82b4d9e252ffc541d098cbe4bc84d90c1e24cb38d4284282f96d0ff4b')

prepare() {
    cd "${srcdir}"
    /usr/bin/ar p "${pkgname}-${pkgver}.deb" data.tar.xz | bsdtar xf -
}

package() {
    cd "${srcdir}"
    cp -R opt "${pkgdir}/opt"
    cp -R usr "${pkgdir}/usr"
    chmod 4755 "${pkgdir}/opt/draw.io/chrome-sandbox"
    mkdir -p "${pkgdir}/usr/bin"
    ln -sf "/opt/draw.io/drawio" "${pkgdir}/usr/bin/draw.io"
    ln -sf "/opt/draw.io/drawio" "${pkgdir}/usr/bin/drawio"
}
