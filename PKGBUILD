pkgname=parity-git
_pkgname=parity
pkgdesc="Fast, light, robust Ethereum implementation"
pkgrel=1
pkgver=1.1.0.3311
arch=('i686' 'x86_64')
conflicts=("parity")
provides=("parity")
url="https://github.com/ethcore/parity"
license=('GPL-3.0')
depends=('rocksdb')
makedepends=('rust' 'cargo' 'git' 'python-pytoml')
source=('git://github.com/ethcore/parity.git')
sha256sums=(
	'SKIP'
)

pkgver() {
	cd $_pkgname
	echo "$(python -c "print(__import__('pytoml').loads(open('Cargo.toml').read())['package']['version'])").$(git rev-list --count HEAD)"
}

build() {
	cd $_pkgname
	cargo build --release
}

package() {
	cd $_pkgname
	export PATH="$PATH:$pkgdir/usr/bin"
	cargo install --root "$pkgdir/usr"
	rm "$pkgdir/usr/.crates.toml"
}
