# Maintainer: Jose Cardoso <archlinux dot org at josecardoso dot com>
arch=("aarch64" "x86_64")
conflicts=("macchina")
license=("MIT")
optdepends=("wmctrl")
pkgdesc="A system information fetcher/frontend, with an (unhealthy) emphasis on performance"
pkgname=macchina-bin
pkgrel=2
pkgver=6.1.6
provides=("macchina=${pkgver}")
sha256sums_aarch64=("bb0f471538eab4d5714977b173be81ce009a053a1796bc41f6aa9256ea6ba5c6")
sha256sums_x86_64=("33f157858261c913d42dd6e1b9b9d22a23148537e6ea9dea25e4f26b250001f3")
source_aarch64=("${pkgname}-${pkgver}-${pkgrel}::https://github.com/macchina-cli/macchina/releases/download/v${pkgver}/macchina-linux-aarch64")
source_x86_64=("${pkgname}-${pkgver}-${pkgrel}::https://github.com/macchina-cli/macchina/releases/download/v${pkgver}/macchina-linux-x86_64")
url="https://github.com/macchina-cli/macchina"

package() {
  install -Dm 755 "${srcdir}/${pkgname}-${pkgver}-${pkgrel}" "${pkgdir}/usr/bin/macchina"
}
