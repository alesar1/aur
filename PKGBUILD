# Maintainer: Stefan Cocora <stefan dot cocora at gmail dot com>
# Contributor:

_pkgauthor=bitnami-labs
_upstream_devteam=sealed-secrets
_upstream_pkgname=kubeseal
pkgname=kubeseal-bin
pkgver=0.8.1
pkgrel=1
pkgdesc="SealedSecret is a way to encrypt kubernetes secrets, which are safe to store on a public source code repository."
arch=('x86_64')
_goarch="amd64"
_goos="linux"
groups=()
depends=()
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
url="https://github.com/${_pkgauthor}/${_upstream_devteam}"
license=("Apache")
### https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.7.0/kubeseal-linux-amd64
source=("${_upstream_pkgname}-${_goos}-${_goarch}::https://github.com/${_pkgauthor}/${_upstream_devteam}/releases/download/v${pkgver}/${_upstream_pkgname}-${_goos}-${_goarch}"
  "LICENSE::https://raw.githubusercontent.com/${_pkgauthor}/${_upstream_devteam}/master/LICENSE")
sha256sums=('a142996cf707efb40edf2daae950fadb6035fdcf6b5f27237ee5f87985406c13'
            'b40930bbcf80744c86c46a12bc9da056641d722716c378f5659b9e555ef833e1')

package() {

  install -Dm755 "${srcdir}/${_upstream_pkgname}-${_goos}-${_goarch}" "${pkgdir}/usr/bin/${_upstream_pkgname}"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${_upstream_pkgname}/LICENSE"

}
