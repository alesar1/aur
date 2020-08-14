# Maintainer: Robert Tari <robert at tari dot in>

pkgname="ayatana-indicator-application"
pkgver="0.5.3"
pkgrel="1"
pkgdesc="Ayatana Application Indicators"
arch=("i686" "x86_64" "pentium4")
url="https://github.com/AyatanaIndicators"
license=("GPL3")
depends=("libayatana-indicator" "dbus-glib" "libayatana-appindicator")
makedepends=("mate-common" "xorg-server-xvfb" "glib2" "gtk3" "dbus-glib" "json-glib" "intltool" "libayatana-appindicator" "libayatana-indicator" "libdbusmenu-glib" "libdbusmenu-gtk3" "systemd")
source=("https://github.com/AyatanaIndicators/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("d6f378cb16a39ce85bee5c669159891d")
options=("!emptydirs")

prepare()
{
    cd ${pkgname}-${pkgver}
    NOCONFIGURE=1 ./autogen.sh
}

build()
{
    cd ${pkgname}-${pkgver}
    ./configure --prefix=/usr --libexecdir=/usr/lib
    make
}

package()
{
    cd ${pkgname}-${pkgver}
    make DESTDIR="${pkgdir}" install
}
