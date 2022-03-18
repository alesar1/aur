# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Kaio "yaakushi" Augusto <kaioaugusto dot 8 at gmail dot com>
# Contributor: matthias.lisin
# Contributor: Bruno Inec <bruno at inec dot fr>

pkgname=wtfutil
pkgver=0.41.0
pkgrel=4
pkgdesc="Personal information dashboard for your terminal"
arch=('x86_64' 'aarch64' 'armv6h')
url="https://wtfutil.com"
license=('MPL2')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/wtfutil/wtf/archive/v$pkgver.tar.gz")
sha256sums=('e01f45aaa7a1e31ab555071763da184d611f87b1800265dc782502da9c985eaf')

prepare() {
  cd "wtf-$pkgver"
  export GOPATH="$srcdir/gopath"

  # download dependencies
  go mod download -x
}

build() {
  cd "wtf-$pkgver"
  export GOPATH="$srcdir/gopath"
  local flags="-s -w -X main.version=${pkgver} -X main.date=$(date +%FT%T%z)"

  go build -v \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-linkmode external -extldflags \"${LDFLAGS}\" ${flags}" \
    -buildvcs=false \
    -o bin/"$pkgname"
}

check() {
  cd "wtf-$pkgver"
  export GOPATH="$srcdir/gopath"
  go test ./...

  # Clean module cache for makepkg -C
  go clean -modcache
}

package() {
  cd "wtf-$pkgver"
  install -Dm755 "bin/$pkgname" -t "$pkgdir/usr/bin/"
  install -Dm644 {README,CHANGELOG}.md -t "$pkgdir/usr/share/doc/$pkgname/"
  cp -r _sample_configs "$pkgdir/usr/share/doc/$pkgname/sample_configs/"
}
