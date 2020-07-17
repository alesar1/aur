# Maintainer: David Florness <david at florness dot com>
pkgname=tallyard-git
_pkgname=tallyard
pkgver=r161.f2606ba
pkgrel=1
arch=('x86_64')
pkgdesc="A peer-to-peer voting system that ensures voter privacy while preventing double-voting"
url="https://tallyard.xyz"
license=('AGPL3')
makedepends=('go>=1.11')
source=("git+https://gitlab.com/edwargix/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_pkgname"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  export GOPATH="$srcdir"/.go
  make
}

check() {
  cd "$srcdir/$_pkgname"
  go test ./...
}

package() {
  cd "$srcdir/$_pkgname"
  install -Dm755 $_pkgname $pkgdir/usr/bin/$_pkgname
}
