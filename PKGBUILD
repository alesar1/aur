# Maintainer: Erik Dubois <erik.dubois@gmail.com>
pkgname=sardi-mixing-icons-git
_pkgname=sardi-mixing-icons
_destname="/usr/share/icons/"
_pkggithub="https://github.com/erikdubois/Sardi-Mixing"
pkgdesc="Based on Sardi you can use the modularity to combine elements and create a new icon theme."
pkgver=9.6
pkgrel=22
arch=('any')
url="${pkggithub}"
license=('Attribution-NonCommercial-ShareAlike 4.0 International Public License')
makedepends=('git')
#depends=('sardi-icons')
provides=("${pkgname}")
conflicts=("${pkgname}")
options=(!strip !emptydirs)
source=("${_pkgname}"::git+"${_pkggithub}")
sha256sums=('SKIP')


package() {
  rm -f "${srcdir}/${_pkgname}/"README.md
  rm -f "${srcdir}/${_pkgname}/"git-v*
  rm -f "${srcdir}/${_pkgname}/"setup*
  install -dm 755 "${pkgdir}"/"${_destname}"
  cp -dr --no-preserve='ownership' ${_pkgname}/* "${pkgdir}"/usr/share/icons/
}


