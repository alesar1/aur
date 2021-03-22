pkgname=1password
_appimagver=8.0.30
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
sha256sums=('8fe7e9fdff27b5af8e3ae3855389a652b198955980a9d6973b8acb2748a7fa6f'
            '7a65bef1556faa93fde9ffbc3ee99e4110ef3c06535538f3699b7812464f450a'
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
