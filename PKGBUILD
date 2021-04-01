# Based off of: https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html
# Maintainer: Pieter Verweij <git at pieterv24 dot dev>

_pkgname=vial
_Pkgname=Vial

pkgname="${_pkgname}"-appimage
pkgname=vial-appimage
pkgver=v0.2
pkgrel=1
pkgdesc="Vial is an open-source cross-platform (Windows, Linux and Mac) GUI and a QMK fork for configuring your keyboard in real time, similar to VIA."
arch=('x86_64')
url="https://get.vial.today/"
license=("GPL2")
depends=("python")
options=(!strip)
_appimage="${_Pkgname}-${pkgver}-x86_64.AppImage"
source_x86_64=("${_appimage}::https://github.com/vial-kb/vial-gui/releases/download/${pkgver}/${_Pkgname}-${pkgver}-x86_64.AppImage")
noextract=("${_appimage}")
sha256sums_x86_64=('c5c9541392ca9e176893689b3bb2116002ab762c6bff60dfcf741e637e626689')

prepare() {
    chmod +x "${_appimage}"
    ./"${_appimage}" --appimage-extract
}

build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=Vial|Exec=env DESKTOPINTEGRATION=false /usr/bin/${_Pkgname}|"\
        "squashfs-root/${_Pkgname}.desktop"
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${startdir}/${_appimage}" "${pkgdir}/opt/${pkgname}/${pkgname}.AppImage"

    # Desktop file
    install -Dm644 "${srcdir}/squashfs-root/${_Pkgname}.desktop"\
            "${pkgdir}/usr/share/applications/${_Pkgname}.desktop"

    # Icon images
    install -dm755 "${pkgdir}/usr/share/"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_Pkgname}"
}