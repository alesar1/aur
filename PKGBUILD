# Maintainer: kyndair <kyndair at gmail dot com>
# Place the gog installation file in the same folder as this PKGBUILD
pkgname=gog-tangledeep-dawn-of-dragons
_dlcparent=tangledeep
_pkgname=tangledeep_dawn_of_dragons
pkgver=1.53a
_pkgver=1_53a
_build=54452
_goggame=1329980477
pkgrel=1
epoch=1
pkgdesc="DLC for the ${_dlcparent} game."
arch=('i686' 'pentium4' 'x86_64')
url="https://www.gog.com/game/${_pkgname}"
license=('custom')
depends=("${_dlcparent}")
makedepends=('p7zip')
source=("${_pkgname}_${_pkgver}_${_build}.sh::gog://${_pkgname}_${_pkgver}_${_build}.sh")
# don't download anything via makepkg
DLAGENTS+=("gog::/usr/bin/perl -E print\(\"${RED}\"\ .\ substr\(\"%u\",\ 6\)\ .\ \"\ not\ found.\ \ Check\ the\ PKGBUILD\ for\ further\ information.${ALL_OFF}\\\\n\"\)\;\ exit\ 1")
sha256sums=('a171c1c4c724f17693ed0cc5402b07e399d64a4988451c7b73c8286b3141d545')
noextract=("${_pkgname}_${_pkgver}_${_build}.sh")

prepare() {
    7z x -tzip -y ${_pkgname}_${_pkgver}_${_build}.sh
}

package() {
    # install goggame files
    install -Dm644 "${srcdir}/data/noarch/game/goggame-${_goggame}.hashdb" "${pkgdir}/opt/${_dlcparent}/goggame-${_goggame}.hashdb"
    install -Dm644 "${srcdir}/data/noarch/game/goggame-${_goggame}.info" "${pkgdir}/opt/${_dlcparent}/goggame-${_goggame}.info"
    # install DLC key. Assets are now pre-installed in the main game
    install -Dm644 "${srcdir}/data/noarch/game/Tangledeep_Data/dlc/dodchk" "${pkgdir}/opt/${_dlcparent}/Tangledeep_Data/dlc/dodchk"
}
