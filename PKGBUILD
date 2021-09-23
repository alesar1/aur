# Based  on the template from https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html
# Maintainer: Adam Cassedy <adam.cass@pm.me>

_pkgname=Vircadia
_pkgver=x86_64_v2021.1.3-Eos
pkgname=vircadia-appimage
pkgver=2021.1.3
pkgrel=1
pkgdesc="An open-source 3D interface and server foundation that allows for vast social & \
educational platforms to be created and lived in while also being shared in real-time with others."
arch=('x86_64')
url="https://vircadia.com/"
license=('APACHE')
depends=('zlib' 'hicolor-icon-theme' 'fuse')
options=(!strip)
_appimage="${pkgname}-${pkgver}.AppImage"
source_x86_64=("${_appimage}::https://cdn.vircadia.com/dist/release/${_pkgname}-${_pkgver}.AppImage")
noextract=("${_appimage}")
sha256sums_x86_64=('c7423d53a80eb1d90db09a536f0be09ec6d14dcb21cce52e1045471fdb0b157f')

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
