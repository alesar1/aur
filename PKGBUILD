# Maintainer: Tyler Brock <tyler.brock@gmail.com>
pkgname=saw
pkgver=0.1.4
pkgrel=1
pkgdesc="Fast, multipurpose tool for AWS CloudWatch Logs"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
provides=('saw')
url="https://github.com/TylerBrock/$pkgname"
license=('MIT')
makedepends=('go' 'git' 'dep')
source=("https://github.com/TylerBrock/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('41e83c51fdcd76cbb31a33b89dbf8eee')

prepare() {
  mkdir -p "${srcdir}/go/src/github.com/TylerBrock/"
  mv "${srcdir}/${pkgname}-${pkgver}" "${srcdir}/go/src/github.com/TylerBrock/${pkgname}"
}

build() {
  export GOPATH="${srcdir}/go"
  export PATH="$PATH:$srcdir/go/bin"
  cd "${srcdir}/go/src/github.com/TylerBrock/${pkgname}"
  dep ensure
  go build .
}

package() {
  cd "${srcdir}/go/src/github.com/TylerBrock/${pkgname}"
  install -Dm755 saw "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
