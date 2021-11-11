# Maintainer: David Parrish <daveparrish@tutanota.com>

_pkgname=zap-desktop

pkgname="${_pkgname}"-appimage
pkgver=0.7.4_beta
# Actual version used by project
_ver=${pkgver//_/-}
pkgrel=1
pkgdesc="Lightning wallet focused on user experience and ease of use"
arch=('x86_64')
url="https://github.com/LN-Zap/zap-desktop"
license=('MIT')
depends=('zlib' 'hicolor-icon-theme' 'desktop-file-utils')
options=(!strip)
_appimage="${pkgname}-${pkgver}.AppImage"
source_x86_64=("${pkgname}-${pkgver}.AppImage::https://github.com/LN-Zap/zap-desktop/releases/download/v${_ver}/Zap-linux-x86_64-v${_ver}.AppImage"
               "https://raw.githubusercontent.com/LN-Zap/zap-desktop/v${_ver}/LICENSE"
              )
noextract=("${pkgname}-${pkgver}.AppImage")
sha256sums_x86_64=('7bdd707f766cb6a29c5816ae7f414e31cd19157e5b56108503f6525ef14b916b'
                   'c7779cd186930fa9bd4d900b2243b3302f01cd593ac19098bbeb123c8ebf9d72')

prepare() {
    chmod +x "${_appimage}"
    ./"${_appimage}" --appimage-extract
}

build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=AppRun|Exec=/usr/bin/${_pkgname}|" "squashfs-root/${_pkgname}.desktop"
    sed -i -E "s|Icon=zap|Icon=${_pkgname}|" "squashfs-root/${_pkgname}.desktop"
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${srcdir}/${_appimage}" "${pkgdir}/opt/${pkgname}/${pkgname}.AppImage"
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/opt/${pkgname}/LICENSE"

    # Desktop file
    install -Dm644 "${srcdir}/squashfs-root/${_pkgname}.desktop"\
            "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

    # Icon images
    install -dm755 "${pkgdir}/usr/share/"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_pkgname}"

    # Symlink license
    install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}/"
    ln -s "/opt/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname"
}
