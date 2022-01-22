# Contributor: CountMurphy <spartan1086@gmail.com>
pkgname=qtalarm
pkgver=4700238.2.3.0
pkgrel=1
pkgdesc="Cross-platform Alarm Clock written with QT5"
arch=('i686' 'x86_64')
url="https://random-hackery.net/page/qtalarm/"
license=('GPL3')
depends=('qt5-base' 'qt5-multimedia' 'gst-plugins-base' 'gst-plugins-good')
makedepends=(make gcc)
source=(
https://random-hackery.net/data/qtalarm/src/QTalarm-2.3.0.tar.gz
https://random-hackery.net/data/qtalarm/src/QTalarm-2.3.0.tar.gz.asc
)
validpgpkeys=('914897EC41BD3AED1CD9EC3DE41FF9C889B141CC')
md5sums=(
fe82b4470557bde3821628ed9b5d802b
894c062da028f0a1009eb1679eebde9c
)

build() {
    cd "${srcdir}/"

    qmake
    make
    make clean
}

package() {
mkdir $pkgdir/usr/
mkdir $pkgdir/usr/share/
mkdir $pkgdir/usr/share/icons/
mkdir $pkgdir/usr/share/icons/hicolor/
mkdir $pkgdir/usr/share/icons/hicolor/48x48
mkdir $pkgdir/usr/share/icons/hicolor/16x16
mkdir $pkgdir/usr/share/icons/hicolor/24x24
mkdir $pkgdir/usr/share/icons/hicolor/48x48/apps/
mkdir $pkgdir/usr/share/icons/hicolor/16x16/apps/
mkdir $pkgdir/usr/share/icons/hicolor/24x24/apps/

mkdir $pkgdir/usr/bin/
mkdir $pkgdir/usr/share/applications/
install -Dm555 Icons/1349069370_Alarm_Clock.png $pkgdir/usr/share/icons/hicolor/48x48/apps/
install -Dm555 Icons/1349069370_Alarm_Clock24.png $pkgdir/usr/share/icons/hicolor/24x24/apps/1349069370_Alarm_Clock.png
install -Dm555 Icons/1349069370_Alarm_Clock16.png $pkgdir/usr/share/icons/hicolor/16x16/apps/1349069370_Alarm_Clock.png
install -Dm555 qtalarm  "$pkgdir/usr/bin/$pkgname"
install -Dm555 "${BUILDDIR}/${pkgname}".desktop "$pkgdir/usr/share/applications/${pkgname}.desktop"

}

