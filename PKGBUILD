# Maintainer: henning mueller <mail@nning.io>

pkgname=protonutils
pkgver=1.2.5
pkgrel=1
pkgdesc="CLI tool that provides different utilities to make using the Proton compatibility tool more easily"
arch=(x86_64)
url="https://github.com/nning/protonutils"
license=(MIT)
depends=(glibc)
makedepends=(go)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('f29c20e653e9449a1c375e0973e9e0a453d9fc64fb0b76c1d6524556395662b1')

prepare() {
  cd $pkgname-$pkgver

  export GOPATH="$srcdir/gopath"
  go clean -modcache
}

build() {
  cd $pkgname-$pkgver

  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export CGO_LDFLAGS="$LDFLAGS"

  make clean build_pie VERSION=v$pkgver

  ./cmd/$pkgname/$pkgname -m man1

  go clean -modcache
}

package() {
  cd $pkgname-$pkgver

  install -Dm0755 cmd/$pkgname/$pkgname -t $pkgdir/usr/bin/
  install -Dm0755 man1/* -t $pkgdir/usr/share/man/man1/
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
