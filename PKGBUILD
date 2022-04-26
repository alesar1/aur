# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=hush
pkgver=0.1.1.alpha
pkgrel=1
pkgdesc='A unix shell scripting language based on the Lua programming language'
arch=('x86_64')
url='https://github.com/hush-shell/hush'
license=('MIT')
depends=('gcc-libs')
makedepends=('git' 'rust')
_commit='fd0f8c7e89fa088a10379e7838b606b3d35c4245'
source=("$pkgname::git+$url#commit=$_commit")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"

  git describe --tags | sed -e 's/^v//' -e 's/-/./g'
}

prepare() {
  cd "$pkgname"

  # download dependencies
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$pkgname"

  cargo build --frozen --release --all-features
}

check() {
  cd "$pkgname"

  cargo test --frozen --all-features
}

package() {
  cd "$pkgname"

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" target/release/hush

  # license
  install -vDm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}
