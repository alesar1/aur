# Maintainer: Jameson Pugh <imntreal@gmail.com>
# Contributor: kaptoxic <kaptoxic _at_ yahoo _dot_ com >
# Contributor: Louis des Landes <aur@psykar.com>
# Contributor: dlech
# Contributor: Andreas Harter <aur@andreas-harter.de>
 
pkgname=keebuntu
pkgver=0.5.6.1
pkgrel=1
pkgdesc="App indicator icon for keepass (for unity, cinnamon & gnome)"
arch=(any)
url="https://github.com/dlech/Keebuntu"
license=('GPL2')
depends=('keepass' 'libappindicator-gtk2' 'libappindicator-sharp' 'libdbusmenu-gtk2'
         'libindicator-gtk2' 'dbus-sharp-glib' 'gtk-sharp-2')
makedepends=('git' 'libappindicator-sharp')
source=("https://github.com/dlech/Keebuntu/archive/debian/${pkgver}.tar.gz")
install=$pkgname.install
sha256sums=('2003f2575b68d5472dea87b81b094b963d2592120b73c79ea217dba1d22a490f')
 
_keepassdir=usr/share/keepass/appindicator
_icondir=icons/hicolor/256x256/apps
 
build() {
  cd "${srcdir}/Keebuntu-debian-${pkgver}"
  sed -i 's|/usr/lib/keepass2|/usr/share/keepass|' KeePassExe.proj
  sed -i 's|libMagickWand-6.Q16.so|libMagickWand-6.Q16HDRI.so|' ImageMagick/ImageMagick.dll.config
  xbuild /property:Configuration=Release ApplicationIndicator/AppIndicatorPlugin.csproj
}
 
package() {
  cd "${srcdir}/Keebuntu-debian-${pkgver}"
  # Copy stuff across manually
  mkdir -p $pkgdir/$_keepassdir
  mkdir -p $pkgdir/usr/share/$_icondir
  cp ApplicationIndicator/bin/Release/* $pkgdir/$_keepassdir
  cp ApplicationIndicator/Resources/$_icondir/* $pkgdir/usr/share/$_icondir/
  rm $pkgdir/$_keepassdir/KeePass.*
}
 
# vim:set ts=2 sw=2 et:
