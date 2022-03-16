pkgname=cloudflare-dynamic-dns
pkgver=2.0.0
pkgrel=2
pkgdesc='Updates AAAA records at Cloudflare according to the current IPv6 address'
arch=('any')
url='https://github.com/Zebradil/cloudflare-dynamic-dns'
license=('MIT')
makedepends=('go')
source=("${pkgname}-${pkgver}::https://github.com/zebradil/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('e1af4b7f941c13b478a8285343de8c05455600a2e0709281253e7ec1b5708fe3')

prepare() {
    cd "$pkgname-$pkgver"
    mkdir -p build/
}

build() {
    cd "$pkgname-$pkgver"
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
    go build -o build/$pkgname main.go
}

check() {
    cd "$pkgname-$pkgver"
    go test ./...
}

package() {
    cd "$pkgname-$pkgver"
    install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
    install -Dm644 systemd/* -t "$pkgdir"/usr/lib/systemd/system
    install -m700 -d "$pkgdir"/etc/cloudflare-dynamic-dns/config.d
}
