# Maintainer: Tomas S. <me+aur at wereii.cz>

pkgname=spacestation14-launcher-bin
pkgver=0.8.3
pkgrel=1
pkgdesc="Space Station 14 launcher"
url="https://spacestation14.io/"
license=(MIT)
arch=(x86_64)
options=(!strip staticlibs)
# sources need to have unique filenames
_source_name="SS14.launcher.v${pkgver}.zip" 
source=(
    "${_source_name}::https://github.com/space-wizards/SS14.Launcher/releases/download/v${pkgver}/SS14.Launcher_Linux.zip"
    "spacestation14.svg::https://spacestation14.io/images/main/icon.svg"
    "desktop.patch")
noextract=("${_source_name}")
sha256sums=('00afbd03c4a9e2ebe08c17a9d57f3cab807a61bb474a7d95b05270dc3ad69891'
            'ba123bf55027694ffbf3528f58ba7554d072a023de3282187dd692f365ee9ce5'
            'SKIP')


prepare() {
    cd "${srcdir}"
    mkdir -p SS14; cd SS14
    # it's important to run bsdtar outside of fakeroot
    # as it acts differently with ownership data as root
    bsdtar -x -f "${srcdir}/${_source_name}"

    patch "${srcdir}/SS14/SS14.desktop" "${srcdir}/desktop.patch"
}

package() {
    mkdir -p "${pkgdir}/opt"
    mv "${srcdir}/SS14" "${pkgdir}/opt"

    mkdir -p "${pkgdir}/usr/bin"
    ln -s "/opt/SS14/SS14.Launcher" "${pkgdir}/usr/bin/spacestation14-launcher"

    mkdir -p "${pkgdir}/usr/share/applications"
    ln -s "/opt/SS14/SS14.desktop" "${pkgdir}/usr/share/applications/SS14.desktop"

    mkdir -p "${pkgdir}/usr/share/pixmaps"
    cp "${srcdir}/spacestation14.svg" "${pkgdir}/usr/share/pixmaps"
}
