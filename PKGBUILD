# Maintainer: David Harrigan <dharrigan [@] gmail [dot] com>

pkgname=cljstyle-bin
pkgver=0.14.0
pkgrel=1
pkgdesc='A tool for formatting Clojure code'
arch=('x86_64')
url='https://github.com/greglook/cljstyle'
license=('EPL')
provides=('cljstyle')
conflicts=('cljstyle')

source=("https://github.com/greglook/cljstyle/releases/download/${pkgver}/${pkgname/\-bin/}_${pkgver/_/-}_linux.tar.gz")

sha256sums=('518e0b2e08ad14eb4e7f5ce6fff2e833aff1832cd42a16557ce2546e7b8d1343')

package() {
  install -Dm755 "${srcdir}/${pkgname/\-bin/}" "${pkgdir}/usr/bin/${pkgname/\-bin/}"
}
