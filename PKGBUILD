# Based off of: https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html
# Maintainer: Stephan Brunner <stepbrunner@gmail.com>

_pkgname=chataigne
_Pkgname=Chataigne

pkgname="${_pkgname}"-stable-bin
pkgver=1.7.6
pkgrel=1
pkgdesc="Artist-friendly Modular Machine for Art and Technology."
arch=('x86_64')
url="https://benjamin.kuperberg.fr/chataigne/en"
license=('GPL3')
depends=('zlib' 'hicolor-icon-theme')
options=(!strip)
_appimage="${_Pkgname}-linux-x64-${pkgver}.AppImage"
source_x86_64=("${_appimage}::https://benjamin.kuperberg.fr/chataigne/user/data/${_appimage}")
noextract=("${_appimage}")
sha256sums_x86_64=('1a28928a004fe3311060cfa5a392301b9c4ca1ec9fc041b1d29531a4f7679398')

prepare() {
    chmod +x "${_appimage}"
    ./"${_appimage}" --appimage-extract
}

build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=AppRun|Exec=env DESKTOPINTEGRATION=false /usr/bin/${_pkgname}|"\
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
    install -dm755 "${pkgdir}/usr/share/pixmaps"
    cp -a "${srcdir}/squashfs-root/${_pkgname}.png" "${pkgdir}/usr/share/pixmaps/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_Pkgname}"
}
