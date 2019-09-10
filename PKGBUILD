# Maintainer: Mikkel Oscar Lyderik <mikkeloscar at gmail dot com>

pkgname=scaleway-cli
pkgver=1.20
pkgrel=1
pkgdesc="Manage BareMetal Servers from Command Line"
arch=('i686' 'x86_64')
url="https://scaleway.com"
license=('MIT')
makedepends=('go' 'git')
source=("https://github.com/scaleway/$pkgname/archive/v${pkgver}.tar.gz")
sha256sums=('4c50725be7bebdab17b8ef77acd230525e773631fef4051979f8ff91c86bebf8')

prepare() {
  # setup local gopath
  export GOPATH="$srcdir/.gopath"
  mkdir -p "$GOPATH/src/github.com/scaleway/"
  ln -s "$srcdir/$pkgname-$pkgver" "$GOPATH/src/github.com/scaleway/$pkgname"
}

build() {
  export GOPATH="$srcdir/.gopath"
  cd "$GOPATH/src/github.com/scaleway/$pkgname"
  go build \
    -buildmode=pie \
    -gcflags "all=-trimpath=${PWD}" \
    -asmflags "all=-trimpath=${PWD}" \
    -ldflags "-X github.com/scaleway/scaleway-cli/pkg/scwversion.GITCOMMIT=nogit -extldflags ${LDFLAGS}" \
    -o scw ./cmd/scw
}

check() {
  export GOPATH="$srcdir/.gopath"
  cd "$GOPATH/src/github.com/scaleway/$pkgname"
  go test -ldflags \
    "-X github.com/scaleway/scaleway-cli/pkg/scwversion.GITCOMMIT=nogit" \
    -i ./cmd/scw
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 scw "$pkgdir/usr/bin/scw"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 contrib/completion/bash/scw.bash "$pkgdir/usr/share/bash-completion/completions/scw"
  install -Dm644 contrib/completion/zsh/_scw "$pkgdir/usr/share/zsh/site-functions/_scw"
}

# vim:set ts=2 sw=2 et:
