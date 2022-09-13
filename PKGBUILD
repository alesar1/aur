# Maintainer: Marco Rubin <marco.rubin@protonmail.com>

_pkgname=cpu
pkgname=$_pkgname-git
pkgver=20220911
pkgrel=1
pkgdesc='cpu command in Go, inspired by the Plan 9 cpu command'
arch=('any')
license=('BSD')
makedepends=(git go)
url='https://github.com/u-root/cpu'
source=("git+$url#commit=b8d979804e637869b041e1599ab7b03ffdd31557")
sha256sums=('SKIP')

prepare() {
  cd "$_pkgname"
  mkdir -p build
}

build() {
  cd "$_pkgname"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -o build ./...
}

package() {
  cd "$_pkgname"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
  install -Dm755 build/cpu  "$pkgdir"/usr/bin/cpu
  install -Dm755 build/cpud "$pkgdir"/usr/bin/cpud
}
