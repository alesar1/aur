# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Lukas Grossar <lukas.grossar@gmail.com>

pkgname=dyff
pkgver=1.5.1
pkgrel=1
pkgdesc="Diff tool for YAML files"
arch=('x86_64')
url="https://github.com/homeport/dyff"
license=('MIT')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('933d3545451019ccb35d799a4cf09e775b973d3b0b9ecef82c16e407ae6975c4')

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
	go build -o build ./...
	build/dyff completion bash > dyff.bash
	build/dyff completion zsh > _dyff
	build/dyff completion fish > dyff.fish
}

check() {
	cd "$pkgname-$pkgver"
	go test ./...
}

package() {
	cd "$pkgname-$pkgver"
	install -D build/dyff -t "$pkgdir/usr/bin"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
	install -Dm644 dyff.bash "$pkgdir/usr/share/bash-completion/completions/dyff"
	install -Dm644 _dyff -t "$pkgdir/usr/share/zsh/site-functions/"
	install -Dm644 dyff.fish -t "$pkgdir/usr/share/fish/vendor_completions.d/"
}
