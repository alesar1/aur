# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Matthew McGinn <mamcgi at gmail dot com>
# Contributor: alicewww <almw at protonmail dot com>
pkgname=mullvad-vpn-bin
pkgver=2021.5
pkgrel=1
pkgdesc="The Mullvad VPN client app for desktop"
url="https://www.mullvad.net"
arch=('x86_64')
license=('GPL3')
depends=('iputils' 'libnotify' 'libappindicator-gtk3' 'nss')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
install="${pkgname%-bin}.install"
source=("https://github.com/mullvad/mullvadvpn-app/releases/download/$pkgver/MullvadVPN-${pkgver}_amd64.deb"{,.asc}
        "${pkgname%-bin}.sh")
sha256sums=('877cbaa5a3507858af6efa38f9eeaae3a2f850b4c5e7452d66b5464a2f51dba0'
            'SKIP'
            'a59c29f07b4eab9af56f0e8be42bae0d83726f5185e88de0c5a48f4098c3c0a4')
validpgpkeys=('A1198702FC3E0A09A9AE5B75D5A1D4F266DE8DDF') # Mullvad (code signing) <admin@mullvad.net>

package() {
  bsdtar -xvf data.tar.xz -C "$pkgdir"

  # Link to the GUI binary
  install -m755 "$srcdir/${pkgname%-bin}.sh" "$pkgdir/usr/bin/${pkgname%-bin}"

  # Symlink daemon service to correct directory
  install -d "$pkgdir/usr/lib/systemd/system"
  ln -s "/opt/Mullvad VPN/resources/mullvad-daemon.service" \
    "$pkgdir/usr/lib/systemd/system"

  # Move ZSH completions to correct directory
  mv "$pkgdir/usr/local/share/zsh" "$pkgdir/usr/share"
  rm -rf "$pkgdir/usr/local"
}
