# -*- mode: Shell-script; eval: (setq indent-tabs-mode 't); eval: (setq tab-width 4) -*-
# Maintainer: Dominic Meiser [git at msrd0 dot de]

_crate="cargo-doc2readme"
pkgname="cargo-doc2readme"
pkgver=0.1.4
pkgrel=2
pkgdesc='cargo subcommand to create a readme file containing the rustdoc comments from...'
url='https://crates.io/crates/cargo-doc2readme'
license=('Apache')

depends=('gcc-libs' 'curl' 'libgit2.so=1.5')
makedepends=('cargo' 'libgit2')

source=("$_crate-$pkgver.tar.gz::https://crates.io/api/v1/crates/cargo-doc2readme/0.1.4/download"
		"https://github.com/rust-lang/cargo/archive/refs/heads/rust-1.63.0.zip"
		"https://github.com/rust-lang/cargo/pull/11004.patch"
		"fix-libgit2-1.5-compat.patch")
sha512sums=('448e351b70e6d973929a3b1de0bef1abe5e4ba67dbb08ef44a6a8d2f778ab1fac3a98e33b2a09c2ed65089d2cc95fe27845a71c616ea3746ed3c274704aa8998'
            'a786581377075ae921a4331e8f70c93242d6aef89ae5da29a69fc7f8597e9bc34682d48bd01ba8186fb509128a95706d9ccd4e75f85c15539dd6ff54b871a0fe'
            'ed4b148bbbdc26059278d9170d377f36b4847d3c253fa4e3549354de8e17bb2849a6541048a9438f1880f003c8debea9766737773c856c9acec31b90fb60553f'
            '19b531890bf9c9762886a4344783305d8821370f92c36c56ccece503fc1089d309ee1225061aeeeac196cf5ed0b1e3f60730a4690134b8bcee1685affa10e942')

# Tier 1 architectures supported by Rust (https://doc.rust-lang.org/nightly/rustc/platform-support.html#tier-1)
arch=('aarch64' 'i686' 'x86_64')

prepare() {
	cd "$srcdir/cargo-rust-1.63.0"
	patch -N -p1 -i "$srcdir/11004.patch"
	
	cd "$srcdir/$_crate-$pkgver"
	patch -N -p1 -i "$srcdir/fix-libgit2-1.5-compat.patch"
	cargo fetch --locked
}

build() {
	cd "$srcdir/$_crate-$pkgver"
	LIBSSH2_SYS_USE_PKG_CONFIG='1' \
	cargo build \
		--offline \
		--locked \
		--release
}

package() {
	cd "$srcdir/$_crate-$pkgver"
	install -Dm755 "target/release/cargo-doc2readme" -t "$pkgdir/usr/bin"
}
