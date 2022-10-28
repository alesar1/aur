# Maintainer: Daniel Lehmann <daniellehmann28@outlook.de>
pkgname=cyberghostvpn-openresolv
_pkgname=cyberghostvpn
pkgver=1.3.4
pkgrel=4
pkgdesc="CyberGhost VPN"
url="https://www.cyberghostvpn.com"
arch=('any')
license=('custom:cyberghostvpn')
depends=('curl' 'openvpn' 'wireguard-tools' 'openresolv')
conflicts=('cyberghostvpn')
makedepends=('zip')
install="${_pkgname}.install"
source=("https://download.cyberghostvpn.com/linux/${_pkgname}-ubuntu-20.04-${pkgver}.zip")
sha256sums=('fe9635b244231f943e8f05118e194a696b1e318fee265f06d138a08a421fb07f')

package() {
	mkdir -p "$pkgdir/usr/local/cyberghost"
	install -m 755 "$srcdir/${_pkgname}-ubuntu-20.04-${pkgver}/cyberghost/cyberghostvpn" "$pkgdir/usr/local/cyberghost/"
	install -m 755 "$srcdir/${_pkgname}-ubuntu-20.04-${pkgver}/cyberghost/update-systemd-resolved" "$pkgdir/usr/local/cyberghost/"
}
