# Maintainer: Robert Tari <robert at tari dot in>

pkgname="ayatana-indicator-session"
pkgver="0.9.0"
pkgrel="1"
pkgdesc="Ayatana Indicator showing session management, status and user switching"
arch=("i686" "x86_64" "pentium4")
url="https://github.com/AyatanaIndicators/ayatana-indicator-session"
license=("GPL2" "GPL3")
makedepends=("cmake-extras" "intltool")
depends=("glib2" "systemd" "dconf" "libayatana-common>=0.9.5" "hicolor-icon-theme")
source=("https://github.com/AyatanaIndicators/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("c5d66fe1ad289e375fc3fad467df3d4f")

build()
{
    cd ${pkgname}-${pkgver}
    mkdir build
    cd build
    cmake ..
    make
}

package()
{
    cd ${pkgname}-${pkgver}/build
    make DESTDIR="${pkgdir}" install
}
