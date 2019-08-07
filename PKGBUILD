# Maintainer: Robert Tari <robert at tari dot in>

pkgname="ayatana-indicator-notifications"
pkgver="0.4.0"
pkgrel="2"
pkgdesc="Ayatana Indicator for viewing recent notifications"
arch=("i686" "x86_64")
url="https://github.com/AyatanaIndicators"
license=("GPL3")
depends=("glib2" "libayatana-indicator-gtk3")
makedepends=("intltool" "libayatana-indicator-gtk3" "glib2" "gdk-pixbuf2" "gtk3" "mate-common")
optdepends=("mate-ayatana-indicator-applet")
source=("https://github.com/AyatanaIndicators/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("1ae8dc099a3219115bff24365839f1df")
options=("!emptydirs")

prepare()
{
    cd ${pkgname}-${pkgver}
    NOCONFIGURE=1 ./autogen.sh
}

build()
{
    cd ${pkgname}-${pkgver}
    ./configure --prefix=/usr --libexecdir=/usr/lib --disable-static
    make
}

package()
{
    cd ${pkgname}-${pkgver}
    make DESTDIR="${pkgdir}" install
}

