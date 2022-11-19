# Maintainer: Thomas Gläßle <t_glaessle@gmx.de>

pkgname=tty-share
pkgver=2.3.0
pkgrel=1
pkgdesc="Shares terminal session with no setup on remote end (browser)"
arch=('any')
url="https://github.com/elisescu/tty-share"
license=('MIT')
depends=()
source=("${url}/archive/v${pkgver}.zip")
sha256sums=('35e330928bb1a9babe4a954f30736bb0128b3cbcaf230fe8d3b23aec1b1704c9')
makedepends=('go')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"

  go build \
      -mod=vendor \
      -buildmode=pie \
      -trimpath \
      -ldflags "-linkmode=external -X main.version=${pkgver}" \
      -mod=readonly \
      -modcacherw \
      -o tty-share .
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/share/licenses/$pkgname"
  install -m755 tty-share "$pkgdir/usr/bin"
  install -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
