# Maintainer: Mark Stenglein <aur@markstenglein.com>

pkgname=slides-git
pkgver=0.1.1.r3.g5d89bf2
pkgrel=1
pkgdesc='Terminal based presentation tool'
arch=('x86_64')
url="https://github.com/maaslalani/${pkgname%-git}"
license=('MIT')
depends=('glibc')
makedepends=('go' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+$url.git")
sha256sums=('SKIP')

pkgver() {
    cd ${pkgname%-git}
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd ${pkgname%-git}
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    go build -buildmode=pie -trimpath -ldflags "-linkmode external -X main.Version=${pkgver} -s -w"
}

# Can't add until a `go vet` issue is addressed.
#   https://github.com/maaslalani/slides/issues/14
#check() {
#    cd $pkgname
#    go test ./...
#}

package() {
    cd ${pkgname%-git}
    install -Dm755 ${pkgname%-git} "$pkgdir/usr/bin/${pkgname%-git}"
    install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

