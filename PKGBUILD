# Maintainer: Ethan Brittain-Morby <ebm539 at protonmail dot com>
pkgname=dsvpn
pkgver=0.1.0
pkgrel=1
pkgdesc="A Dead Simple VPN."
arch=('any')
url="https://github.com/jedisct1/dsvpn"
license=('MIT')
depends=()
makedepends=(make gcc)
provides=(${pkgname}-git)
conflicts=(${pkgname}-git)
source=("https://github.com/jedisct1/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('97bf922c957827b01123796c7089ad4c8b84f0ef6ae4f600ace21fe07598b46f')

build() {
  cd "${pkgname}-${pkgver}"
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  install -dm 755 "${pkgdir}"/usr/bin/
  install -m 755 dsvpn "${pkgdir}"/usr/bin/dsvpn
}

