# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=cargo-make
pkgver=0.35.12
pkgrel=1
pkgdesc='Rust task runner and build tool'
arch=('x86_64')
url='https://github.com/sagiegurari/cargo-make'
license=('Apache')
depends=('gcc-libs' 'openssl')
makedepends=('git' 'rust')
options=('!lto')
_commit='084eae90502e3ae42dab65a3276112ef3fcc674e'
source=("$pkgname::git+$url.git#commit=$_commit")
b2sums=('SKIP')

pkgver() {
  cd "$pkgname"

  git describe --tags | sed 's/^v//'
}

prepare() {
  cd "$pkgname"

  # download dependencies
  cargo fetch --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$pkgname"

  cargo build --release --frozen
}

package() {
  cd "$pkgname"

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" target/release/{cargo-make,makers}

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE

  # documentation
  install -vDm644 -t "$pkgdir/usr/share/doc/$pkgname" *.md

  # shell auto-completion
  install -vDm644 extra/shell/makers-completion.bash "$pkgdir/usr/share/bash-completion/completions/makers"
}
