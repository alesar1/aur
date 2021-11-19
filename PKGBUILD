# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgbase=apollo-rover
pkgname=(apollo-rover apollo-rover-fed2)
pkgver=0.4.1
pkgrel=1
pkgdesc="CLI for Apollo's suite of GraphQL developer productivity tools"
arch=('x86_64')
url='https://github.com/apollographql/rover'
license=('MIT')
depends=('gcc-libs' 'zlib')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('f8bf221bed765447b809c85f1c3dffaf6b241362f745a80906f8e98869e11edd')

prepare() {
	cd "rover-$pkgver"
	cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
	cd plugins/rover-fed2
	cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	export RUSTUP_TOOLCHAIN=stable
	export CARGO_TARGET_DIR=target
	cd "rover-$pkgver"
	cargo build --frozen --release --all-features
	cd plugins/rover-fed2
	cargo build --frozen --release --all-features
}

check() {
	export RUSTUP_TOOLCHAIN=stable
	cd "rover-$pkgver"
	cargo test --frozen --all-features
}

package_apollo-rover() {
	optdepends=('apollo-rover-fed2: experimental Federation v2 support')

	cd "rover-$pkgver"
	install -D "target/release/rover" -t "$pkgdir/usr/bin/"
	install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}

package_apollo-rover-fed2() {
	pkgdesc='Plugin for Apollo Rover enabling Federation v2 support'
	depends+=("apollo-rover=$pkgver")
	license=('custom:EL2')

	cd "rover-$pkgver/plugins/rover-fed2/"
	install -D target/release/rover-fed2 -t "$pkgdir/usr/bin/"
	install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
