# Maintainer: Brad Erhart <brae.04+aur@gmail.com>

pkgname=flarectl
_pkgname=cloudflare-go
pkgver=0.11.2
pkgrel=1
pkgdesc='CLI application for interacting with a Cloudflare account'
arch=('x86_64')
url="https://github.com/cloudflare/cloudflare-go/tree/v${pkgver}/cmd/flarectl"
license=('BSD')
makedepends=('go-pie')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/cloudflare/$_pkgname/archive/v$pkgver.tar.gz")
sha256sums=('39e682dc848f191cb6d18f0fb71313a11f93d1c8a6a45567ea78625e380de4a8')

build() {
	cd "$_pkgname-$pkgver/cmd/$pkgname"
	go build \
		-trimpath \
		-ldflags "-extldflags $LDFLAGS"
}

package() {
	install -Dm755 "$_pkgname-$pkgver/cmd/$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
