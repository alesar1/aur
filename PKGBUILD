# Maintainer: Janek Thomaschewski <janek@jbbr.net>
# Maintainer: Stephan Springer <buzo+arch@Lini.de>

pkgname=signal-desktop-bin
pkgver=1.24.0
pkgrel=1
pkgdesc='Private messaging from your desktop'
arch=('x86_64')
url='https://github.com/signalapp/Signal-Desktop'
license=('GPL3')
provides=('signal-desktop')
conflicts=('signal')
options=('!strip')
depends=('gconf' 'gtk3' 'libnotify' 'nss' 'xdg-utils' 'libxss')
source=("https://updates.signal.org/desktop/apt/pool/main/s/signal-desktop/signal-desktop_${pkgver}_amd64.deb")
sha256sums=('69b2809862fb49c93f3fe3cd9157e2e5392c83a59b94fc52a103d397840fae40')

package() {
  # extract package data
  tar xf data.tar.xz -C "${pkgdir}"

  # fix permissions in 1.9.0+ (Some directories have now 775; changing them back to 755)
  find "${pkgdir}" -type d -not -perm 755 -exec chmod 755 {} \;

  # install symbolic link in /usr/bin
  install -d -m755 "${pkgdir}/usr/bin"
  ln -s /opt/Signal/signal-desktop "${pkgdir}/usr/bin"

  # second desktop entry for starting in tray only
  sed -e 's,^\(Name=.*\),\1 (Start in Tray),' -e 's,^\(Exec=.*\)%U,\1--start-in-tray %U,' \
      "${pkgdir}"/usr/share/applications/signal-desktop.desktop \
      > "${pkgdir}"/usr/share/applications/signal-desktop-tray.desktop
}
