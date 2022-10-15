# Maintainer: spaceslug <me at spaceslug dot no>
pkgname=dwarffortress-linuxdwarfpack-appimage
pkgver=0.47.05_r7
pkgrel=1
pkgdesc="The AppImage of lnp-forge built LinuxDwarfPack appimage"
arch=('x86_64')
url="https://github.com/McArcady/lnp-forge"
license=('unknown')
depends=('ncurses' 'qt5-base' 'webkit2gtk' 'tk' 'tcl' 'fuse2' 'fuse-overlayfs' 'gtk2' 'glu' 'sdl' 'sdl_image' 'sdl_ttf' 'libsndfile' 'openal' 'glew' 'gcc-libs' 'glib2')
optdepends=('nvidia-utils: If you have nvidia graphics'
            'alsa-lib: for alsa sound'
            'libpulse: for pulse sound')
options=(!strip) # necessary otherwise the AppImage file in the package is truncated
_filename=Dwarf_Fortress-${pkgver//_/-}-x86_64.AppImage
source=("${url}/releases/download/${pkgver//_/-}/${_filename}")
sha256sums=('aebb171bf69721e9441c4fb28a9ee4e779b1858b3e087e9a6ad4de0cda8500e5')
INSTALL_FOLDER="/opt/${pkgname}"
INSTALL_PATH="${INSTALL_FOLDER}/${_filename}"


prepare() {
  chmod +x $_filename
  ./$_filename --appimage-extract "usr/share/icons/hicolor/*/apps/linux-dwarf-pack.png" > /dev/null 2>&1
  ./$_filename --appimage-extract com.bay12forums.linuxdwarfpack.desktop > /dev/null 2>&1
}

build() {
  sed -i -E "s|Exec=linux-dwarf-pack.sh|Exec=${INSTALL_PATH}|" squashfs-root/com.bay12forums.linuxdwarfpack.desktop
  sed -i -E "s|Name=Dwarf Fortress|Name=Dwarf Fortress LDP|" squashfs-root/com.bay12forums.linuxdwarfpack.desktop
  echo "Comment=Dwarf Fortress launcher for LinuxDwarfPack" >> squashfs-root/com.bay12forums.linuxdwarfpack.desktop
  # Fix permissions; .AppImage permissions are 700 for all directories
  chmod -R a-x+rX squashfs-root
}

package() {
  # install icons
  install -dm755 "${pkgdir}/usr/share/icons"
  cp -dpr --no-preserve=ownership "squashfs-root/usr/share/icons" "${pkgdir}/usr/share"
  chmod -R 755 "${pkgdir}/usr/share/icons"
  find "${pkgdir}/usr/share/icons" -type f -name "linux-dwarf-pack.png" -exec chmod 644 {} \;

  # install .desktop file
  install -Dm644 "squashfs-root/com.bay12forums.linuxdwarfpack.desktop" "${pkgdir}/usr/share/applications/com.bay12forums.linuxdwarfpack.desktop"
  install -Dm755 "${_filename}" "${pkgdir}${INSTALL_PATH}"

}


