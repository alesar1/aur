# Author: Robert Tari <robert at tari dot in>
# Maintainer: Robert Tari <robert at tari dot in>

pkgname="odio-edit"
pkgver="22.10.31"
pkgrel="1"
pkgdesc="A lightweight audio wave editor"
arch=("i686" "x86_64" "pentium4")
url="https://tari.in/www/software/odio-edit"
license=("GPL3")
depends=("gst-plugins-good" "gst-plugins-bad" "gst-plugins-ugly" "gtk3" "dconf" "gst-libav" "libodiosacd")
makedepends=("gst-plugins-base-libs")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/tari01/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("4a2cdbed1a78b39a61322a446bf87292")
options=("!emptydirs")

build()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    make
}

package()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    make DESTDIR="$pkgdir/" install
}
