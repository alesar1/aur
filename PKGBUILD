# Maintainer: Oscar Morante <oscar@mooistudios.com>
# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix

pkgname=gravit-designer-bin
pkgver=3.4.1
pkgrel=3
pkgdesc="A cross-platform, free design tool for the 21st century empowering everyone to design"
arch=('x86_64')
url="https://designer.io/"
license=('custom:freeware')
depends=('libxss' 'gconf' 'nss' 'gtk3' 'libindicator-gtk2' 'libdbusmenu-gtk2' 'electron')
source=("${pkgname}-${pkgver}.zip::https://designer.gravit.io/_downloads/linux/GravitDesigner.zip"
        "gravit-designer.png"
        "LICENSE")
noextract=("glibc-2.27-3-x86_64.pkg.tar.xz")
md5sums=('8ee550fa9444ac994e219cb8a05f150f'
         '17969adf6d872a541772e169658b82d1'
         '021ccafc0993d3c34265ae59048d4bf2')
PKGEXT='.pkg.tar'

package() {
  # Extract AppImage
  chmod +x GravitDesigner.AppImage
  ./GravitDesigner.AppImage --appimage-extract

  # Patch desktop file
  _df="${srcdir}/squashfs-root/gravit-designer.desktop"
  sed -i "/^Exec=/cExec=electron --app=/opt/gravit-designer-bin/resources/app.asar" "${_df}"
  sed -i "s/^X-AppImage-Version=/Version=/" "${_df}"
  sed -i "/^X-AppImage/d" "${_df}"

  # Install
  install -d "${pkgdir}/usr/share"
  install -D ${_df} "${pkgdir}/usr/share/applications/gravitdesigner.desktop"
  install -D "${srcdir}/gravit-designer.png" "${pkgdir}/usr/share/pixmaps/gravit-designer.png"
  #cp -r --no-preserve=all "${srcdir}/squashfs-root/usr/share" "${pkgdir}/usr"

  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  cp --no-preserve=all \
    "${srcdir}/LICENSE" \
    "${srcdir}"/squashfs-root/LICENSE* \
    "${pkgdir}/usr/share/licenses/${pkgname}"

  rm -r "${srcdir}/squashfs-root/AppRun" \
        "${srcdir}/squashfs-root/gravit-designer.desktop" \
        "${srcdir}"/squashfs-root/LICENSE*

  install -d "${pkgdir}/opt/${pkgname}"
  cp -r --no-preserve=all ${srcdir}/squashfs-root/* ${pkgdir}/opt/${pkgname}

  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname}/gravit-designer" "${pkgdir}/usr/bin/gravit-designer"
  chmod +x "${pkgdir}/opt/${pkgname}/gravit-designer"
}
