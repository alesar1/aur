# Maintainer: Wesley Moore <wes@wezm.net>

pkgname=pastel
pkgver=0.7.1
pkgrel=1
pkgdesc='A command-line tool to generate, analyze, convert and manipulate colors'
arch=('x86_64')
url="https://github.com/sharkdp/pastel"
license=('MIT' 'Apache')
depends=()
conflicts=('pastel-git')
makedepends=('rust' 'cargo')
source=("$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('38ae098610aceb876fd29cfcd3b0bed6c9f1237a65e691ef7cbd670c27aa59b2')

build() {
  cd "$pkgname-$pkgver"
  export SHELL_COMPLETIONS_DIR="$PWD/completions"
  cargo build --release --locked
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -Dm755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
  for license in APACHE MIT; do install -Dm644 "LICENSE-$license" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE-$license"; done

  install -Dm644 completions/_pastel \
    "$pkgdir/usr/share/zsh/site-functions/_pastel"
  install -Dm644 completions/pastel.bash \
    "$pkgdir/usr/share/bash-completion/completions/pastel"
  install -Dm644 completions/pastel.fish \
    "$pkgdir/usr/share/fish/vendor_completions.d/pastel.fish"
}
