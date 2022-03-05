# Maintainer: LMH01 <lmh-01@netcologne.de>
pkgname=acquire_rs
pkgver=1.0.1
pkgrel=1
pkgdesc='The board game Acquire written in rust to be played via the command line'
url='https://github.com/lmh01/Acquire_rs'
source=("https://github.com/LMH01/Acquire_rs/archive/refs/tags/v$pkgver.tar.gz")
arch=('x86_64')
license=('MIT')
makedepends=('cargo' 'gcc')
sha256sums=('50fef42b653b20188577bc0274f0013493a2cd78347ded70b8b6576e9735d5db')

build() {
	cd "$srcdir/Acquire_rs-$pkgver"
	cargo build --release
}

package() {
	cd "$srcdir/Acquire_rs-$pkgver"
	install -Dm755 target/release/acquire_rs "${pkgdir}/usr/bin/acquire_rs"
}
