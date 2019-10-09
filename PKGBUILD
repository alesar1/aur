# Maintainer: Benjamin Denhartog <ben@sudoforge.com>

pkgname=terragrunt-bin
pkgver=0.20.0
pkgrel=1
pkgdesc="A thin wrapper for Terraform that provides extra tools for working with multiple Terraform modules"
url="https://github.com/gruntwork-io/terragrunt"
depends=('terraform')
conflicts=('terragrunt')
provides=('terragrunt')
license=('MIT')
arch=('x86_64')
source=(
  "terragrunt_linux_amd64-${pkgver}::https://github.com/gruntwork-io/terragrunt/releases/download/v${pkgver}/terragrunt_linux_amd64"
  "https://raw.githubusercontent.com/gruntwork-io/terragrunt/v${pkgver}/LICENSE.txt"
)
sha256sums=(
  'a462de65463e142a430b65770650f5f028d28b60e13a830ac8092506ff2c7146'
  'e41bccb5e4a65186fdfa96e504065fd490894a5f7d22aa6b00da893bca76c887'
)

package() {
  install -D -m 755 "${srcdir}/${source[0]%%::*}" "${pkgdir}/usr/bin/${pkgname%-bin}"
  install -D -m 644 "${srcdir}/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
