# Maintainer: Marek "foxie" Brenčič <marek@brencic.sk>
# Contributor: Radoslaw Mejer <radmen @ radmen.info>

pkgname=stoplight-studio-appimage
pkgver=2.3.0
_realver=2.3.0-stable.5696.git-feef2f0
pkgrel=5
pkgdesc="The modern editor for API Architects and Technical Writers."
arch=('x86_64')
url='https://stoplight.io/studio/'
license=('custom')
depends=('fuse2')
source=(
  "stoplight-studio-linux-x86_64-${_realver}.AppImage::https://github.com/stoplightio/studio/releases/download/v${_realver}/stoplight-studio-linux-x86_64.AppImage"
  "stoplight-studio.desktop"
)
sha512sums=(
  "3656a159bae909f5b932380e6ecea5109b1d3d3d61e8639356f33b1dadd8eadeb7673c98d59dece0167f29a2814a61f7e129756984e94cb62955b37f38d62265"
  "0c7c3742debb40ed5a3323467441890e900d4416ddc10e2778ddadd930b7b9f0447978c446b4b80fd5c6ee29f4ca65054e0b8ccf59cd1780a95c044867ec54af"
)
options=(!strip)
_filename="./stoplight-studio-linux-${arch}-${_realver}.AppImage"

prepare() {
  cd "${srcdir}"
  chmod +x ${_filename}
  ${_filename} --appimage-extract
}

package() {
  install -Dm755 "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/stoplight-studio.AppImage"

  install -dm755 "${pkgdir}/usr/share/"
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

  install -Dm644 "${srcdir}/stoplight-studio.desktop" "${pkgdir}/usr/share/applications/stoplight-studio.desktop"
}
