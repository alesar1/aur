# Maintainer: Haochen Tong <i at hexchain dot org>

pkgname=elvish
pkgver=0.14.0
pkgrel=2
pkgdesc="A friendly and expressive Unix shell."
arch=('i686' 'x86_64')
url="https://github.com/elves/elvish"
license=('custom:2-clause BSD')
provides=('elvish')
makedepends=('git' 'go')
depends=('glibc')
source=("git+https://github.com/elves/elvish.git#tag=v$pkgver")
md5sums=('SKIP')
install=elvish.install

prepare() {
    mkdir -p "$srcdir/build"
    export GOPATH="$srcdir/build"
    export CGO_LDFLAGS="$LDFLAGS"
    export GOFLAGS="-buildmode=pie -trimpath -mod=vendor -modcacherw"
    cd "$srcdir/elvish"
    go mod vendor
}

build() {
    export GOPATH="$srcdir/build"
    export CGO_LDFLAGS="$LDFLAGS"
    export GOFLAGS="-buildmode=pie -trimpath -mod=vendor -modcacherw"
    cd "$srcdir/elvish"
    go build -v -ldflags="-X github.com/elves/elvish/pkg/buildinfo.Version=$pkgver" .
}

check() {
    export GOPATH="$srcdir/build"
    export CGO_LDFLAGS="$LDFLAGS"
    export GOFLAGS="-trimpath -mod=vendor -modcacherw"
    cd "$srcdir/elvish"
    make test
}

package() {
    install -Dm755 "$srcdir/elvish/elvish" -t "$pkgdir/usr/bin/"
    install -Dm644 "$srcdir/$pkgname/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname/"
}
