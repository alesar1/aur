# Maintainer: Jon Gjengset <jon@tsp.io>
pkgname=rustup
pkgver=0.1.11
pkgrel=2

# we (currently) need to build using nightly
# this can hopefully go away eventually
# also doesn't build with current nightly:
# https://github.com/rust-lang-nursery/rustup.rs/commit/76849ce0b78a67ba157eb18fe55e6ff49a380942
rustv="nightly-2016-05-10"
chn=$(echo "$rustv" | tr '-' ' ' | cut -d' ' -f1)
date=$(echo "$rustv" | tr '-' ' ' | cut -d' ' -f2- | tr ' ' '-')
date="-$date"
target="rust-$chn-$CARCH-unknown-linux-gnu"

pkgdesc="The Rust toolchain installer"
arch=('any')
url="https://github.com/rust-lang-nursery/rustup.rs"
license=('MIT' 'Apache')
makedepends=() #'cargo-nightly'
provides=('rust' 'cargo' 'rust-nightly' 'cargo-nightly')
conflicts=('rust' 'cargo' 'rust-nightly' 'rust-nightly-bin' 'multirust' 'multirust-git')
replaces=('multirust' 'multirust-git')
install='post.install'
source=(
	"${pkgname}-${pkgver}.tgz::https://github.com/rust-lang-nursery/rustup.rs/archive/${pkgver}.tar.gz"
	"$target$date.tar.gz::https://static.rust-lang.org/dist/${date#-}/${target}.tar.gz"
	"$target$date.tar.gz.asc::https://static.rust-lang.org/dist/${date#-}/${target}.tar.gz.asc"
)
md5sums=('4d1b35192eeea327e72b5aa254581cca'
         '009ccdef55366033a1db0f74762a7fa3'
         'SKIP')

build() {
	# set up nightly cargo
	cd "$srcdir/$target"
	msg2 "Setting up cargo $chn ${date#-}"
	./install.sh --prefix="$srcdir/cargo"
	export PATH="$srcdir/cargo/bin:$PATH"

	msg2 "Building rustup"
	cd "$srcdir/$pkgname.rs-$pkgver"
	cargo build --release --bin rustup-init

	msg2 "Running rustup-init"
	mkdir -p "$srcdir/tmp/.cargo"
	env "HOME=$srcdir/tmp" target/release/rustup-init -y --no-modify-path
}

package() {
	cd "$pkgname.rs-$pkgver"
	install -dm755 "$pkgdir/usr/bin"
	cp "$srcdir/tmp/.cargo/bin"/* "$pkgdir/usr/bin/"
}

# vim:filetype=sh:
