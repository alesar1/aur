# Maintainer: George Rawlinson <george@rawlinson.net.nz>

pkgname=license-detector
_pkgname="go-$pkgname"
pkgver=3.1.0
pkgrel=1
pkgdesc="Reliable project licenses detector"
arch=('x86_64')
url="https://github.com/src-d/go-license-detector"
license=('Apache')
makedepends=('go-pie')
source=("$pkgname-$pkgver.tar.gz::https://github.com/src-d/go-license-detector/archive/v3.1.0.tar.gz")
sha256sums=('bb12da726fa39e62f8547c86db13a919ad7f0bdf229be158e68e8aff382b6575')

prepare() {
  cd "$_pkgname-$pkgver"
  go mod download
}

build() {
  cd "$_pkgname-$pkgver"
  go build \
    -trimpath \
    -ldflags "-extldflags $LDFLAGS" \
    -v gopkg.in/src-d/go-license-detector.v3/cmd/license-detector
}

package() {
  cd "$_pkgname-$pkgver"
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
}
