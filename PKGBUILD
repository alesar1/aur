# Maintainer: graysky <graysky AT archlinux DOT us>

pkgname=lxc-service-snapshots
pkgver=2.11
pkgrel=1
pkgdesc='Run disposable (read-only then delete) Linux containers (LXC) to serve up OpenVPN, Pi-Hole, or WireGuard.'
arch=('any')
url='https://github.com/graysky2/lxc-service-snapshots'
license=('MIT')
depends=('systemd' 'lxc>=1:2.1.0')
optdepends=('fake-hwclock-git: save/restore system clock on machines without working RTC hardware')
source=("$pkgname-$pkgver.tar.gz::https://github.com/graysky2/$pkgname/archive/v$pkgver.tar.gz")
backup=('etc/conf.d/openvpn-lss.conf' 'etc/conf.d/pihole-lss.conf' 'etc/conf.d/wireguard-lss.conf')
sha256sums=('6d07711daecdecfc7dbdae178d2e24009fc99e1d52ca8360f8c9a44433cd73b1')

build() {
  cd "$pkgname-$pkgver"
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
