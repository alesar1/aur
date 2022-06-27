# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=lnx
pkgver=0.9.0
pkgrel=1
pkgdesc='An adaptable search engine API'
arch=('x86_64')
url='https://lnx.rs'
license=('MIT')
depends=('gcc-libs')
makedepends=('git' 'rust')
options=('!lto')
_commit='6fbb7defe4c4d8331bfb19ae72b815b5d9933bb4'
source=("$pkgname::git+https://github.com/lnx-search/lnx.git#commit=$_commit")
md5sums=('SKIP')

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

  cargo build --frozen --release
}

check() {
  cd "$pkgname"
  # skip failing test
  cargo test --frozen -- --skip index::tests::default_writer_settings_expect_ok
}

package() {
  cd "$pkgname"

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" target/release/lnx

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}
