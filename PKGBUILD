# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=quickwit
pkgver=0.2.1
pkgrel=1
pkgdesc="A fast and cost-efficient distributed search engine for large-scale, immutable data"
arch=('x86_64')
url="https://quickwit.io"
license=('AGPL3')
depends=('gcc-libs')
makedepends=('git' 'rust')
options=('!lto')
_commit='a857636e5c336a9ee379c88f8d69cdd4ed54c9df' # v0.2.1
source=("$pkgname::git+https://github.com/quickwit-oss/quickwit.git#commit=$_commit")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --tags | sed 's/^v//'
}

prepare() {
  cd "$pkgname"
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$pkgname"
  cargo build --frozen --release
}

check() {
  cd "$pkgname"
  cargo test --frozen -- --skip thread_pool::tests::test_run_cpu_intensive_abort
}

package() {
  cd "$pkgname"

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" target/release/quickwit
}
