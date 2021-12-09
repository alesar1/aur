# Maintainer: Christian Muehlhaeuser <muesli at gmail dot com>

pkgname=charm-tool
pkgver=0.9.1
pkgrel=1
pkgdesc="The Charm Cloud Tool"
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/charmbracelet/charm"
license=('MIT')
depends=('glibc')
makedepends=('git' 'go')
source=("${url}/archive/v${pkgver}/charm-${pkgver}.tar.gz")
sha256sums=('85134be63acd570696e4a4134e4c2fcdafc7ed797d79aede854c4e80ee7bf2be')

build() {
    local commit
    local extraflags
    commit=$(zcat charm-${pkgver}.tar.gz | git get-tar-commit-id)
    extraflags="-X main.Version=${pkgver} -X main.CommitSHA=${commit}"

    cd "charm-$pkgver"

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"

    go build \
        -trimpath \
        -buildmode=pie \
        -mod=readonly \
        -modcacherw \
        -ldflags "${extraflags} -linkmode external -extldflags \"${LDFLAGS}\"" \
        -o "charm" .
}

package() {
    cd "charm-$pkgver"

    install -Dm755 "charm" "$pkgdir/usr/bin/charm"
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=4 sw=4 et:
