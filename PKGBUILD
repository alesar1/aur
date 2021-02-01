# Maintainer: Arturo Penen <apenen@gmail.com>

pkgname=ghorg
pkgver=1.5.0
pkgrel=1
pkgdesc='allows you to quickly clone all of an orgs, or users repos into a single directory.'
arch=('x86_64')
url='https://github.com/gabrie30/ghorg'
license=('Apache')
source=("$pkgname-$pkgver.tar.gz::https://github.com/gabrie30/ghorg/archive/$pkgver.tar.gz")
sha256sums=('1f57002fde22851fa38fbd45a099ac706920d921f5b435fc0d30cab62fc18768')
makedepends=('go')

build() {
  cd $pkgname-$pkgver
  go build
}

package() {
  install -Dm 755 "${srcdir}/$pkgname-$pkgver/ghorg" "${pkgdir}/usr/bin/ghorg"
}
