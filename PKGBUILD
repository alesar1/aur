# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=cargo-msrv
pkgver=0.11.1
pkgrel=1
pkgdesc="Find the minimum supported Rust version (MSRV) for your project"
arch=('x86_64')
url="https://github.com/foresterre/cargo-msrv"
license=('MIT' 'Apache')
depends=('gcc-libs' 'openssl')
makedepends=('rust')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('2d7cd8246317218c78f2cc5303c82d31cbdafd558cac78ee1cb71c0034a64eb9')

prepare() {
  cd "$pkgname-$pkgver"
  cargo fetch --locked
}

build() {
  cd "$pkgname-$pkgver"
  cargo build --release --frozen
}

# tests are using rustup
#check() {
#  cd "$pkgname-$pkgver"
#  cargo test --release --locked --all -- --test-threads=1
#}

package() {
  cd "$pkgname-$pkgver"
  install -Dm 755 "target/release/$pkgname" -t "$pkgdir/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
  install -Dm 644 LICENSE-MIT -t "$pkgdir/usr/share/licenses/$pkgname"
}
