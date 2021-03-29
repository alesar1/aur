# Maintainer: Sardelli Tommaso <lacappannadelloziotom at gmail dot com>

pkgname=beekeeper-studio-appimage
pkgver=1.10.2
pkgrel=1
pkgdesc='Cross platform SQL editor and database management app for Windows, Linux, and Mac'
arch=('x86_64')
url='https://beekeeperstudio.io/'
license=('MIT')
provides=("beekeeper-studio=${pkgver}")
conflicts=('beekeeper-studio' 'beekeeper-studio-bin')
source=("https://github.com/beekeeper-studio/beekeeper-studio/releases/download/v${pkgver}/Beekeeper-Studio-${pkgver}.AppImage"
        beekeeper-studio.desktop.patch
        beekeeper-studio.sh)
sha256sums=('f12938b6d3b19b5c4fcd706172e6590e8c7756a25773fe7e6c371fd2b25f55fc'
            '7300068e4b78ed5af0678b15e7919c53c505cfa10318ab5755c902308bb73bdd'
            '6ec287cbcfb138b5249ba9c539c67cd1dfe5343d334595872de0dfc82115df2a')
options=(!strip)

_filename=./Beekeeper-Studio-${pkgver}.AppImage

prepare() {
  cd "${srcdir}"
  chmod +x ${_filename}
  ${_filename} --appimage-extract
  patch -Np0 < ./beekeeper-studio.desktop.patch
}


package() {
  install -Dm755 "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/beekeeper-studio.AppImage"
  install -Dm755 "${srcdir}/beekeeper-studio.sh" "${pkgdir}/usr/bin/beekeeper-studio"

  install -dm755 "${pkgdir}/usr/share/"
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

  install -Dm644 "${srcdir}/squashfs-root/beekeeper-studio.desktop" "${pkgdir}/usr/share/applications/beekeeper-studio.desktop"
}

# vim:set ts=2 sw=2 et:
