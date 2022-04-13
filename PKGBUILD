# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=neovim-scrollview
pkgver=3.0.3
pkgrel=1
pkgdesc="Neovim plugin that displays interactive vertical scrollbars"
arch=('any')
url="https://github.com/dstein64/nvim-scrollview"
license=('MIT')
groups=('neovim-plugins')
depends=('neovim')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('6edc4ea1dbff0549374aa4696fdb1bb7cb7d564ee107471adf320262cc4c2d28')

PURGE_TARGETS=('tags')

package() {
	cd "nvim-scrollview-$pkgver"
	find doc lua plugin \
		-type f \
		-exec install -Dm644 '{}' "$pkgdir/usr/share/nvim/runtime/{}" \;
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
