# Maintainer: Robin H. <robin at blckct dot io>

pkgname=sonixd-appimage
pkgver=0.15.3
pkgrel=1
pkgdesc="The latest stable AppImage of Sonixd - a full-featured Subsonic API compatible cross-platform desktop client"
arch=('x86_64')
url="https://github.com/jeffvli/sonixd"
license=('GPL3')
depends=('fuse2')
options=(!strip) # necessary otherwise the AppImage file in the package is truncated
_filename=Sonixd-$pkgver-linux-x86_64.AppImage
source=("${url}/releases/download/v${pkgver}/${_filename}")
sha256sums=('fb82f75c0b91ed3ff3e5ae7c497adeeb2522562ed3bd202cf2f3e0102ee1708c')
INSTALL_PATH="/opt/${pkgname}/${_filename}"


prepare() {
  chmod +x $_filename
  mkdir -p squashfs-root/usr/share/icons/hicolor
  ./$_filename --appimage-extract "usr/share/icons/hicolor/*/apps/sonixd.png" > /dev/null 2>&1
  ./$_filename --appimage-extract sonixd.desktop > /dev/null 2>&1
}

build() {
  sed -i -E "s|Exec=AppRun|Exec=${INSTALL_PATH}|" squashfs-root/sonixd.desktop
  # Fix permissions; .AppImage permissions are 700 for all directories
  chmod -R a-x+rX squashfs-root/usr
}

package() {
  # install icons
  install -dm755 "${pkgdir}/usr/share/icons"
  cp -dpr --no-preserve=ownership "squashfs-root/usr/share/icons" "${pkgdir}/usr/share"
  chmod -R 755 "${pkgdir}/usr/share/icons"
  find "${pkgdir}/usr/share/icons" -type f -name "sonixd.png" -exec chmod 644 {} \;

  # install .desktop file and image file
  install -Dm644 "squashfs-root/sonixd.desktop" "${pkgdir}/usr/share/applications/sonixd.desktop"
  install -Dm755 "${_filename}" "${pkgdir}${INSTALL_PATH}"

  # disable AppImage integration prompt
  # https://github.com/electron-userland/electron-builder/issues/1962
  install -dm755 "${pkgdir}/usr/share/appimagekit"
  touch "${pkgdir}/usr/share/appimagekit/no_desktopintegration"
  chmod 644 "${pkgdir}/usr/share/appimagekit/no_desktopintegration"
}

