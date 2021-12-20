# Maintainer: Thyrum <adj00 (at) protonmail (dot) com>

pkgname=unciv-bin
_pkgname=Unciv
_pkgver=3.18.10-patch1
pkgver=${_pkgver//-/_}
pkgrel=4
pkgdesc="Open-source remake of Civilization V"
url="https://github.com/yairm210/Unciv"
license=('MPL-2.0')
depends=('java-environment>8' 'bash' 'xorg-xrandr')
provides=('unciv')
conflicts=('unciv')
arch=('any')
source=(
  "$_pkgname-$_pkgver.jar::https://github.com/yairm210/Unciv/releases/download/$_pkgver/Unciv.jar"
  "unciv-$_pkgver.png::https://raw.githubusercontent.com/yairm210/$_pkgname/$_pkgver/extraImages/Unciv%20icon%20v4.png"
  "$_pkgname.sh"
  "$_pkgname.desktop"
)
noextract=(
	"$_pkgname-$_pkgver.jar"
)
md5sums=('68c2841a28c7892639659eb82e4e7138'
         '5aca7fc33f121fcf901fef14f784731a'
         'b5c3190a1616e545df32536920e07c98'
         '42d5f7ea8ee48d2d643d070786f039ba')

package() {
  install -Dm755 $_pkgname.sh "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 $_pkgname.desktop "$pkgdir/usr/share/applications/$_pkgname.desktop"
  install -Dm644 unciv-$_pkgver.png "$pkgdir/usr/share/pixmaps/$_pkgname.png"
  install -Dm644 $_pkgname.jar "$pkgdir/usr/share/$_pkgname/$_pkgname.jar"
}
