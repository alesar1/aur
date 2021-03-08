pkgname=1password
_appimagver=8.0.27
_appimage="${pkgname}-${_appimagver}.AppImage"
pkgver=${_appimagver//-/_}
pkgrel=1
pkgdesc="Password manager and secure wallet"
arch=('x86_64')
url='https://1password.com'
license=('LicenseRef-1Password-Proprietary')
depends=('fuse2' 'zlib' 'hicolor-icon-theme')
options=(!strip)
install="${pkgname}.install"
source=(https://downloads.1password.com/linux/appimage/${_appimage}{,.sig})
noextract=("${_appimage}")
sha256sums=('ab3657b3b6a4e34e76220abe616bb3803a89ef5e37ab9ab0e4fddbdde3773645'
            'fbc9cf798b380620095b1ea40f3f16d5d7b1d39370689c9bd1001a79e413bc80'
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
    # Install system unlock PolKit policy file
    install -Dm0644 "${pkgdir}"/opt/${pkgname}/com.1password.1Password.policy -t "${pkgdir}"/usr/share/polkit-1/actions/
    # Symlink /usr/bin executable to opt
    ln -s /opt/${pkgname}/${pkgname} "${pkgdir}"/usr/bin/${pkgname}
}
