# Maintainer: Jonathon Fernyhough <jonathon+m2x.dev>
# Contributor: krevedko <helllamer-gmail.com>

pkgname=seaweedfs
pkgver=2.88
pkgrel=1
pkgdesc="SeaweedFS is a simple and highly scalable distributed file system"
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h' 'arm')
url="https://github.com/chrislusf/seaweedfs"
license=('APACHE')
makedepends=('git' 'go')
options=('!lto')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
b2sums=('9c168392d26acd9a7e336438a2ec44f73a4ef2d27da8c494de1dfad9ff1597c45a8bdfcb475ec15651508f6bd2fe2eb0981eb2338e2270c86f34ae6aae061b3d')
_shortcommit=5799a20

prepare() {
  cd $pkgname-$pkgver

  export GOPATH="${SRCDEST:-$srcdir}"
  go mod vendor
}

build() {
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export CGO_LDFLAGS="$LDFLAGS"
  export GOFLAGS="-buildmode=pie -trimpath -mod=vendor -modcacherw"
  export GOPATH="${SRCDEST:-$srcdir}"

  cd $pkgname-$pkgver/weed
  go build -v $GO_FLAGS -tags 5BytesOffset -ldflags "-X github.com/chrislusf/seaweedfs/weed/util.COMMIT=$_shortcommit -extldflags $LDFLAGS"
}

#check() {
#  cd $pkgname-$pkgver/weed
#  go test -v
#}

package() {
  cd $pkgname-$pkgver
  install -D     weed/weed "$pkgdir"/usr/bin/weed
  install -Dm644 README.md "$pkgdir"/usr/share/doc/$pkgname/README.md
  install -Dm644 LICENSE   "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
