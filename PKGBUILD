# Maintainer: Anas Elgarhy <anas.elgarhy.dev@gmail.com>
pkgname=aarty
pkgver=0.3.3
pkgrel=1
epoch=
pkgdesc="A simple CLI tool to convert the images to ASCII art 🦀💙"
arch=(x86_64)
url="https://github.com/anas-elgarhy/aarty"
license=('MIT')
makedepends=(cargo)
provides=(aarty)
conflicts=()
replaces=(aarty)
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://static.crates.io/crates/$pkgname/$pkgname-$pkgver.crate")
noextract=()

prepare() {
  cd "$pkgname-$pkgver"
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$pkgname-$pkgver"
	export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release --all-features
}

check() {
  cd "$pkgname-$pkgver"
	export RUSTUP_TOOLCHAIN=stable
  cargo test --frozen --all-features
}

package() {
  cd "$pkgname-$pkgver"
  sudo install -Dm0755 -t "/usr/bin/" "target/release/$pkgname"
}
sha256sums=('c3c7609e6905c26da03fb89b2bffb02e74af677b6603acae000f980ccf598146')
