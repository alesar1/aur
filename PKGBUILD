# Maintainer: Richard Webb <aur at rfwebb.com>
# Based on the template by Dave Parrish: https://daveparrish.net/posts/2019-11-07-HowTo-PKGBUILD-for-AppImage.html

_pkgname=mochi

pkgname="${_pkgname}"-appimage
pkgver=1.4.11
pkgrel=1
pkgdesc="Flash cards / spaced repetition using markdown"
arch=('x86_64')
url="https://mochi.cards"
license=('custom:Unlicense')
depends=('zlib' 'hicolor-icon-theme')
options=(!strip)
_appimage="${pkgname}-${pkgver}.AppImage"
source_x86_64=("${_appimage}::https://mochi.cards/releases/Mochi-${pkgver}.AppImage")
noextract=("${_appimage}")
sha256sums_x86_64=('a9015b14b923523bce2c25401788583da533a6506116a2dfd853a72cc56e30c2')

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
