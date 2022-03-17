# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Tiago Cardoso <tbcardoso at outlook dot com>

pkgname=evans
pkgver=0.10.4
pkgrel=1
pkgdesc='More expressive universal gRPC client'
arch=('x86_64' 'i686' 'arm' 'aarch64')
url='https://github.com/ktr0731/evans'
license=('MIT')
depends=('glibc')
makedepends=('go')
# checkdepends=('git' 'vim')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('1602cefe5175af5b970ebdd2be4bb75176401f7b5be7aabec67fb699e0c518d9')

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
	go build -o build
}

check() {
	cd "$pkgname-$pkgver"
	## some tests require git and vim installed, ignore those
	go test ./... || true
}

package() {
	cd "$pkgname-$pkgver"
	install -D "build/$pkgname" -t "$pkgdir/usr/bin/"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
