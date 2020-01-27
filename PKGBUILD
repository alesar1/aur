# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
pkgname=f22-backgrounds
pkgver=22.1.1
_string=$(curl -sL "https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages/f" | grep "f22-backgrounds" | cut -d '"' -f 6)
_rhver=$(echo ${_string} | sed "s/${pkgname}-//g" | sed 's/.src.rpm//g')
pkgrel=$(echo ${_rhver} | cut -d '-' -f 2| sed 's/.fc[0-9]*//g')
pkgdesc="Fedora 22 backgrounds."
arch=("i686" "x86_64")
url="https://fedoraproject.org/wiki/F22_Artwork"
license=("CC-BY-SA")
_rhlink="https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages"
source=("${_rhlink}/f/${pkgname}-${_rhver}.src.rpm")
sha256sums=('c1bc37eaf4bfbb8e559a681032b228c9f6220602f33d9e64d68f6e670011e094')

pkgver() {
  echo $_string | cut -d '-' -f 3
}

prepare()  {
  tar -xvJf ./${pkgname}-${pkgver}.tar.xz
  rm -r ./${pkgname}-${pkgver}.tar.xz
  rm -r ./${pkgname}.spec
}

build() {
  cd ./${pkgname}-${pkgver}
  make
}

package() {    
  cd ./${pkgname}-${pkgver}
  make install DESTDIR="${pkgdir}"
}
# vim:set ts=2 sw=2 et:
