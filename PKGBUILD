# Maintainer: XavierCLL <xavier.corredor.llano (a) gmail.com>

pkgname=plasma5-applets-eventcalendar
pkgver=35
pkgrel=1
pkgdesc="Plasmoid for Plasma 5. An extended calendar with daily weather forecasts and events from Google Calendar."
arch=('any')
url="http://kde-apps.org/content/show.php/Event+Calendar?content=175591"
license=('GPL')
depends=('plasma-workspace' 'qt5-graphicaleffects')
source=("https://github.com/Zren/plasma-applets/archive/eventcalendar-$pkgver.tar.gz")
md5sums=('16994f2997ece45aa4e8827c004dd992')

package() {
  cd $srcdir/plasma-applets-eventcalendar-$pkgver/org.kde.plasma.eventcalendar/package
  
  mkdir -p $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar
  cp -r * $pkgdir/usr/share/plasma/plasmoids/org.kde.plasma.eventcalendar
}
