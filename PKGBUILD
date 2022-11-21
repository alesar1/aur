# Maintainer: Misaka13514 <Misaka13514 at gmail dot com>

pkgname=mastodon-twitter-sync
pkgver=1.8.1
pkgrel=1
pkgdesc="Synchronizes posts from Mastodon to Twitter and back"
arch=('x86_64')
url="https://github.com/klausi/mastodon-twitter-sync"
license=('GPL3')
depends=('gcc-libs')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('9e098bc1da532622ea7fca4b9700e07a62ee92e63aa9678f0ac85d7a979b1370')

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
	install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/$pkgname"
}
