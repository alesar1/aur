# Maintainer: w0rty <mawo97 at gmail.com>
# Contributor: Mark Wagie <mark dot wagie at tutanota dot com>

pkgname=bit
pkgver=0.6.10
pkgrel=1
pkgdesc='A modern Git CLI'
arch=('x86_64')
url="https://github.com/chriswalz/bit"
license=('Apache')
makedepends=('go')
depends=('git')
conflicts=('bit-git')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
install=$pkgname.install
sha256sums=('3e0aa6756fa6444b6ae7bc1002083119407991b7bf5224b47a6086843274ada5')

prepare() {
  export GOPATH="$srcdir/gopath"
  go clean -modcache
}

build() {
  cd "$pkgname-$pkgver"
  export GO111MODULE=on
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -v .
  go build -v -o bitcomplete/bitcomplete
 
  # Clean mod cache for makepkg -C
  go clean -modcache
}
 
package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "$pkgname" bitcomplete/bitcomplete -t "$pkgdir/usr/bin"
}
