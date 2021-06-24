# Maintainer: Daniel Langbein <daniel@systemli.org>

pkgname="riseup-vpn-terminal"
pkgver=0.0.3
pkgrel=2
pkgdesc="Script and desktop entry to start RiseupVPN in a terminal; useful when on desktop environment without tray icon support (e.g. GNOME, Phoc)"
arch=('any')
license=('MIT')


depends=('riseup-vpn')
# Fix for issue 374
# https://0xacab.org/leap/bitmask-vpn/-/issues/374
depends+=('lxqt-policykit')

makedepends=('git')  # to fetch source(s) via git
source=('riseup-vpn-terminal' 'riseup-vpn-terminal.desktop')
sha256sums=('b6e126c2ddfd10721acb9e1f7dd028ffc66efa194e21690ca2ed2012e7d54909' \
            '8f77468d7852b489a6b1ff4c88272e3aee50af49d7e36341bf1677e872e5aecb')

package() {
  install -Dm0555 riseup-vpn-terminal         "$pkgdir"/usr/bin/riseup-vpn-terminal

  # Starting the .desktop entry from Phoc does not work at the moment,
  # see https://source.puri.sm/Librem5/phoc/-/issues/219
  install -Dm0644 riseup-vpn-terminal.desktop "$pkgdir"/usr/share/applications/riseup-vpn-terminal.desktop
}
