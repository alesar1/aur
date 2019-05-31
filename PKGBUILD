# $Id$
# Maintainer: Cobalt Space <cobaltspace at protonmail dot com>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
pkgname=waves-backgrounds
pkgver=30.0.0
pkgrel=1
_rhver="${pkgver}-2.fc31"
pkgdesc="Fedora 9 (Sulphur) waves backgrounds."
arch=("i686" "x86_64")
url="https://fedoraproject.org/wiki/Wallpapers#Fedora_9"
license=("CC-BY-SA")
_rhlink="https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages"
source=("${_rhlink}/d/desktop-backgrounds-${_rhver}.src.rpm")
sha256sums=('068d920381985c0ea9241df4e06a9da18678b0950f3abe91b296dc9b8eb7798d')

prepare()  {
  tar -xvjf ./waves-0.1.2.tar.bz2
  rm -r ./waves-0.1.2.tar.bz2
}

package() {    
  mkdir -p ${pkgdir}/usr/share/backgrounds/waves
  mkdir -p ${pkgdir}/usr/share/gnome-background-properties
  cp -a ./waves-0.1.2/{waves.xml,*.png}             ${pkgdir}/usr/share/backgrounds/waves/
  cp -a ./waves-0.1.2/desktop-backgrounds-waves.xml ${pkgdir}/usr/share/gnome-background-properties/
}
# vim:set ts=2 sw=2 et:
