# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=asciigraph
pkgver=0.4.1
pkgrel=4
pkgdesc="Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies"
arch=('x86_64')
url='https://github.com/guptarohit/asciigraph'
license=('BSD')
depends=('glibc')
makedepends=('go-pie')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/guptarohit/asciigraph/archive/v${pkgver}.tar.gz")
sha256sums=('5f8dc2e2dcfb253ebc0b23e824a590ae38e20a4d180393d175e25fa0f21d547d')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir -p $srcdir/go
  export GOPATH="${srcdir}"/go
  export PATH=$PATH:$GOPATH/bin
  go get -d -v ./...
}

build() {
  export GOPATH="${srcdir}"/go
  export PATH=$PATH:$GOPATH/bin
  cd "${srcdir}/${pkgname}-${pkgver}/cmd/asciigraph"
  go build -v -o "${srcdir}/asciigraph-bin"
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 ../asciigraph-bin "${pkgdir}/usr/bin/asciigraph"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/asciigraph/LICENSE"
  go clean -modcache #Remove go libraries
}