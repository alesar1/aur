# Maintainer: Simon Legner <Simon.Legner@gmail.com>

pkgname=mkcert
_package="github.com/FiloSottile/${pkgname}"
pkgver=1.0.1
pkgrel=1
pkgdesc="A simple tool for making locally-trusted development certificates"
arch=('x86_64')
url="https://github.com/FiloSottile/mkcert"
license=('BSD')
makedepends=('go' 'git')
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/FiloSottile/${pkgname}/archive/v${pkgver}.tar.gz)
sha256sums=('fce041ac8becd6cdd2f45a676873b0651e9573baf421f8953dd5ab1d301c707f')

prepare() {
  cd "${srcdir}"/${pkgname}-${pkgver}
  export GOPATH="${srcdir}"
  install -d "${GOPATH}/src/github.com/FiloSottile"
  cp -a "$PWD" "${GOPATH}/src/${_package}"
}

build() {
  cd "${GOPATH}/src/${_package}"
  go build -asmflags "-trimpath $GOPATH/src" -gcflags "-trimpath $GOPATH/src"
}

package() {
  cd "${GOPATH}/src/${_package}"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
