# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Hoàng Văn Khải <hvksmr1996@gmail.com>

pkgname=dprint
pkgver=0.27.0
pkgrel=1
pkgdesc='Pluggable and configurable code formatting platform'
arch=('x86_64')
url='https://github.com/dprint/dprint'
license=('MIT')
depends=('bzip2')
makedepends=('cargo')
options=('!lto') ## interferes with compiling
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('5b3761312a3ada13166ec598f83f0b67a2230d0145390c179b8ed558b8c919f4')

prepare() {
	cd "$pkgname-$pkgver"
	cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	export RUST_TOOLCHAIN=stable
	export CARGO_TARGET_DIR=target

	cd "$pkgname-$pkgver"
	cargo build --release --frozen --all-features
}

package() {
	cd "$pkgname-$pkgver"
	install -D target/release/dprint -t "$pkgdir/usr/bin/"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
	find docs \
		-type f \
		-exec install -Dm644 -t "$pkgdir/usr/share/doc/$pkgname/" '{}' \+
}
