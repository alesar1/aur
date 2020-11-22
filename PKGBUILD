# Maintainer: Daniel Peukert <daniel@peukert.cc>
_pkgname='rage'
pkgname="rust-$_pkgname"
pkgver='0.5.0'
pkgrel='1'
pkgdesc='Rust implementation of the age encryption tool'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/str4d/$_pkgname"
license=('Apache' 'MIT')
depends=('fuse2' 'pcsclite')
makedepends=('cargo')
optdepends=('bash-completion: Bash completion')
source=("$pkgname-$pkgver-$pkgrel.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('8b2b9daada1ebf324050be565f284f96b1f5b72f896fb4d1772797dc11bc4400')

_sourcedirectory="$_pkgname-$pkgver"

build() {
	cd "$srcdir/$_sourcedirectory/"
	cargo build --release --locked --all-features
	cargo run --release --locked --all-features --example generate-completions
	cargo run --release --locked --all-features --example generate-docs
}

package() {
	cd "$srcdir/$_sourcedirectory/target/"
	for _binary in "$_pkgname" "$_pkgname-keygen" "$_pkgname-mount"; do
		install -Dm755 "release/$_binary" "$pkgdir/usr/bin/$_binary"
		install -Dm644 "completions/$_binary.bash" "$pkgdir/usr/share/bash-completion/completions/$_binary"
		install -Dm644 "completions/$_binary.fish" "$pkgdir/usr/share/fish/vendor_completions.d/$_binary.fish"
		install -Dm644 "completions/$_binary.zsh" "$pkgdir/usr/share/zsh/site-functions/_$_binary"
		install -Dm644 "manpages/$_binary.1.gz" "$pkgdir/usr/share/man/man1/$_binary.1.gz"
	done
	install -Dm644 '../LICENSE-MIT' "$pkgdir/usr/share/licenses/$pkgname/LICENSE-MIT"
}
