# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
pkgname=f30-backgrounds
pkgver=30.0.0
pkgrel=1
_rhver="${pkgver}-1.fc31"
pkgdesc="Fedora 30 backgrounds."
arch=("i686" "x86_64")
url="https://fedoraproject.org/wiki/F30_Artwork"
license=("CC-BY-SA")
_rhlink="https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages"
source=("${_rhlink}/f/${pkgname}-${_rhver}.src.rpm")
sha256sums=('8eba8682213705d9606bb474a1f868c6c1392607cbcbda337f95774787e74cc1')

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
