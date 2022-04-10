# Maintainter: Woshiluo Luo <woshiluo.luo@outlook.com>
pkgname=phantun
pkgver=0.3.0
pkgrel=2
pkgdesc="Transforms UDP stream into (fake) TCP streams\
		 that can go through Layer 3 & Layer 4 (NAPT) firewalls/NATs."
arch=('x86_64')
url="https://github.com/dndx/phantun"
license=('APACHE')
makedepends=('git' 'rust')
source=(https://github.com/dndx/phantun/archive/refs/tags/v${pkgver}.zip)

sha256sums=('ce97dcdb12603d13890128491dc9afb74c4e3e13e15b4eb685e53272e8a2618a')

build() {
	cd "$srcdir/$pkgname-$pkgver"

	cargo build --release
}

package() {
	cd "$srcdir/$pkgname-$pkgver"

	mkdir -p $pkgdir/usr/bin
	install -m 755 target/release/client ${pkgdir}/usr/bin/phantun-client
	install -m 755 target/release/server ${pkgdir}/usr/bin/phantun-server
}
