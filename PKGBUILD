# Maintainer: zjuyk <ownbyzjuyk@gmail.com>
pkgname=mdbook-toc
pkgver=0.9.0
pkgrel=2
pkgdesc="A preprocessor for mdbook to add inline Table of Contents support."
arch=('x86_64')
url="https://github.com/badboy/mdbook-toc"
license=('MPL')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz"::$url/archive/refs/tags/$pkgver.tar.gz)
sha256sums=('bcf328b307f366b327bb5465e8636f2064c946493dbfa37e7bb92072b691d060')

build() {
	cd "$pkgname-$pkgver"
	cargo build --release
}

check() {
	cd "$pkgname-$pkgver"
	cargo test --release
}

package() {
	cd "$pkgname-$pkgver"
	install -Dm755 "target/release/$pkgname" -t "$pkgdir/usr/bin"
	install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
