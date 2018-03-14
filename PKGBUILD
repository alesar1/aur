# Maintainer: Dmitri Goutnik <dg@syrec.org>
# Contributor: Tom Tobin <archlinux@tomxtobin.com>

pkgname=awless
pkgver=0.1.9
pkgrel=1
pkgdesc='A command line interface for Amazon Web Services (AWS)'
arch=('i686' 'x86_64')
url='https://github.com/wallix/awless'
license=('Apache')
depends=('glibc')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('eba348663d4ab4695a474ec50633fb784bcbf547c750705870eafa195585d74b')

prepare() {
  mkdir -p src/github.com/wallix
  mv ${pkgname}-${pkgver} src/github.com/wallix/awless
}

build() {
  cd src/github.com/wallix/awless
  env GOPATH="${srcdir}" go build
}

# check() {
#   cd src/github.com/wallix/awless
#   env GOPATH="${srcdir}" go test ./...
# }

package() {
  cd src/github.com/wallix/awless
  install -Dm755 awless "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
