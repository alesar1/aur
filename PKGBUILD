# Maintainer: Marco Rubin <marco.rubin@protonmail.com>

pkgname=uefi-run
pkgver=0.4.0
pkgrel=1
pkgdesc="Directly run UEFI applications in QEMU"
arch=('x86_64')
url="https://github.com/Richard-W/uefi-run"
license=('MIT')
depends=(qemu ovmf)
makedepends=(rust)
source=("$url/archive/v$pkgver.tar.gz")
md5sums=('SKIP')

build() {
	cd "$pkgname-$pkgver"
	cargo build
}

check() {
	cd "$pkgname-$pkgver"
	cargo check
}

package() {
	cd "$pkgname-$pkgver"
	cargo install --path . --root "${pkgdir}/usr" --bin uefi-run
}
