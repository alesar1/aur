# Maintainer: thynkon <thynkon at protonmail dot com>

pkgname=joplin-appimage
pkgver=1.6.1
pkgrel=1
pkgdesc="The latest pre-released AppImage of Joplin - a cross-platform note taking and to-do app"
arch=('x86_64')
url="https://github.com/laurent22/joplin"
license=('MIT')
options=(!strip) # necessary otherwise the AppImage file in the package is truncated
_filename=Joplin-$pkgver.AppImage
source=(
  ${url}/releases/download/v${pkgver}/Joplin-${pkgver}.AppImage
  ${url}/raw/v${pkgver}/LICENSE
)
sha512sums=(
  513cc077134230982fea3f7a74b6b392a59e57ea79a4f8d2cc2ac379cb163fe6eb5f94b0b790b633b4bb794fd2d186b80bcc3369ba1907d662a86885ccec0668
  SKIP
)

package() {
    chmod +x $_filename
    mkdir -p squashfs-root/usr/share/icons/hicolor/{72x72,16x16}/apps
    ./$_filename --appimage-extract "usr/share/icons/hicolor/*/apps/@joplinapp-desktop.png" > /dev/null 2>&1
    ./$_filename --appimage-extract @joplinapp-desktop.desktop > /dev/null 2>&1
    INSTALL_PATH="/opt/appimages/Joplin.AppImage"
    sed -i -E "s|Exec=AppRun|Exec=${INSTALL_PATH}|" squashfs-root/@joplinapp-desktop.desktop
    sed -i -E "s|Icon=joplin|Icon=@joplinapp-desktop|" squashfs-root/@joplinapp-desktop.desktop

    # install icons
    install -dm755 "$pkgdir/usr/share/icons"
    cp -dpr --no-preserve=ownership "squashfs-root/usr/share/icons" "$pkgdir/usr/share"
    chmod -R 755 "$pkgdir/usr/share/icons"
    find "$pkgdir/usr/share/icons" -type f -name "@joplinapp-desktop.png" -exec chmod 644 {} \;

    # install .desktop file and image file
    install -Dm644 "squashfs-root/@joplinapp-desktop.desktop" "$pkgdir/usr/share/applications/joplin.desktop"
    install -Dm755 "$_filename" "$pkgdir$INSTALL_PATH"

    # disable AppImage integration prompt
    # https://github.com/electron-userland/electron-builder/issues/1962
    install -dm755 "$pkgdir/usr/share/appimagekit"
    touch "$pkgdir/usr/share/appimagekit/no_desktopintegration"
    chmod 644 "$pkgdir/usr/share/appimagekit/no_desktopintegration"
}
