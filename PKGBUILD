# Maintainer: tectonic-deploy <sasha+tectonic@hackafe.net>
# Maintainer: Daniel M. Capella <polyzen@archlinux.org>
# Contributor: Jan Tojnar <jtojnar@gmail.com>

# The master version of this file is maintained here:
#
#   https://github.com/tectonic-typesetting/tectonic/blob/master/dist/arch/PKGBUILD.in
#
# The version on aur.archlinux.org is updated automatically by the Tectonic
# CI/CD system # when new versions are released.

pkgname=tectonic
pkgver=0.3.2
pkgrel=0
arch=('x86_64')
pkgdesc='Modernized, complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive'
url=https://tectonic-typesetting.github.io/
license=('MIT')
depends=('fontconfig' 'harfbuzz-icu' 'openssl')
makedepends=('rust')
source=("$pkgname-$pkgver.tar.gz::https://crates.io/api/v1/crates/$pkgname/$pkgver/download")
sha512sums=('1a466bf9231f3a3c35c382de89cb6cf07606bd544c259692aa16fc136feb796e71aedf8f3844694b8a1eb55f9c8e7043d0a0bca3de97ce90a2279d8e2942f243')

build() {
	cd $pkgname-$pkgver
	cargo build --release --target-dir "./target"
}

check() {
	cd $pkgname-$pkgver
	cargo test --release --target-dir "./target"
}

package() {
	cd $pkgname-$pkgver
	install -Dm755 target/release/tectonic "$pkgdir"/usr/bin/tectonic
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
