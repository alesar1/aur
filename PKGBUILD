# Maintainer: Robert Tari <robert at tari dot in>

pkgname="ayatana-indicator-session"
pkgver="22.2.1"
pkgrel="1"
pkgdesc="Ayatana Indicator showing session management, status and user switching"
arch=("i686" "x86_64" "pentium4")
url="https://github.com/AyatanaIndicators/ayatana-indicator-session"
license=("GPL2" "GPL3")
makedepends=("cmake-extras" "intltool")
depends=("glib2" "systemd" "dconf" "libayatana-common>=0.9.5" "hicolor-icon-theme")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/AyatanaIndicators/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=("2d3e6dae015b8f1fddbfa8cc60c7ed78")

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
