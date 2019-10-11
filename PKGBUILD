# Maintainer: David Harrigan <dharrigan [@] gmail [dot] com>

pkgname=clj-kondo-bin
pkgver=2019.10.11_alpha
pkgrel=1
pkgdesc='A minimal and opinionated linter for Clojure code that sparks joy.'
arch=('x86_64')
url='https://github.com/borkdude/clj-kondo'
license=('EPL')
provides=('clj-kondo')
conflicts=('clj-kondo')

source=("https://github.com/borkdude/clj-kondo/releases/download/v${pkgver/_/-}/${pkgname/\-bin/}-${pkgver/_/-}-linux-amd64.zip")

sha256sums=('36b79ed7ec1889e239c62739e292b248f52525530c2a89d8396a07eb66e3f9f9')

package() {
  install -Dm755 "${srcdir}/${pkgname/\-bin/}" "${pkgdir}/usr/bin/${pkgname/\-bin/}"
}
