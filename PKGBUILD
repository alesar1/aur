# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=devbox
pkgver=0.1.2
pkgrel=1
pkgdesc='A cli tool to easily create isolated shells and containers'
arch=(x86_64)
url="https://github.com/jetpack-io/$pkgname"
license=(Apache)
depends=(nix)
makedepends=(go)
optdepends=('docker: for container support')
_archive="$pkgname-$pkgver"
source=("$url/archive/$pkgver/$_archive.tar.gz")
sha256sums=('d5ba9b39546e1712d4ffdf64be2355c9395e252738cb490c34905c874aea0413')

prepare(){
	cd "$_archive"
	export GOPATH="$srcdir"
	go mod download
}

build() {
	cd "$_archive"
	export GOPATH="$srcdir"
	export CGO_ENABLED=0
	local _prefix=go.jetpack.io/devbox/build
	go build \
		-trimpath \
		-buildmode=pie \
		-mod=readonly \
		-modcacherw \
		-ldflags "-linkmode external -extldflags \"$LDFLAGS\" -X $_prefix.Version=$pkgver" \
		-o $pkgname cmd/devbox/main.go
}

check() {
	cd "$_archive"
	export GOPATH="$srcdir"
	# go test ./boxcli
}

package() {
	cd "$_archive"
	install -Dm0755 -t "$pkgdir/usr/bin/" "$pkgname"
}
