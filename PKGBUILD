# Maintainer: Wolfgang Popp <mail@wolfgang-popp.de>
# Contributor: Tharre <tharre3@gmail.com>
# Contributor: Damien Flament <damien.flament at gmx dot com>

pkgname=brittany
pkgver=0.12.1.1.x1
pkgrel=1
pkgdesc="An Haskell source code formatter."
arch=('i686' 'x86_64')
url="https://github.com/lspitzner/${pkgname}"
license=('AGPL3')
makedepends=('stack')
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('1d44a35a8586a842db17a5e20662faca759b03983956f0c17f1fc68f229893e2')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  stack build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  stack install --local-bin-path "${pkgdir}/usr/bin"
}
