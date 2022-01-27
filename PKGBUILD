# Maintainer: Ranadeep B < mail at rnbguy dot at >

_pkgname=starport
pkgname=${_pkgname}-bin
pkgver=0.19.3
pkgrel=1
pkgdesc="The all-in-one platform to build, launch and maintain any crypto application on a sovereign and secured blockchain"
arch=('x86_64')
url="https://${_pkgname}.com"
license=('Apache')
provides=(${_pkgname})
conflicts=(${_pkgname})
source_x86_64=("https://github.com/tendermint/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_linux_amd64.tar.gz")
sha256sums_x86_64=('89b9efa37304f8543c023e3b32898091ed6be305fc994c4dce8be8af99dec6ae')

package() {
    install -Dt "$pkgdir/usr/local/bin" "$_pkgname"
    install -m644 -Dt "$pkgdir/usr/share/licenses/$_pkgname" LICENSE
}
