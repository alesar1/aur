# Maintainer: Vyacheslav Konovalov <🦀vk@protonmail.com>

_commit=335acdc3cd2f42747dc711ce58cf057a33d21e16
pkgname=flow-cli
pkgver=0.40.1
pkgrel=1
pkgdesc='A command-line interface that provides useful utilities for building Flow applications'
arch=('x86_64')
url='https://docs.onflow.org/flow-cli/'
license=('Apache-2.0')
makedepends=('go')
source=("https://github.com/onflow/flow-cli/archive/refs/tags/v$pkgver.tar.gz")
sha512sums=('baf3c1426804f916a9317efeb1fd3f3e358fd8e3ca70a83fab9b605e57bddcf9539117eba70ecaed608f1f51357b0ae2c429e12795769f621f2ea303d83ccc21')

build() {
    cd flow-cli-$pkgver

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS='-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw'
    export GO111MODULE=on

    go build \
        -trimpath \
        -ldflags "-X github.com/onflow/flow-cli/build.commit=$_commit -X github.com/onflow/flow-cli/build.semver=v$pkgver" \
        -o ./cmd/flow/flow \
        ./cmd/flow
}

package() {
    cd flow-cli-$pkgver
    install -Dm755 cmd/flow/flow -t "$pkgdir/usr/bin"
}
