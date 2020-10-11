# Author: Robert Tari <robert at tari dot in>
# Maintainer: Robert Tari <robert at tari dot in>

pkgname="keyfault"
pkgver="20.4.5"
pkgrel="1"
pkgdesc="Keyboard Auto-Default"
arch=("i686" "x86_64" "pentium4")
url="https://tari.in/www/software/keyfault"
license=("GPL3")
depends=("libxss")
makedepends=("git" "gcc" "libxss")
source=("https://github.com/tari01/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("3274224f755bff2a6e7397ac8f0311ce")
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

