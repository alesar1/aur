# Maintainer: Plague-doctor <plague at privacyrequired dot com>

pkgname=standardnotes-bin
pkgver=3.6.1
pkgrel=1
pkgdesc='Standard Notes'
arch=('x86_64')
url='https://standardnotes.org'
license=('AGPL3')
_shortname=standard-notes
_appimage=$pkgname-$pkgver-$pkgrel.AppImage
depends=('hicolor-icon-theme')
options=(!strip)
conflicts=('standardnotes-desktop')
source=(
        "${_appimage}::https://github.com/standardnotes/desktop/releases/download/v$pkgver/$_shortname-$pkgver-linux-x86_64.AppImage"
)
sha256sums=('94d7bcf6be9dcd6308300c3d9d29e25d7427a48f8b545220d26c5670fd8cdec3')

prepare() {
    chmod +x ${_appimage}
    ./${_appimage} --appimage-extract
}

package() {
    cd "$srcdir"

    # Create Directories
    install -d "${pkgdir}/usr/bin"
    install -dm755 "${pkgdir}/usr/share/icons/hicolor"

    # Install AppImage
    install -Dm755 "${_appimage}" -t "${pkgdir}/opt/${_shortname}/"


    # Install Icons, Desktop Shortcut
    cp -r squashfs-root/usr/share/icons/hicolor "${pkgdir}/usr/share/icons/"
    chmod 755 -Rf "${pkgdir}/usr/share/icons"
    chmod 644 "${pkgdir}/usr/share/icons/hicolor/512x512/apps/${_shortname}.png"
    sed -i -E "s|Exec=AppRun|Exec=env DESKTOPINTEGRATION=false /usr/bin/${_shortname}|" "squashfs-root/${_shortname}.desktop"
    install -Dm644 "squashfs-root/${_shortname}.desktop" -t "${pkgdir}/usr/share/applications/"

    ## Symlink AppImage
    ln -s "/opt/${_shortname}/${_appimage}" "${pkgdir}/usr/bin/${_shortname}"
}

