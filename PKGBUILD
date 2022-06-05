# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=huekeys
pkgver=0.4.5
pkgrel=1
pkgdesc="Control the keyboard backlight on System76 laptops"
arch=('x86_64')
url="https://github.com/BitPonyLLC/huekeys"
license=('MIT')
depends=('gtk3' 'libayatana-appindicator')
makedepends=('git' 'go')
_commit=da72dc74a2168b5d5227dadf6624362bb6e182d7
source=("git+https://github.com/BitPonyLLC/huekeys.git#commit=${_commit}")
sha256sums=('SKIP')

prepare() {
  cd "$srcdir/$pkgname"
  export GOPATH="$srcdir/gopath"
  go mod tidy
}

build() {
  cd "$srcdir/$pkgname"
  export GOPATH="$srcdir/gopath"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  make

  # Generate shell completions
  ./"$pkgname" completion bash > "$pkgname.bash"
  ./"$pkgname" completion fish > "${pkgname}.fish"
  ./"$pkgname" completion zsh > "_${pkgname}"

  # Clean module cache for makepkg -C
  go clean -modcache
}

package() {
  cd "$srcdir/$pkgname"
  install -Dm755 "$pkgname" -t "$pkgdir/usr/bin/"
  install -Dm644 "$pkgname.bash" "$pkgdir/usr/share/bash-completion/completions/$pkgname"
  install -Dm644 "${pkgname}.fish" -t "$pkgdir/usr/share/fish/vendor_completions.d/"
  install -Dm644 "_${pkgname}" -t "$pkgdir/usr/share/zsh/site-functions/"
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
}
