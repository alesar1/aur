pkgname=1password
_appimagver=0.9.14-4
_appimage="${pkgname}-${_appimagver}.AppImage"
pkgver=${_appimagver//-/_}
pkgrel=1
pkgdesc="Password manager and secure wallet"
arch=('x86_64')
url='https://1password.com'
license=('LicenseRef-1Password-Proprietary')
depends=('fuse2' 'zlib' 'hicolor-icon-theme')
options=(!strip)
source=(https://downloads.1password.com/linux/appimage/${_appimage}{,.sig})
noextract=("${_appimage}")
sha256sums=('644a4778178fd8ba63001583d5e43150e4542ac456bd9f1661ae48c5244b7977'
            '4fcaf16a2b2522a783384dfe554dc93f60e8263c611d771729cfc58d45d45ac8'
)
validpgpkeys=('3FEF9748469ADBE15DA7CA80AC2D62742012EA22')

prepare() {
    # Enable execution of AppImage
    chmod +x "${_appimage}"
    # Extract AppImage into squashfs-root folder
    ./"${_appimage}" --appimage-extract
    # Set permissions for squashfs-root folder
    chmod -R 0755 squashfs-root
}

package() {
    # Go to source directory
    cd "$srcdir"

    # Create directories for installation
    install -dm0755 "${pkgdir}"/usr/bin
    install -dm0755 "${pkgdir}"/opt
    install -dm0755 "${pkgdir}"/usr/share/icons
    # Install icons
    cp -r squashfs-root/usr/share/icons/hicolor "${pkgdir}"/usr/share/icons/
    # Modify .desktop file to run executable instead of AppImage
    sed -i -E "s|Exec=AppRun|Exec=/usr/bin/${pkgname}|" squashfs-root/${pkgname}.desktop
    # Install desktop file
    install -Dm644 squashfs-root/${pkgname}.desktop -t "${pkgdir}"/usr/share/applications/
    # Move package contents to opt
    mv squashfs-root "${pkgdir}"/opt/${pkgname}
    # Symlink /usr/bin executable to opt
    ln -s /opt/${pkgname}/${pkgname} "${pkgdir}"/usr/bin/${pkgname}
}
