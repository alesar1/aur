# Submitter: XavierCLL <xavier.corredor.llano (a) gmail.com>
# Maintainer: Zren <zrenfire@gmail.com>

pkgname=plasma5-applets-eventcalendar
pkgver=71
pkgrel=1
pkgdesc="An extended calendar plasmoid with daily weather forecasts and events from Google Calendar. Also includes a timer and 24 hour forecast graph."
arch=('any')
url="https://store.kde.org/p/998901/"
license=('GPL')
depends=('plasma-workspace' 'qt5-graphicaleffects')
makedepends=('bash' 'gettext')
source=("https://github.com/Zren/plasma-applet-eventcalendar/archive/v$pkgver.tar.gz")
md5sums=('0b5212fbb7e0b2c675a29dc3f67005e0')

package() {
    cd plasma-applet-eventcalendar-$pkgver/package

    mkdir -p $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar
    cp -r * $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar

    cd $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar/translate
    sh ./build
    mkdir -p $pkgdir/usr/share/locale
    mv $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar/contents/locale $pkgdir/usr/share/
    rm -rf $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar/translate
}

