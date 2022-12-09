# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=melt
pkgver=0.5.0
pkgrel=1
pkgdesc='Backup and restore SSH private keys using memorizable seed phrases'
arch=('x86_64')
url='https://github.com/charmbracelet/melt'
license=('MIT')
depends=('glibc')
makedepends=('git' 'go')
options=('!lto')
_commit='794f87bdc1dd6db69642251bd36713c8e6b5bdd4'
source=(
  "git+https://github.com/charmbracelet/melt.git#commit=$_commit"
  'change-binary-name.patch'
)
b2sums=('SKIP'
        'd8babc3fab8f0cb211217b05fd230c9eb64a81059a001746290575f3cf9c80aa18722ca8b01522f455ca2e2e8c694d7a0303a22cb3d846cb55015fa7ed494e0d')

pkgver() {
  cd melt

  git describe --tags | sed 's/^v//'
}

prepare() {
  cd melt

  # create directory for build output
  mkdir build

  # download dependencies
  go mod download

  # /usr/bin/melt is already used by the package extra/mlt
  patch -p1 -i "$srcdir/change-binary-name.patch"
}

build() {
  cd melt

  # set Go flags
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"

  go build -v \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-linkmode external -extldflags $LDFLAGS" \
    -o build/melt-key \
    ./cmd/...

  # generate shell completion
  for shell in bash fish zsh; do
    ./build/melt-key completion "$shell" > "build/$shell.completion"
  done

  # generate reproducible man page
  local _commit_date=$(git show --no-patch --format=%cd --date=format:%Y-%m-%d)
  ./build/melt-key man > build/melt-key.1
  sed -e "s/[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}/$_commit_date/" -i build/melt-key.1
}

package() {
  cd melt

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" build/melt-key

  # shell completion
  install -vDm644 build/bash.completion "$pkgdir/usr/share/bash-completion/completions/melt-key"
  install -vDm644 build/fish.completion "$pkgdir/usr/share/fish/vendor_completions.d/melt-key.fish"
  install -vDm644 build/zsh.completion "$pkgdir/usr/share/zsh/site-functions/_melt-key"

  # man page
  install -vDm644 -t "$pkgdir/usr/share/man/man1" build/melt-key.1

  # documentation
  install -vDm644 -t "$pkgdir/usr/share/doc/$pkgname" README.md

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE.md
}

# vim:set ts=2 sw=2 et:
