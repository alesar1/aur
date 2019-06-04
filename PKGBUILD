# Maintainer: Josh Ellithorpe <quest@mac.com>

pkgname=ledger-udev
pkgver=1
pkgrel=6
pkgdesc='Udev rules to connect a ledger wallet to your linux box'
arch=(any)
url='https://www.ledgerwallet.com'
license=(GPL)
depends=(udev)
install='ledger-udev.install'

source=(https://raw.githubusercontent.com/LedgerHQ/udev-rules/master/20-hw1.rules)
sha256sums=('8151a3d1d2bc656fef397d9a4e9e85f58873ca7a775fdfee36fcf555660d4f6f')

package() {
  install -Dm 644 20-hw1.rules "$pkgdir"/usr/lib/udev/rules.d/20-hw1.rules
}
