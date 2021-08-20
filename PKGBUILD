# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=waypoint
pkgver=0.5.1
pkgrel=1
pkgdesc="A tool to build, deploy, and release any application on any platform"
arch=('x86_64')
url="https://www.waypointproject.io/"
license=('MPL2')
makedepends=('go' 'go-bindata')
optdepends=('docker: for local development server')
source=("$pkgname-$pkgver.tar.gz::https://github.com/hashicorp/waypoint/archive/v$pkgver.tar.gz")
b2sums=('4a33f1ea619181a86820b61b3eb6094475a9e469b892e4e7ff829d42c4c991e5dc9184829c9014fd449c018cfa6e70b25fa081037ad97671bb1a1cae41014f03')

build() {
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  # build process extracted from Makefile
  cd "$pkgname-$pkgver"
  go build \
    -o ./internal/assets/ceb/ceb \
    ./cmd/waypoint-entrypoint

  cd internal/assets
  go-bindata \
    -pkg assets \
    -o prod.go \
    -tags assetsembedded \
    ./ceb

  cd "$srcdir/$pkgname-$pkgver"
  go build \
    -tags assetsembedded \
    -o ./waypoint \
    ./cmd/waypoint
}

package() {
  cd "$pkgname-$pkgver"

  # binary
  install -vDm755 "$pkgname" -t "$pkgdir/usr/bin"

  # documentation
  install -vDm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
  cp -vr contrib/serverinstall/kind-k8s "$pkgdir/usr/share/doc/$pkgname"
  rm -vf "$pkgdir/usr/share/doc/$pkgname/.gitignore"
}
