# Maintainer: f0ruD <fzero@rubi.gd>
# Previous Maintainer: Dmitri Goutnik <dg@syrec.org>

pkgname=gops
pkgver=0.3.20
pkgrel=1
pkgdesc='A tool to list and diagnose Go processes currently running on your system'
arch=('i686' 'x86_64')
url='https://github.com/google/gops'
license=('BSD')
depends=('glibc')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")

prepare() {
  mkdir -p src/github.com/google
  mv ${pkgname}-${pkgver} src/github.com/google/gops
}

build() {
  cd src/github.com/google/gops
  env GOPATH="${srcdir}" go build
}

# icheck() {
#   cd src/github.com/google/gops
#   env GOPATH="${srcdir}" go test ./...
# }

package() {
  cd src/github.com/google/gops
  install -Dm755 gops "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
sha256sums=('db75b86f21755571b5662a221be02d855ee869dc17cd23cb2c0e339eefbbb518')
