# Maintainer: Daniel Haß <aur@hass.onl>
pkgname=gtk-theme-numix-sx
pkgver=20170128
pkgrel=1
pkgdesc="Gray variation of numix theme for Cinnamon/Gnome"
arch=('any')
url="https://www.gnome-look.org/p/1117412/"
license=('GPL3')
depends=('gtk-engine-murrine')
conflicts=('gtk-theme-numix-sx-beta')
source=('https://dl.opendesktop.org/api/files/download/id/1485627878/Numix-SX.tar.xz')
md5sums=('0d6cfe58cd7fdb996f7a3240ac39fb96')

package() {
  install -d "$pkgdir/usr/share/themes"
  rm ${srcdir}/Numix-SX.tar.xz
  
  cp -r ${srcdir}/* "$pkgdir/usr/share/themes/"
}
