# -*- mode: Shell-script; eval: (setq indent-tabs-mode 't); eval: (setq tab-width 4) -*-
# Maintainer: Dominic Meiser [git at msrd0 dot de]

# Package Information
_crate="cargo-duplicates"
pkgname="$_crate"
pkgver=0.5.0
pkgrel=1
pkgdesc='Cargo subcommand for displaying when different versions of a same dependency ...'
license=('MIT')

# Tier 1 architectures supported by Rust (https://doc.rust-lang.org/nightly/rustc/platform-support.html#tier-1)
arch=('aarch64' 'i686' 'x86_64')

# Generic Stuff for cargo packages
url="https://crates.io/crates/$_crate"
depends=('gcc-libs' 'curl')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::https://crates.io/api/v1/crates/$_crate/$pkgver/download")
sha512sums=('e23a4d22d216908d831e42ae4b9854e9ae0d5db47fb2f11ff419f2182478ed901f74a31914dc10fda949d0c5597315da0d94ab0938fd5b2e8375946d4160d3ca')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	LIBSSH2_SYS_USE_PKG_CONFIG='1' \
	cargo build \
		--locked \
		--release
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	install -Dm755 "target/release/cargo-duplicates" -t "$pkgdir/usr/bin"
}
