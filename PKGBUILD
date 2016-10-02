# Maintainer: Erik Dubois <erik.dubois@gmail.com>
pkgname=surfn-icons-git
pkgver=5.0
pkgrel=0
pkgdesc="Surfn is a colourfull icon theme."
arch=('any')
url="https://github.com/erikdubois/Surfn"
license=('Attribution-NonCommercial-ShareAlike 4.0 International Public License')
makedepends=('git')
provides=('surfn-icons-git')
options=(!strip !emptydirs)
source=('Surfn::git+https://github.com/erikdubois/Surfn.git')
sha256sums=('SKIP')

package() {
  cd Surfn

  install -dm 755 "${pkgdir}"/usr/share/icons
  cp -dr --no-preserve='ownership' Surfn\ Arc "${pkgdir}"/usr/share/icons/
  cp -dr --no-preserve='ownership' Surfn\ Arch\ Blue "${pkgdir}"/usr/share/icons/
  cp -dr --no-preserve='ownership' Surfn\ Breeze\ Dark "${pkgdir}"/usr/share/icons/
  cp -dr --no-preserve='ownership' Surfn\ Evopop "${pkgdir}"/usr/share/icons/
  cp -dr --no-preserve='ownership' Surfn\ Majestic "${pkgdir}"/usr/share/icons/
  cp -dr --no-preserve='ownership' Surfn\ Orange "${pkgdir}"/usr/share/icons/
#  cp -dr --no-preserve='ownership' Surfn "${pkgdir}"/usr/share/icons/

}
