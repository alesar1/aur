# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=cork-rs
pkgver=0.2.1
pkgrel=1
pkgdesc="Command-line calculator for hex-lovers"
arch=('x86_64')
url="https://github.com/reddocmd/cork"
license=('GPL')
depends=('gcc-libs')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('6ce088814e1d26e494e0fde734b4e15e210a09b91217bc42f52fdb2c3d633d0a')

prepare() {
	cd "cork-$pkgver"
	cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	export RUSTUP_TOOLCHAIN=stable
	export CARGO_TARGET_DIR=target

	cd "cork-$pkgver"
	cargo build --release --frozen --all-features
}

check() {
	export RUSTUP_TOOLCHAIN=stable

	cd "cork-$pkgver"
	cargo test --frozen --all-features
}

package() {
	cd "cork-$pkgver"
	install -D target/release/cork -t "$pkgdir/usr/bin/"
	install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
