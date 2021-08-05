# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Contributor: aereaux <aidan@jmad.org>

pkgname=meli-git
pkgver=0.6.2.r236.gb085703
pkgrel=3
pkgdesc='experimental terminal mail client'
arch=(x86_64)
url=https://meli.delivery
license=(GPL3)
depends=(curl
         dbus
         pcre2
         sqlite)
makedepends=(git
             mandoc
             cargo)
provides=("${pkgname%-git}=$pkgver")
conflicts=("${pkgname%-git}")
source=("git+https://git.meli.delivery/meli/meli.git")
sha256sums=('SKIP')

pkgver() {
	cd "${pkgname%-git}"
	git describe --long --tags --abbrev=7 --tags HEAD |
		sed 's/^\(pre\)\?-\?\(v\|alpha\|beta\|rc\)\?-\?//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${pkgname%-git}"
	cargo fetch --locked --target x86_64-unknown-linux-gnu
}

build() {
	cd "${pkgname%-git}"
	export RUSTUP_TOOLCHAIN=stable
	export CARGO_TARGET_DIR=target
	cargo build --frozen --release --all-features
}

check() {
	cd "${pkgname%-git}"
	export RUSTUP_TOOLCHAIN=stable
	cargo test --frozen
}


package() {
	cd "${pkgname%-git}"
	install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/${pkgname%-git}"
}
