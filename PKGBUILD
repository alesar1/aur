# Maintainer: Faisal Moledina (faisal at moledina dot me)
# Based  on the template from https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html

_pkgname=frame

pkgname="${_pkgname}"-eth-dev-appimage
pkgver=0.5.0
pkgrel=6
pkgdesc="A privacy focused Ethereum wallet"
arch=('x86_64')
url="https://frame.sh/"
license=('GPL3')
depends=('fuse2')
provides=("${_pkgname}-eth")
conflicts=("${_pkgname}-eth" "${_pkgname}-eth-dev")
options=(!strip)
_appimage="${pkgname}-${pkgver}.AppImage"
source_x86_64=("${_appimage}::https://github.com/floating/frame/releases/download/v${pkgver}-beta.16/Frame-${pkgver}-beta.16.AppImage")
noextract=("${_appimage}")
sha512sums_x86_64=('0abced003db32991a4e1551c26a9625d28853a684be87fb07e68e91570c8fd8ec5edd86ee1114b187b77c0fcd90a1138615f1feb14661fd01c1fabc2320d5a20')

prepare() {
    chmod +x "${_appimage}"
    ./"${_appimage}" --appimage-extract
}

build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=AppRun|Exec=env DESKTOPINTEGRATION=false /usr/bin/${_pkgname} %u|"\
        "squashfs-root/${_pkgname}.desktop"
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${srcdir}/${_appimage}" "${pkgdir}/opt/${pkgname}/${pkgname}.AppImage"

    # Desktop file
    install -Dm644 "${srcdir}/squashfs-root/${_pkgname}.desktop"\
            "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

    # Icon images
    install -dm755 "${pkgdir}/usr/share/"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_pkgname}"
}
