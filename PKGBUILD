# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgname=goproxy
pkgver=5.2
pkgrel=1
pkgdesc="A high performance HTTP, HTTPS, websocket, TCP, UDP, Secure DNS, Socks5 proxy server"
arch=('x86_64')
url="https://github.com/snail007/goproxy"
license=('GPL3')
source=("$pkgname-$pkgver.tar.gz::https://github.com/snail007/$pkgname/archive/v$pkgver.tar.gz")
makedepends=('go' 'dep' 'git')

_importpath="github.com/snail007/$pkgname"

prepare() {
  export GOPATH="$srcdir/_go"
  mkdir -p $(dirname "$GOPATH/src/$_importpath")
  ln -sf "$srcdir/$pkgname-$pkgver" "$GOPATH/src/$_importpath"
  cd "$GOPATH/src/$_importpath"
  dep ensure -v
}

check() {
  export GOPATH="$srcdir/_go"
  cd "$GOPATH/src/$_importpath"
  go test $(go list ./...)
}

build() {
  export GOPATH="$srcdir/_go"
  cd "$GOPATH/src/$_importpath"
  go build
}

package() {
  export GOPATH="$srcdir/_go"
  cd "$GOPATH/src/$_importpath"
  install -dm755 "$pkgdir/usr/bin"
  install -m755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
}

sha256sums=('7a7b00dfa48fe0e2e4d18a99f08c31f2bf744c9c73e3dd69396ff87b08521217')
