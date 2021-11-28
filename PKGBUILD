# Based off of: https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html
# Maintainer: Mike Cuche <cuche@mailbox.org>

_pkgname=altus
_Pkgname=Altus

pkgname="${_pkgname}"-appimage
pkgver=4.5.3
pkgrel=1
pkgdesc="WhatsApp client with themes and multiple account support"
arch=('x86_64')
url="https://gitlab.com/amanharwara/altus"
license=('GPL3')
depends=('zlib' 'hicolor-icon-theme')
options=(!strip)
_appimage="${_Pkgname}-${pkgver}-x86_64.AppImage"
source=("https://github.com/amanharwara/altus/releases/download/${pkgver}/$_appimage")
noextract=("${_appimage}")
sha256sums=('cee99ee58c377f28bfb667b5d76564df48ed2243918a5e25a224314f3007307a')

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
    install -dm755 "${pkgdir}/usr/share/"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_pkgname}"
}
