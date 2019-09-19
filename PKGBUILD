# Maintainer: navigaid <navigaid@gmail.com>
pkgname=yaegi
pkgver=0.6.0
pkgrel=1
pkgdesc='Yaegi is Another Elegant Go Interpreter'
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url='https://github.com/containous/yaegi'
license=('Apache')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/containous/yaegi/archive/v${pkgver}.tar.gz")
md5sums=('27d46688701f3e452cc5397b83719ec0')

build() {
  cd ${pkgname}-${pkgver}
  go build ./cmd/yaegi
}

package() {
  cd ${pkgname}-${pkgver}
  install -Dm755 yaegi "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
