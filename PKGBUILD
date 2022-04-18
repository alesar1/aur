# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=neovim-lspconfig
pkgver=0.1.3
pkgrel=1
pkgdesc='Quickstart configurations for the Neovim LSP client'
arch=('any')
url=https://github.com/neovim/nvim-lspconfig
license=('Apache')
groups=('neovim-plugins')
depends=('neovim')
install=lspconfig.install
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('27308bfa7bf48eb6caf363e2753182a3dc653e6b94d6b3307223a79f59a352b2')

PURGE_TARGETS=('tags')

package() {
	cd "nvim-lspconfig-$pkgver"
	find lua plugin \
		-type f \
		-exec install -Dm644 '{}' "$pkgdir/usr/share/nvim/runtime/{}" \;
	install -Dm644 doc/lspconfig.txt -t "$pkgdir/usr/share/nvim/runtime/doc/"
	install -Dm644 README.md doc/server_configurations.md \
		-t "$pkgdir/usr/share/doc/$pkgname/"
}
