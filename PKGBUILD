# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=gtree
pkgver=1.7.9
pkgrel=1
pkgdesc="Generates tree from Markdown or programmatically"
arch=('x86_64' 'i686' 'aarch64')
url="https://github.com/ddddddO/gtree"
license=('BSD')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('174135ba8098bbf0454c384f6f4f575cbdf4232f3cf43bfe36a37d6e2e5917e6')

prepare() {
	cd "$pkgname-$pkgver"
	mkdir -p build
	go mod download
}

build() {
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

	cd "$pkgname-$pkgver"
	go build \
		-o build \
		-ldflags "-linkmode external -extldflags \"${LDFLAGS}\"" \
		. ./cmd/gtree
}

check() {
	cd "$pkgname-$pkgver"
	go test ./...
}

package() {
	cd "$pkgname-$pkgver"
	install -D build/gtree -t "$pkgdir/usr/bin/"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
}
