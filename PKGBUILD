# Maintainer: Benjamin Denhartog <ben@sudoforge.com>

pkgname=terragrunt
pkgver=0.23.18
pkgrel=1
pkgdesc="A thin wrapper for Terraform that provides extra tools for working with multiple Terraform modules"
url="https://github.com/gruntwork-io/terragrunt"
arch=('x86_64')
makedepends=(
  'git'
  'go-pie'
)
depends=('terraform')
conflicts=('terragrunt')
provides=('terragrunt')
license=('MIT')
source=("terragrunt-${pkgver}.tar.gz::https://github.com/gruntwork-io/terragrunt/archive/v${pkgver}.tar.gz")
sha256sums=('98c3d7d375e1af6ae56b9704166d7b6bd4afeb59f0e0c59d20f29a1d77e9be9a')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  go build \
    -ldflags "-X github.com/gruntwork-io/terragrunt.VERSION=${pkgver}" \
    -o "${pkgname}-${pkgver}" \
    main.go
}

package() {
  # Install the license file
  install -D -m 0644 \
    "${srcdir}/${pkgname}-${pkgver}/LICENSE.txt" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Install the executable
  install -D -m 0755 \
    "${srcdir}/${pkgname}-${pkgver}/${pkgname}-${pkgver}" \
    "${pkgdir}/usr/bin/${pkgname}"
}

# vim:set ts=2 sw=2 et:
