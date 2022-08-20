# Maintainer: Kuba Ellwart <kuba@hop.io>

pkgname=hop-cli
pkgver=0.1.21
pkgrel=1
makedepends=('rust' 'cargo')
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
pkgdesc="Interact with Hop in your terminal"
url="https://hop.io"
license=('MPL-2.0')
source=("hop_cli-$pkgver.tar.gz::https://github.com/hopinc/hop_cli/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=("f7ca27093affcfffde84caeecf17e6a2f69395fa9024c060c51d08e41d0f6096")

prepare() {
  cd "$srcdir/hop_cli-$pkgver"

  cargo fetch --locked --target "$CARCH-unknown-linux-musl"
}

build() {
  cd "$srcdir/hop_cli-$pkgver"

  export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release --all-features
}

check() {
  cd "$srcdir/hop_cli-$pkgver"

  export RUSTUP_TOOLCHAIN=stable
  cargo test --frozen --release --all-features
}

package() {
  cd "$srcdir/hop_cli-$pkgver"

  install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/hop"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/hop" 
  
  # generate completions
  mkdir -p "$pkgdir/usr/share/bash-completion/completions"
  "$pkgdir"/usr/bin/hop completions bash > "$pkgdir/usr/share/bash-completion/completions/hop"
  mkdir -p "$pkgdir/usr/share/fish/completions"
  "$pkgdir"/usr/bin/hop completions fish > "$pkgdir/usr/share/fish/completions/hop.fish"
  mkdir -p "$pkgdir/usr/share/zsh/site-functions"
  "$pkgdir"/usr/bin/hop completions zsh > "$pkgdir/usr/share/zsh/site-functions/_hop"
}
