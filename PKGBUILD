# Maintainer: kyndair <kyndair at gmail dot com>
# Place the gog installation file in the same folder as this PKGBUILD
pkgname=gog-tangledeep
_pkgname=tangledeep
pkgver=1.36b
_pkgver=1_36b
_build=43839
_goggame=1703478259
pkgrel=1
pkgdesc="Trapped in underground villages with no memory of the world at the surface, you must survive an ever-changing labyrinth to discover what lies above."
arch=('i686' 'pentium4' 'x86_64')
url="https://www.gog.com/game/${_pkgname}"
license=('custom')
makedepends=('p7zip')
provides=('tangledeep')
conflicts=('humble-tangledeep')
source=("${_pkgname}_${_pkgver}_${_build}.sh::gog://${_pkgname}_${_pkgver}_${_build}.sh"
        "${_pkgname}.desktop")
# don't download anything via makepkg
DLAGENTS+=("gog::/usr/bin/perl -E print\(\"${RED}\"\ .\ substr\(\"%u\",\ 6\)\ .\ \"\ not\ found.\ \ Check\ the\ PKGBUILD\ for\ further\ information.${ALL_OFF}\\\\n\"\)\;\ exit\ 1")
sha256sums=('7a4767cb94200302cdd1b517a13b5bdb73df6672ba3ac7f517a9bbc4c38b0d1e'
            '13b1809ed2232f90fece7e46dae5d7f1d0dd983e0997501316f9e57703553fd4')
noextract=("${_pkgname}_${_pkgver}_${_build}.sh"
        "${_pkgname}.desktop")

prepare() {
    7z x -tzip -y ${_pkgname}_${_pkgver}_${_build}.sh
}

package() {
    # install launcher
    install -Dm644 "${srcdir}/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
    # install game icon
    install -Dm644 "${srcdir}/data/noarch/support/icon.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"
    # install goggame files
    install -Dm644 "${srcdir}/data/noarch/game/goggame-${_goggame}.hashdb" "${pkgdir}/opt/${_pkgname}/goggame-${_goggame}.hashdb"
    install -Dm644 "${srcdir}/data/noarch/game/goggame-${_goggame}.info" "${pkgdir}/opt/${_pkgname}/goggame-${_goggame}.info"
    # set the correct permissions and move the game data into pkg
    find "${srcdir}/data/noarch/game/Tangledeep_Data" -type d -exec chmod 755 {} +
    find "${srcdir}/data/noarch/game/Tangledeep_Data" -type f -exec chmod 644 {} +
    mv "${srcdir}/data/noarch/game/Tangledeep_Data" "${pkgdir}/opt/${_pkgname}"
    # remove unneeded libraries and install correct executable
    if [[ "$CARCH" == "x86_64" ]]; then
        rm -r "${pkgdir}/opt/${_pkgname}/Tangledeep_Data/Mono/x86"
        rm -r "${pkgdir}/opt/${_pkgname}/Tangledeep_Data/MonoBleedingEdge/x86"
        rm -r "${pkgdir}/opt/${_pkgname}/Tangledeep_Data/Plugins/x86"
        install -Dm755 "${srcdir}/data/noarch/game/Tangledeep.x86_64" "${pkgdir}/opt/${_pkgname}/Tangledeep"
    else
        rm -r "${pkgdir}/opt/${_pkgname}/Tangledeep_Data/Mono/x86_64"
        rm -r "${pkgdir}/opt/${_pkgname}/Tangledeep_Data/MonoBleedingEdge/x86_64"
        rm -r "${pkgdir}/opt/${_pkgname}/Tangledeep_Data/Plugins/x86_64"
        install -Dm755 "${srcdir}/data/noarch/game/Tangledeep.x86" "${pkgdir}/opt/${_pkgname}/Tangledeep"
    fi
    # link executable in /usr/bin
    mkdir "${pkgdir}/usr/bin"
    ln -s /opt/${_pkgname}/Tangledeep "${pkgdir}/usr/bin/Tangledeep"
}
