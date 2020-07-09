# Maintainer: Kevin Sanchez <kucashu@outlook.com>
# Maintainer: zhullyb <5435486@qq.com>
# Maintainer: DuckSoft <realducksoft@gmail.com>

pkgname=fgit-go
pkgver=0.6
pkgrel=1
pkgdesc="A tool to do git operation with fastgit easily"
arch=('x86_64')
url="https://github.com/fastgitorg/fgit-go"
license=('GPL3')
depends=('git' 'glibc')
makedepends=('upx')
provides=('fgit')
conflicts=('fgit')
source=("$pkgname-$pkgver::git+$url#tag=$pkgver")
sha512sums=('SKIP')

build() {
    cd "$srcdir"/$pkgname-$pkgver
    
    CGO_ENABLED=1 GO111MODULE=off go build -v \
        -buildmode=pie -trimpath \
        -ldflags="-s -w -X main.version=`cat version` -X 'main.timestamp=`date +'%Y-%m-%d %H:%M:%S'`' -extldflags=-Wl,-z,now,-z,relro" \
        -o fgit-go ./src/fgit.go
}

package() {
    cd "$srcdir"/$pkgname-$pkgver
    
    install -Dm755 -t "$pkgdir"/usr/bin/            ./fgit-go
    install -Dm644 -t "$pkgdir"/usr/share/doc/fgit  ./README.md
}

