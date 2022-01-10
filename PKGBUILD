# Maintainer: Ranadeep B < mail at rnbguy dot at >

_pkgname=gaia
pkgname=${_pkgname}d-bin
pkgver=6.0.0
pkgrel=1
pkgdesc="Cosmos SDK application for the Cosmos Hub"
arch=('x86_64')
url="https://github.com/cosmos/${_pkgname}"
license=('Apache')
provides=(${_pkgname}d)
conflicts=(${_pkgname}d)
source=("https://raw.githubusercontent.com/cosmos/${_pkgname}/v${pkgver}/LICENSE")
source_x86_64=("https://github.com/cosmos/${_pkgname}/releases/download/v${pkgver}/${_pkgname}d-v${pkgver}-linux-amd64")
sha256sums=('98bf5ef31e3c439d9d721a2b919fa285ad6a1ee607d71fb062a8b1849ae1e1fc')
sha256sums_x86_64=('d9b4391065a338107ca240f29539d62572fe1e85a6c455576afc5e93dba7f402')

package() {
    install -D "${_pkgname}d-v${pkgver}-linux-amd64" "$pkgdir/usr/bin/${_pkgname}d"
    install -m644 -Dt "$pkgdir/usr/share/licenses/$_pkgname" LICENSE
}
