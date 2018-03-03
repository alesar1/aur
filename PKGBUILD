# Maintainer: Javier Tia <javier dot tia at gmail dot com>

pkgname=xmlcutty
pkgver=0.1.4
pkgrel=1
pkgdesc="xmlcutty is a simple tool for carving out elements from large XML files, fast"
arch=('i686' 'x86_64')
url="https://github.com/miku/xmlcutty"
license=('')
makedepends=('go' 'git')
options=('!strip' '!emptydirs')
conflicts=("${pkgname}-bin")
replaces=("${pkgname}-bin")
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('a10fbfac4c18af71cacfcf60b2c486f85891acb0e75f9745db0e2f1890d8b317')
_gourl='github.com/miku/xmlcutty/cmd/xmlcutty'

prepare() {
  export GOPATH="${srcdir}"
  go get -fix -v -x ${_gourl}
}

check() {
  export GOPATH="${srcdir}"
  cd "${srcdir}/src/${_gourl}/../.."
  make test
}

package() {
  install -Dm 775 "${srcdir}/bin/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}

# vim:set ft=sh ts=2 sw=2 et:
