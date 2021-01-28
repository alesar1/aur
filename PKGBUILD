# Maintainer: Robert Tari <robert at tari dot in>

pkgname="ayatana-indicator-session"
pkgver="0.8.2"
pkgrel="1"
pkgdesc="Ayatana Indicator showing session management, status and user switching"
arch=("i686" "x86_64" "pentium4")
url="https://github.com/AyatanaIndicators"
license=("GPL2" "GPL3")
depends=("libayatana-indicator" "gsettings-desktop-schemas" "systemd" "glib2")
makedepends=("cmake" "intltool" "glib2" "systemd")
optdepends=("mate-screensaver" "mate-control-center" "yelp" "firefox")
source=("https://github.com/AyatanaIndicators/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("5db63ea29448c382c42e86444043da0e")
options=("!emptydirs")

build()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    mkdir build
    cd build
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBEXECDIR=lib -Denable_tests=OFF
    make
}

package()
{
    cd ${srcdir}/${pkgname}-${pkgver}/build
    make DESTDIR="${pkgdir}" install
}
