# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
pkgname=f25-backgrounds
pkgver=25.1.1
pkgrel=4
_rhver="${pkgver}-7.fc30"
pkgdesc="Fedora 25 backgrounds."
arch=("i686" "x86_64")
url="https://fedoraproject.org/wiki/F25_Artwork"
license=("CC-BY-SA")
_rhlink="https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages"
source=("${_rhlink}/f/${pkgname}-${_rhver}.src.rpm")
sha256sums=('202ad6cc73f9bb0eb155fa6951f4021439c82ed93f1a95b3a6cfecdca5346f2e')

prepare()  {
  tar -xvJf ./${pkgname}-${pkgver}.tar.xz
  rm -r ./${pkgname}-${pkgver}.tar.xz
  rm -r ./${pkgname}.spec
}

build() {
  cd ./${pkgname}
  make
}

package() {    
  cd ./${pkgname}
  make install DESTDIR="${pkgdir}"
}
# vim:set ts=2 sw=2 et:
