# Maintainer: Sven Karsten Greiner <sven@sammyshp.de>

pkgname=atlas-maps-beta-bin
pkgver=1.2.19
pkgrel=1
pkgdesc="Map and navigation application using offline vector maps (beta version)"
arch=('any')
url="http://wiki.openstreetmap.org/wiki/Atlas_(navigation_application)"
license=('proprietary (free)')
depends=('java-runtime')
provides=('atlas-maps')
conflicts=('atlas-maps')
source=("http://www.talent.gr/public/atlas/Atlas-Beta-${pkgver}.zip"
        "atlas-maps.sh")
md5sums=('7f8153a8d6a1177cbbaa41cb5e8c5309'
         '509caab1fb6ad3990e87890a5dfb7d81')

package() {
    install -Dm644 "Atlas-Beta-${pkgver}/Atlas-Beta.jar" "$pkgdir/usr/share/java/atlas-maps/atlas.jar"
    install -Dm755 atlas-maps.sh "$pkgdir/usr/bin/atlas-maps"
}
