# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributor: Frederic Bezies <fredbezies at gmail dot com>
pkgname=fedorainfinity-backgrounds
pkgver=0.0.5
pkgrel=3
_rhver="${pkgver}-15.fc27"
pkgdesc="Fedora 8 (Werewolf) infinity backgrounds."
arch=("i686" "x86_64")
conflicts=('infinity-background')
provides=('infinity-background')
url="https://fedoraproject.org/wiki/Wallpapers#Fedora_8"
license=("GPL")
_rhlink="https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages"
source=("${_rhlink}/f/${pkgname}-${_rhver}.src.rpm")
sha1sums=('17784678100bca575c0e14d18b90185433dd581f')

prepare()  {
  tar -xvjf ./desktop-backgrounds-infinity-${pkgver}.tar.bz2
  rm -r ./desktop-backgrounds-infinity-${pkgver}.tar.bz2
  rm -r ./${pkgname}.spec
}

package() {    
  mkdir -p ${pkgdir}/usr/share/backgrounds/infinity
  mkdir -p ${pkgdir}/usr/share/gnome-background-properties
  cp -a ./desktop-backgrounds-infinity-${pkgver}/{infinity.xml,*.png} ${pkgdir}/usr/share/backgrounds/infinity/
  cp -a ./desktop-backgrounds-infinity-${pkgver}/desktop-backgrounds-infinity.xml ${pkgdir}/usr/share/gnome-background-properties/
}
# vim:set ts=2 sw=2 et:
