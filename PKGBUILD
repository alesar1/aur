# Maintainer: Audrey Baxter <baxtea@pm.me>

pkgname=raven-reader-bin
_pkgname=raven-reader
pkgver=0.3.8
pkgrel=1
pkgdesc="Simple RSS Reader app made using electron and vue.js"
arch=('x86_64')
url="https://github.com/mrgodhani/$_pkgname/releases"
license=('MIT')
depends=('electron' 'gtk2' 'dbus-glib' 'libdbusmenu-glib')
makedepends=()
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("${_pkgname}-${pkgver}.AppImage::https://github.com/mrgodhani/$_pkgname/releases/download/v0.3.8/$_pkgname-0.3.8-x86_64.AppImage")
md5sums=('794ca7703b50ea05d040081855b86de3')

package() {
  # Extract AppImage
  chmod +x "${_pkgname}-${pkgver}.AppImage"
  "./${_pkgname}-${pkgver}.AppImage" --appimage-extract

  # Patch desktop file
  _df="${srcdir}/squashfs-root/$_pkgname.desktop"
  sed -i "/^Exec=/cExec=$_pkgname" "${_df}"
  sed -i "s/^X-AppImage-Version=/Version=/" "${_df}"
  sed -i "/^X-AppImage/d" "${_df}"

  # Install
  install -d "${pkgdir}/usr/share"
  install -D ${_df} "${pkgdir}/usr/share/applications/$_pkgname.desktop"
  install -D "${srcdir}/squashfs-root/usr/share/icons/hicolor/256x256/apps/$_pkgname.png" \
             "${pkgdir}/usr/share/pixmaps/$_pkgname.png"

  install -d "${pkgdir}/usr/share/licenses/${_pkgname}"
  cp --no-preserve=all \
    "${srcdir}"/squashfs-root/LICENSE* \
    "${pkgdir}/usr/share/licenses/${_pkgname}"

  rm -r "${srcdir}/squashfs-root/AppRun" \
        "${srcdir}/squashfs-root/$_pkgname.desktop" \
        "${srcdir}/squashfs-root/usr/share" \
        "${srcdir}"/squashfs-root/LICENSE*

  install -d "${pkgdir}/opt/${_pkgname}"
  cp -r --no-preserve=all ${srcdir}/squashfs-root/* ${pkgdir}/opt/${_pkgname}

  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${_pkgname}/$_pkgname" "${pkgdir}/usr/bin/$_pkgname"
  chmod +x "${pkgdir}/opt/${_pkgname}/$_pkgname"
}