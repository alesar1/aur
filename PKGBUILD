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
pkgver=0.3.1
pkgrel=0
arch=('x86_64')
pkgdesc='Modernized, complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive'
url=https://tectonic-typesetting.github.io/
license=('MIT')
depends=('fontconfig' 'harfbuzz-icu' 'openssl')
makedepends=('rust')
source=("$pkgname-$pkgver.tar.gz::https://crates.io/api/v1/crates/$pkgname/$pkgver/download")
sha512sums=('b6a8a26532b58b895db3b81085844f6c782dd972195be2da58f0d5c2c87381c7a096e3d2743818b012b6752c48c90369b33cb21ef6fd74badf23a19ca7c1f088')

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
