pkgname=ydcv-rs-git
_gitname="ydcv-rs"
pkgdesc="A Rust version of ydcv."
pkgver=0.3.1.55
pkgrel=3
arch=('i686' 'x86_64')
conflicts=("ydcv")
provides=("ydcv")
url="https://github.com/farseerfc/ydcv-rs"
license=('MIT' 'GPL2')
depends=("openssl" "readline" "libdbus")
optdepends=("xsel: for X selection")
makedepends=('git' 'cargo' 'python-pytoml')
source=('git://github.com/farseerfc/ydcv-rs.git')
sha256sums=('SKIP')

pkgver() {
	cd $_gitname
	echo "$(python -c "print(__import__('pytoml').loads(open('Cargo.toml').read())['package']['version'])").$(git rev-list --count HEAD)"
}

build() {
	cd $_gitname
	cargo build --no-default-features --features "hyper notify-rust" --release
}

check() {
	cd $_gitname
	cargo test --release
}

package() {
	cd $_gitname
	export PATH="$PATH:$pkgdir/usr/bin"
	cargo install --root "$pkgdir/usr"
	mv "$pkgdir/usr/bin/ydcv-rs" "$pkgdir/usr/bin/ydcv"
	rm "$pkgdir/usr/.crates.toml"
}
