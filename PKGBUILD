# Maintainer: Thomas Mashos <thomas at mashos dot com>
pkgname=remote-desktop-manager
pkgver=2022.2.1.4
pkgrel=1
pkgdesc="Devolutions Remote Desktop Manager Enterprise centralizes all remote connections on a single platform that is securely shared between users and across the entire team."
arch=('x86_64')
url="https://remotedesktopmanager.com/"
license=('Proprietary')
groups=()
depends=('webkit2gtk' 'p11-kit')
options=(!strip)
install=${pkgname}.install
source=("RemoteDesktopManager_${pkgver}_amd64.deb::https://cdn.devolutions.net/download/Linux/RDM/${pkgver}/RemoteDesktopManager_${pkgver}_amd64.deb")
sha256sums=('0093cabb89e128075883ca9b7be01d4de4689ec864f12cf6d5cb95119a293bb9')

prepare() {
  tar -xf ${srcdir}/data.tar.xz
  sed -i "s/usr\/lib/opt/" "${srcdir}/bin/remotedesktopmanager"
  sed -i "s/usr\/lib/opt/" "${srcdir}/usr/share/applications/remotedesktopmanager.desktop"
  sed -i "s/RemoteDesktopManager\/RemoteDesktopManager/RemoteDesktopManager\/RemoteDesktopManager %u/" "${srcdir}/usr/share/applications/remotedesktopmanager.desktop"
  echo "MimeType=x-scheme-handler/rdm;" >> "${srcdir}/usr/share/applications/remotedesktopmanager.desktop"
}

package() {
  mkdir -p "${pkgdir}/usr/bin"
  mv "bin/remotedesktopmanager" "${pkgdir}/usr/bin/"

  mkdir -p "${pkgdir}/opt/devolutions"
  mv "usr/lib/devolutions/RemoteDesktopManager" "${pkgdir}/opt/devolutions"

  mkdir -p "${pkgdir}/usr/share/applications"
  mv "usr/share/applications/remotedesktopmanager.desktop" "${pkgdir}/usr/share/applications/"
  
  mkdir -p "${pkgdir}/usr/share/icons"
  mv "usr/share/icons/remotedesktopmanager.png" "${pkgdir}/usr/share/icons/"
}

