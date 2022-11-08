# Maintainer: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)

pkgbase=tela-circle-icon-theme
pkgname=('tela-circle-icon-theme-all'
         'tela-circle-icon-theme-standard'
         'tela-circle-icon-theme-black'
         'tela-circle-icon-theme-blue'
         'tela-circle-icon-theme-brown'
         'tela-circle-icon-theme-green'
         'tela-circle-icon-theme-grey'
         'tela-circle-icon-theme-orange'
         'tela-circle-icon-theme-pink'
         'tela-circle-icon-theme-purple'
         'tela-circle-icon-theme-red'
         'tela-circle-icon-theme-yellow'
         'tela-circle-icon-theme-manjaro'
         'tela-circle-icon-theme-ubuntu'
         'tela-circle-icon-theme-dracula'
         'tela-circle-icon-theme-nord')
pkgver=2022.11.06
pkgrel=1
pkgdesc='A flat colorful design icon theme'
arch=('any')
url='https://github.com/vinceliuice/Tela-circle-icon-theme'
license=('GPL3')
depends=('gtk-update-icon-cache' 'hicolor-icon-theme')
makedepends=('bash')
provides=('tela-circle-icon-theme')
options=('!strip')
source=("${pkgbase}-${pkgver}.tar.gz::https://github.com/vinceliuice/${pkgbase}/archive/${pkgver//./-}.tar.gz")
b2sums=('f104cabe8f0437f4973158e49690e91fe837e97b76003ec756df5767ed61439055cae7f97cb678c424b314c30c9f5647b114768e769859ba20b299378144e47d')

_package() {
  pkgdesc="${pkgdesc} (${1} variant)"
  conflicts=("${pkgbase}-all" "${pkgbase}-all-git" "${pkgbase}-${1}-git")
  cd "${pkgbase^}-${pkgver//./-}"
  install -dm755 "${pkgdir}/usr/share/icons"
  ./install.sh -d "${pkgdir}/usr/share/icons" ${1}
}

package_tela-circle-icon-theme-all() {
  pkgdesc="${pkgdesc} (all variants)"
  conflicts=(${pkgname[@]/${pkgbase}-all})
  for _p in ${pkgname[@]}; do _p=${_p}-git; conflicts+=(${_p}); done
  cd "${pkgbase^}-${pkgver//./-}"
  install -dm755 "${pkgdir}/usr/share/icons"
  ./install.sh -a -d "${pkgdir}/usr/share/icons"
}

package_tela-circle-icon-theme-standard() {
  _package standard
}

package_tela-circle-icon-theme-black() {
  _package black
}

package_tela-circle-icon-theme-blue() {
  _package blue
}

package_tela-circle-icon-theme-brown() {
  _package brown
}

package_tela-circle-icon-theme-green() {
  _package green
}

package_tela-circle-icon-theme-grey() {
  _package grey
}

package_tela-circle-icon-theme-orange() {
  _package orange
}

package_tela-circle-icon-theme-pink() {
  _package pink
}

package_tela-circle-icon-theme-purple() {
  _package purple
}

package_tela-circle-icon-theme-red() {
  _package red
}

package_tela-circle-icon-theme-yellow() {
  _package yellow
}

package_tela-circle-icon-theme-manjaro() {
  _package manjaro
}

package_tela-circle-icon-theme-ubuntu() {
  _package ubuntu
}

package_tela-circle-icon-theme-dracula() {
  _package dracula
}

package_tela-circle-icon-theme-nord() {
  _package nord
}
