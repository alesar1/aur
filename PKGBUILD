# Maintainer: tarball <bootctl@gmail.com>

pkgname=netbird-ui
pkgver=0.11.2
pkgrel=1
pkgdesc='Official GUI for the Netbird client'
url='https://netbird.io'
arch=(x86_64 aarch64 armv7h armv7l armv6h)
license=(BSD)

provides=("$pkgname")
conflicts=("$pkgname")
depends=(netbird gtk3 libayatana-appindicator)
makedepends=(go)
optdepends=()

source=(
  "0001-fix-run-paths.patch"
  "$pkgname-$pkgver.tar.gz::https://github.com/netbirdio/netbird/archive/refs/tags/v$pkgver.tar.gz"
)
sha256sums=('51d96f5ac1ab6f7b695b557b2eb0ef66ab8b11aec9c97677f5e38eb73ed67048'
            'ead3d14129e4a122df36687b1546d61ea3e1a27e55270f069f69a4bc9d4d698f')

prepare() {
  cd "$srcdir/netbird-$pkgver"
  mkdir -p build

  for patch in "$srcdir"/*.patch; do
    patch -p1 -i "$patch"
  done

  go mod download
}

build() {
  export GOFLAGS='-buildmode=pie -trimpath -mod=readonly -modcacherw'
  cd "$srcdir/netbird-$pkgver"

  go build \
    -ldflags "-s -w -linkmode=external -extldflags \"$LDFLAGS\"" \
    -o build/"$pkgname" \
    client/ui/client_ui.go
}

package() {
  _source="$srcdir/netbird-$pkgver"
  _ui="$_source/client/ui"

  install -d "$pkgdir/usr/bin"
  install -d "$pkgdir/usr/share/applications"
  install -d "$pkgdir/usr/share/icons"
  install -d "$pkgdir/usr/share/mime/packages"

  install -Dm755 "$_source/build/$pkgname" "$pkgdir/usr/bin/$pkgname"

  install -Dm644 "$_ui/netbird.desktop" "$pkgdir/usr/share/applications/netbird.desktop"

  install -Dm644 "$_ui/netbird.ico" "$pkgdir/usr/share/icons/netbird.ico"

  install -Dm644 "$_source/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
