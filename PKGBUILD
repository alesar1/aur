# Maintainer: Haochen Tong <i at hexchain dot org>

pkgname=elvish-git
_pkgname=elvish
pkgver=r1536.22be6e2
pkgrel=1
pkgdesc="A novel Unix shell."
arch=('i686' 'x86_64')
url="https://github.com/elves/elvish"
license=('custom:2-clause BSD')
makedepends=('git' 'go')
source=("git+https://github.com/elves/elvish.git")
md5sums=('SKIP')

pkgver() {
    cd "$_pkgname"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir"

    mkdir -p build/src/github.com/elves
    ln -sf "$srcdir/$_pkgname" build/src/github.com/elves/
    export GOPATH="$srcdir/build"
}

build() {
    cd "$GOPATH/src/github.com/elves/elvish"
    make get stub
}

check() {
    cd "$GOPATH/src/github.com/elves/elvish"
    make test
}

package() {
    install -Dm755 "$srcdir/build/bin/elvish"{,-stub} -t "$pkgdir/usr/bin/"
    install -Dm644 "$srcdir/$_pkgname/LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname/"
}
