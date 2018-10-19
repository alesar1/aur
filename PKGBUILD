#  Maintainer: Greg Flynn <gregflynn42 at gmail dot com>

pkgname="pulse-sms"
pkgver="3.1.2"
pkgrel=1
pkgdesc="A native desktop implementation of Pulse"
arch=('x86_64')
url="https://messenger.klinkerapps.com/"
depends=('gconf' 'libnotify' 'libxtst' 'nss' 'libxss')

source=(
    "https://github.com/klinker24/messenger-desktop/releases/download/v${pkgver}/pulse-sms-${pkgver}-amd64.deb"
)
sha512sums=(
    "22f6d45cefa4b55f166281bafa8ebbe9e4e250507f1829be1c207da2f0bdb2820ec03072227ae38edc4c9e586c811cd600a09992c163e6a5f3a922e3e3016aed"
)

package() {
    tar -xf data.tar.xz -C "$pkgdir"
}
