# Maintainer: github.com/lmorg
pkgname=murex
replaces=('murex-git')
pkgver=2.10.2300
pkgrel=1
pkgdesc="Bash-like shell designed for greater commandline productivity and safer shell scripts"
arch=('i686' 'x86_64')
url="https://github.com/lmorg/murex"
license=('GPL2')
makedepends=('go')
optdepends=('aspell: inline spell checking')
source=("$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('0ea18936bf9b77e0198124bb6cfb0cc1f6487c483e84aafb9063b4434e2e777d')

prepare(){
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
  go build -v -o build .
}

check() {
  cd "$pkgname-$pkgver"
  go test ./...
  build/murex -c 'g: behavioural/* -> foreach: f { source $f }; try {test: run *}'
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
}
