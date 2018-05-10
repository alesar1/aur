# Maintainer: Brandon Carrell <brandoncarrell@gmail.com>

pkgname=joker
pkgver=0.9.2
pkgrel=1
pkgdesc="Joker, a Clojure interpreter and linter written in Go - Precompiled binary from official repository"
arch=('x86_64')
url="https://github.com/candid82/joker"
license=('EPL')
provides=('joker')
conflicts=('joker')

source=("https://github.com/candid82/joker/releases/download/v${pkgver}/${pkgname}-${pkgver}-linux-amd64.zip")

md5sums=('43d9ee326a7e1c13528311b87a5d33e5')

package() {
  install -Dm755 "${srcdir}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}
