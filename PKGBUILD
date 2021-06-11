# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>

pkgname=image-roll-git
pkgver=1.0.0.r0.gf0cc1f6
pkgrel=2
pkgdesc="A simple and fast GTK image viewer with basic image manipulation tools"
arch=('x86_64')
url="https://github.com/weclaw1/image-roll"
license=('MIT')
depends=('gtk3')
makedepends=('git' 'cargo')
provides=('image-roll')
conflicts=('image-roll')
source=("$pkgname::git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	git describe --long --tags | sed 's/^v//;s/-/.r/;s/-/./'
}

build() {
	cd "$pkgname"
	cargo build --release --locked --all-features --target-dir=target
}

check() {
	cd "$pkgname"
	cargo test --release --locked --target-dir=target
}

package() {
	cd "$pkgname"
	install -Dvm 755 target/release/image-roll -t "$pkgdir/usr/bin/"
	install -Dvm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dvm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
