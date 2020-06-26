# Maintainer: Kristen McWilliam <merritt_public at outlook dot com>
pkgname=nyrna
pkgver=1.0
pkgrel=1
pkgdesc='Simple program to pause games & applications'
arch=('x86_64')
url="https://github.com/Merrit/nyrna"
license=('GPL3 or any later version')
optdepends=('libappindicator-gtk3: Tray icon support on GNOME')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Merrit/nyrna/archive/v$pkgver.tar.gz")
sha256sums=('e35f28ef2f76a25e8aaa7182c222e48063d208178b49a7e8d249ef947ab14a22')

prepare(){
  gendesk -n --pkgname "$pkgname" --pkgdesc "$pkgdesc"
  cd "$pkgname-$pkgver"
  mkdir -p build/
}

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  go build -o build ./cmd/...
}

check() {
  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 "../../nyrna/icons/$pkgname.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"

}
