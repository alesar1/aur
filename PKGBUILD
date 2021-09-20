# Maintainer: Thomas Queiroz <thomasqueirozb@gmail.com>
# Contributor: Sergio Schneider <spsf1964@gmail.com>

pkgname=session-desktop-appimage
pkgver=1.7.2
pkgrel=1
pkgdesc="Private messaging from your desktop"
arch=('x86_64')

#url="https://github.com/loki-project/session-desktop"
url="https://github.com/oxen-io/session-desktop"

license=('GPL3')
depends=('gtk2' 'libnotify' 'libxtst' 'nss' 'xdg-utils' 'libxss' 'fuse2')
provides=('session-desktop-appimage')
conflicts=('session-desktop' 'session-desktop-bin')

#https://github.com/loki-project/session-desktop/releases/download/1.1.0/session-messenger-desktop-linux-x86_64-1.1.0.AppImage
#https://github.com/loki-project/session-desktop/releases/download/v1.1.2/session-messenger-desktop-linux-x86_64-1.1.2.AppImage
#https://github.com/loki-project/session-desktop/releases/download/v1.4.3/session-desktop-linux-x86_64-1.4.3.AppImage

#_bin="session-messenger-desktop-linux-x86_64-${pkgver}.AppImage"
_bin="session-desktop-linux-x86_64-${pkgver}.AppImage"

#source=("${_bin}::https://github.com/loki-project/session-desktop/releases/download/v${pkgver}/${_bin}"
source=("${_bin}::https://github.com/oxen-io/session-desktop/releases/download/v${pkgver}/${_bin}"
        'session-desktop.desktop'
        'session-desktop.png')

sha256sums=('55ee4b73a7737fe46828eb9e06ff7604d4f87e49b77de6579e01098abd0b4f2f'
            '2bf3c1718e157626851aa1661388353c9a430635058a6e327f5cf4be3161e47b'
            '8f6f2fa7ac49e24551b6a6324e4fd6cd73b478c24f450296c7fd30556c01575c')

options=('!strip' '!emptydirs')

package() {
  install -Dm755 "${srcdir}/${_bin}" "${pkgdir}/opt/session-desktop/${_bin}"
  install -Dm644 "${srcdir}/session-desktop.desktop" "${pkgdir}/usr/share/applications/session-desktop.desktop"
  install -Dm644 "${srcdir}/session-desktop.png" "${pkgdir}/opt/session-desktop/session-desktop.png"
  mkdir -p "${pkgdir}/usr/bin/"
  ln -s "/opt/session-desktop/${_bin}" "${pkgdir}/usr/bin/session-desktop"
}
