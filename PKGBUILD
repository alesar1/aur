# Maintainer Thomas Queiroz <thomasqueirozb@gmail.com>
# Contributor: Sergio Schneider <spsf1964@gmail.com>

pkgname=session-desktop-appimage
pkgver=1.0.4
pkgrel=1
pkgdesc="Private messaging from your desktop"
arch=('x86_64')
url="https://github.com/loki-project/session-desktop"
license=('GPL3')
depends=('gtk2' 'libnotify' 'libxtst' 'nss' 'xdg-utils' 'libxss')
#$install=${pkgname}.install
provides=('session-desktop-appimage')
conflicts=('session-desktop' 'session-desktop-bin')

#https://github.com/loki-project/session-desktop/releases/download/v1.0.4/session-messenger-desktop-linux-x86_64-1.0.4.AppImage

_bin="session-messenger-desktop-linux-x86_64-${pkgver}.AppImage"
source=("https://github.com/loki-project/session-desktop/releases/download/v${pkgver}/${_bin}"
        'session-desktop.desktop'
        'session-desktop.png')

sha256sums=('e4fdb7e7faec101b34d7fe00ab09956932856ba8e7cfb69ac78d6379c74c7a51'
            '07f82f17054a1c5c58e6b776bbd90ac72ff98edb700fa994482e4e976882d9a0'
            '8f6f2fa7ac49e24551b6a6324e4fd6cd73b478c24f450296c7fd30556c01575c')

options=('!strip' '!emptydirs')

package() {
  install -Dm755 "${srcdir}/${_bin}" "${pkgdir}/opt/session-desktop/${_bin}"
  install -Dm644 "${srcdir}/session-desktop.desktop" "${pkgdir}/usr/share/applications/session-desktop.desktop"
  install -Dm644 "${srcdir}/session-desktop.png" "${pkgdir}/opt/session-desktop/session-desktop.png"
  mkdir -p "${pkgdir}/usr/bin/"
  ln -s "/opt/session-desktop/${_bin}" "${pkgdir}/usr/bin/session-desktop"
}
