# Based  on the template from https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html
# Maintainer: Kevin Liu <we123445@outlook.com>


_pkgname=qqmusic

pkgname="${_pkgname}"-appimage
pkgver=1.1.2
pkgrel=4
pkgdesc="A music player from Tencent"
arch=('x86_64')
url="https://y.qq.com"
license=('custom')
depends=()
options=(!strip)
_appimage="qqmusic-${pkgver}.AppImage"
source=("https://dldir1.qq.com/music/clntupate/linux/AppImage/${_appimage}")
sha256sums=("d65042dabafead493af5b8275aceb5519f658441f589250c555eb1b6c17c16e1")
#        https://dldir1.qq.com/music/clntupate/linux/AppImage/qqmusic-1.1.1.AppImage
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
