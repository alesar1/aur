# Maintainer: Gilbert Gilb's <gilbsgilbert@gmail.com>

pkgname=freecad-assembly3-appimage
pkgver=2022.10.21
pkgrel=1
pkgdesc="Assembly3 workbench for FreeCAD."
arch=('x86_64')
url="https://github.com/realthunder/FreeCAD"
license=('LGPLv2')
depends=('fuse2')
options=(!strip) # necessary otherwise the AppImage file in the package is truncated

_filename="FreeCAD-asm3-${pkgver}.AppImage"
_squashfs_desktop_file="freecad_link.desktop"
_desktop_file="/usr/share/applications/freecad-asm3-appimage.desktop"
_appimage_name="FreeCAD-asm3.AppImage"
_install_path="/opt/appimages/${_appimage_name}"

noextract=("${_filename}")
source=(
  "${_filename}::https://github.com/realthunder/FreeCAD/releases/download/2022.10.21-2-edge/FreeCAD-asm3-Daily-Conda-Py3-Qt5-20221021-glibc2.12-x86_64.AppImage"
  "https://raw.githubusercontent.com/realthunder/FreeCAD/2022.10.21-2-edge/LICENSE"
  "freecad_link.desktop.patch"
)
sha512sums=(
  "c8bb6ffb0cf0e9147bed5d1ed53ae23339991e31db909a30513f5f6f7245e0af5018110356fdf03033d86f9d6f30bbe39025b6fac4fec92746b21861de8f489a"
  "4d1b0998dc55adcfb2ac2f33382bce6467078aaa33dbd3bedf5c2102da853d4186836ad4103ea6100f34068751a5a9d627c022bf2f01deb712e88c6c58e0e292"
  "6a47efb5fb429829b31a322620b90fbd36b9def22479aa7fefbce20a51373720140c28b6aadae4c630bcf1629d6ca9099fceb2444e88954d0e5b53a9f612e233"
)

prepare() {
  cd "${srcdir}"

  chmod +x "${_filename}"

  # Extract relevant files in AppImage
  "./${_filename}" --appimage-extract "usr/share/icons" > /dev/null
  "./${_filename}" --appimage-extract "${_squashfs_desktop_file}" > /dev/null

  # Patch the .desktop file
  patch -Np0 < ./freecad_link.desktop.patch

  # Rename icons
  find "squashfs-root/usr/share/icons" -type f -not -name 'freecad_link.*' -delete
  find "squashfs-root/usr/share/icons" -type d -empty -delete
  find "squashfs-root/usr/share/icons" -type f -name "freecad_link.svg" -execdir mv {} "${pkgname}.svg" \;
  find "squashfs-root/usr/share/icons" -type f -name "freecad_link.png" -execdir mv {} "${pkgname}.png" \;
}

package() {
  # Copy AppImage file
  install -Dm755 "${_filename}" "${pkgdir}/${_install_path}"

  # Make AppImage available as freecad-asm3 in PATH
  mkdir -p "${pkgdir}/usr/bin/"
  ln -s "${_install_path}" "${pkgdir}/usr/bin/freecad-asm3"

  # Copy Desktop entry
  install -Dm644 "${srcdir}/squashfs-root/freecad_link.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

  # Copy icons
  install -dm755 "${pkgdir}/usr/share/icons"
  cp -dpr --no-preserve=ownership "squashfs-root/usr/share/icons" "${pkgdir}/usr/share"
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

  # Copy license file
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}