# Maintainer: Alexander Björk <bjorkalx@protonmail.com>

pkgname="espi-appimage"
pkgdesc="Software recreation of the SP-1200 drum machine"
pkgver="1.0.2"
pkgrel=1
arch=('x86_64')
url="https://low-hiss.com/"
license=('custom')
depends=('fuse2' 'squashfuse')
provides=('espi')
conflicts=('espi')
source=("https://low-hiss.com/eSPi-${pkgver//_/-}.AppImage"
	"espi.sh"
	"eSPi.desktop.patch")
sha256sums=('0677f0b6fa29a56bbb5c01a03eef412f844427f2f8aaf475d0841929212fbb56'
	    'edb66d88966e208937628e97da9b6c3a80441b29c1075f5c32c7d6bd0d6cc8cb'
	    '26df8d45e662bde820c114a6e50c5ead169f65a6868ece246c13d36da519673d')
options=(!strip)

prepare() {
  cd "${srcdir}"
  chmod +x eSPi-${pkgver//_/-}.AppImage
  ./eSPi-${pkgver//_/-}.AppImage --appimage-extract
  cd "${srcdir}/squashfs-root/"
  patch --strip=1 < ../eSPi.desktop.patch
}

package() {
  install -Dm755 "${srcdir}/eSPi-${pkgver//_/-}.AppImage" "${pkgdir}/opt/appimages/eSPi-${pkgver//_/-}.AppImage"
  install -Dm755 "${srcdir}/espi.sh" "${pkgdir}/usr/bin/espi"
  install -dm755 "${pkgdir}/usr/share/"
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"
  install -Dm644 "${srcdir}/squashfs-root/eSPi.desktop" "${pkgdir}/usr/share/applications/eSPi.desktop"
}
