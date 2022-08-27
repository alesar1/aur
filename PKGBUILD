# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Jack Roehr <jack@seatgull.com>

pkgname=ticker
pkgver=4.5.4
pkgrel=1
pkgdesc='Terminal stock ticker with live updates and position tracking'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/achannarasappa/ticker"
license=('GPL3')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('baf500e7d55b800548e1a994324317103822a8a758bc2048e0367a65d2143133')

prepare () {
	cd "$pkgname-$pkgver"
	mkdir -p build/
	go mod download
}

build () {
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
	cd "$pkgname-$pkgver"
	go build -o build
}

check () {
	cd "$pkgname-$pkgver"
	go test ./...
}

package () {
	cd "$pkgname-$pkgver"
	install -D "build/$pkgname" -t "$pkgdir/usr/bin/"
}
