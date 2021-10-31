# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=hotwire-rs
pkgver=0.2.0
pkgrel=1
pkgdesc="A GTK application that leverages Wireshark and tshark to capture traffic for analysis"
arch=('x86_64')
url="https://github.com/emmanueltouzery/hotwire"
license=('MIT')
depends=('gtk3' 'tcpdump' 'wireguard-tools')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('b8b19ffe61f3d3ff635699c35dc76f7ccb62be5d51f56817e52452a540a73a87')

prepare() {
	cd "hotwire-$pkgver"
	cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	export RUSTUP_TOOLCHAIN=stable
	export CARGO_TARGET_DIR=target

	cd "hotwire-$pkgver"
	cargo build --release --frozen --all-features
}

check() {
	export RUSTUP_TOOLCHAIN=stable

	cd "hotwire-$pkgver"
	cargo test --frozen --all-features
}

package() {
	cd "hotwire-$pkgver"
	install -D target/release/hotwire -t "$pkgdir/usr/bin/"
	install -Dm 644 LICENSE.md -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
	install -Dm 644 com.github.emmanueltouzery.hotwire.desktop -t "$pkgdir/usr/share/applications/"
	install -Dm 644 com.github.emmanueltouzery.hotwire.svg -t "$pkgdir/usr/share/icons/hicolor/scalable/apps/"
}
