# Maintainer: Mornielome <stuff@lukasjacobs.de>
# Contributors: c0ldcat <firez199984@gmail.com>, KbanKiller
pkgname=marvin
pkgver=18.13.0
pkgrel=1
pkgdesc="Intuitive applications and API for chemical sketching, visualization and data exploration"
arch=('any')
url="http://www.chemaxon.com"
license=('proprietary')
depends=('jre8-openjdk')
filename="marvin_linux_18.13.rpm"
source=("https://dl.chemaxon.com/marvin/$pkgver/$filename"
"MarvinSketch.desktop"
"marvin-sketch-symbolic.svg")
md5sums=('2f0dca3cd8715d86dbca6ddd1924233d'
'63b667e3188ffe688f516848e5db66c6'
'e6758f94b843b97804112fa0420ba1bb')

package() {
install -Dm755 MarvinSketch.desktop ${pkgdir}/usr/share/applications/MarvinSketch.desktop

cp -R opt ${pkgdir}/opt

install -Dm644 opt/chemaxon/marvinsuite/.install4j/MarvinSketch.png ${pkgdir}/usr/share/pixmaps/marvin-sketch.png
install -Dm644 marvin-sketch-symbolic.svg ${pkgdir}/usr/share/pixmaps/marvin-sketch-symbolic.svg
}
