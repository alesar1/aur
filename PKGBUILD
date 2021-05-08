# Maintainer: Chris Werner Rau <aur@cwrau.io>
# Maintainer: flaviofearn <flavioislima@gmail.com>

pkgname=heroic-games-launcher-appimage
_pkgver=v1.6.1
pkgver=${_pkgver#v}
pkgrel=1
pkgdesc="HGL, a Native alternative Linux Launcher for Epic Games"
arch=('x86_64')
url="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher"
license=('GPL3')
conflicts=(${pkgname%-*}-{bin,electron})
depends=("fuse2" "gawk" "python-wheel" "python-setuptools")
_filename=heroic-${pkgver}.AppImage
source=("$url/releases/download/${_pkgver}/${_filename}"
        "heroic.desktop.patch"
        "heroicGamesLauncher")
md5sums=('3260014a95c39a3790b4ae21bb8d2c5e'
         'ca15ab98d434d881c3db27bb8573440d'
         '22f51cb64049525f8510046e69c715b7')
options=(!strip)

prepare() {
  cd "${srcdir}"
  chmod +x ./${_filename}
  ./${_filename} --appimage-extract
  patch -Np0 < ./heroic.desktop.patch
}

package() {
  install -Dm755 "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/HeroicGamesLauncher.AppImage"
  install -Dm755 "${srcdir}/heroicGamesLauncher" -t "${pkgdir}/usr/bin/"

  install -dm755 "${pkgdir}/usr/share/"
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"
  install -Dm644 "${srcdir}/squashfs-root/heroic.desktop" -t "${pkgdir}/usr/share/applications/"
}

# vim:set ts=2 sw=2 et:
