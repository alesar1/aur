# Maintainer: Radoslaw Mejer <radmen@radmen.info>

pkgname=rabtap-bin
pkgver=1.19
pkgrel=1
pkgdesc="RabbitMQ wire tap and swiss army knife"
arch=(x86_64)
url="https://github.com/jandelgado/rabtap"
license=(GPL3)
depends=()
conflicts=(rabtap)
source_x86_64=("https://github.com/jandelgado/rabtap/releases/download/v${pkgver}/rabtap-v${pkgver}-linux-amd64.zip")
sha256sums_x86_64=('8625fc8f45c18b94c31a69bb4d0941e0506f95b572228580e4512a3c7960ed6d')

package() {
  install -Dm655 ${srcdir}/bin/rabtap-linux-amd64 ${pkgdir}/usr/bin/rabtap
}
