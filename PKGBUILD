# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>

pkgbase=sniprun
pkgname=('sniprun' 'neovim-sniprun')
pkgver=0.5.7
pkgrel=1
pkgdesc='A neovim plugin to independently run snippets of code'
arch=('x86_64')
url="https://github.com/michaelb/sniprun"
license=('MIT')
makedepends=('cargo' 'gcc-libs')
source=("$pkgbase-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('dc006a15126b04d462c3a86b294cf71ed6e9b7e5ad04bc6db59595fb9948f172')

build() {
  cd "$pkgbase-$pkgver"
  cargo build --release --locked --all-features --target-dir=target
}

# check() {
#   cd "$pkgname-$pkgver"
#   cargo test --release --locked --target-dir=target
# }

package_sniprun() {
  pkgdesc='Compiled binary core for neovim-sniprun'
  depends=('gcc-libs')

  cd "$pkgbase-$pkgver"
  install -Dm 755 target/release/sniprun -t "$pkgdir/usr/bin/"
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}

package_neovim-sniprun()  {
  arch=('any')
  depends=('neovim-git' "sniprun=$pkgver")
  optdepends=('bash: Bash snippets support'
              'coffeescript: CoffeeScript snippets support'
              'gcc: C/C++ snippets support'
              'gcc-ada: Limited Ada snippets support'
              'go: Go snippets support'
              'ghc: Haskell snippets support'
              'python3: Python3 snippets support'
              'java-environment-openjdk: Java snippets support'
              'julia: Julia snippets support'
              'jupyter: Jupyter support'
              'lua: Lua snippets support'
              'r: R snippets support'
              'ruby: Ruby snippets support'
              'rust: Rust snippets support'
              'scala: Scala snippets support')
  install="$pkgname.install"

  cd "$pkgbase-$pkgver"
  find autoload doc plugin lua \
    -type f -exec install -Dm 644 '{}' "$pkgdir/usr/share/nvim/runtime/{}" \;
  install -d "$pkgdir/usr/share/nvim/runtime/target/release"
  ln -s "/usr/bin/sniprun" "$pkgdir/usr/share/nvim/runtime/target/release/sniprun"
  install -d "$pkgdir/usr/share/licenses/"
  install -d "$pkgdir/usr/share/doc/"
  ln -s "/usr/share/licenses/sniprun/" "$pkgdir/usr/share/licenses/$pkgname"
  ln -s "/usr/share/doc/sniprun" "$pkgdir/usr/share/doc/$pkgname"
}
