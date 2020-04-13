# Maintainer: Paul Etherton <paul at pjetherton dot co dot uk>
pkgname=crush-git
pkgver=0.1.0.r377.cf689a8
pkgrel=1
pkgdesc="An attempt to make a command line shell that is also a powerful modern programming language"
arch=('x86_64')
url="https://github.com/liljencrantz/crush"
license=('MIT')
makedepends=('git' 'cargo')
provides=('crush')
conflicts=('crush')
source=('crush::git+https://github.com/liljencrantz/crush')
md5sums=('SKIP')

build() {
	cd crush
	cargo build --release --locked --all-features
}

pkgver() {
	cd crush
	echo "$(grep '^version =' Cargo.toml|head -n1|cut -d\" -f2|cut -d\- -f1).r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
	cd crush
	install -Dm 755 target/release/crush -t "${pkgdir}/usr/bin"
	install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licences/$pkgname/LICENSE"
}
