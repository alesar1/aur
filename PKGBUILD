# Maintainer: Patrykf03 <hamachi0912@gmail.com>

pkgname=yuzu-ea-bin
pkgver=1120
pkgrel=1
pkgdesc="Yuzu switch emulator Early Access build for Arch Linux"
arch=('x86_64')
url="https://github.com/pineappleEA/pineappleEA.github.io"
license=('gpl')
depends=('zlib' 'hicolor-icon-theme')
options=(!strip)
source_x86_64=("https://github.com/pineappleEA/pineappleEA.github.io/releases/download/EA-${pkgver}/Yuzu-EA-${pkgver}.AppImage")
noextract=("Yuzu-EA-${pkgver}.AppImage")
sha256sums_x86_64=('9816208f3a958c9ecae0615286ce7954187f5b4973fcb3845da564aa05954d53')

prepare() {
    chmod +x "Yuzu-EA-${pkgver}.AppImage"
    ./"Yuzu-EA-${pkgver}.AppImage" --appimage-extract
}



build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=AppRun|Exec=env DESKTOPINTEGRATION=false /usr/bin/${pkgname}|"\
        "squashfs-root/yuzu.desktop"
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${srcdir}/Yuzu-EA-${pkgver}.AppImage" "${pkgdir}/opt/${pkgname}/Yuzu-EA-${pkgver}.AppImage"

    # Desktop file
    install -Dm644 "${srcdir}/squashfs-root/yuzu.desktop"\
            "${pkgdir}/usr/share/applications/yuzu.desktop"

    # Icon images
    install -dm755 "${pkgdir}/usr/share/"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/Yuzu-EA-${pkgver}.AppImage" "${pkgdir}/usr/bin/yuzu"
}
