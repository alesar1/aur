# Maintainer: Morteza NourelahiAlamdari <m@0t1.me>

pkgname="immuadmin"
_pkgname="immudb"
pkgver="1.0.1"
pkgrel=1
pkgdesc="immudb - world’s fastest immutable database"
arch=('x86_64')
url="https://www.codenotary.com/technologies/immudb/"
license=('Apache-2.0')
source=("https://github.com/codenotary/${_pkgname}/releases/download/v${pkgver}/${pkgname}-v${pkgver}-linux-amd64")
sha256sums=('640d73fc01697a75d41ea8ef78e35f938a6e6fbbfefa7295ff2c708f692b7f4a')

package() {
  mkdir -p "${pkgdir}/usr/local/bin"
  install -Dm755 "${pkgname}-v${pkgver}-linux-amd64" "$pkgdir/usr/local/bin/${pkgname}"
}
