# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=fish-fzf
pkgver=8.2
pkgrel=1
pkgdesc="fzf key-bindings into fish"
arch=('any')
url="https://github.com/PatrickF1/fzf.fish"
license=('MIT')
groups=('fish-plugins')
depends=('fish' 'fzf')
optdepends=(
	'fd: required for search directory feature'
	'bat: required for search directory feature'
	'git')
makedepends=('git')
# checkdepends=('fish-fishtape')
install="$pkgname.install"
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('c244fcee44a12a0670a522df394dec74557eb1c45edead978e4ee5453000fc97')

# check() {
#  cd "fzf.fish-$pkgver/"
#  find tests -type f -exec fish -Pc 'fishtape {}' \;
# }

package() {
	cd "fzf.fish-$pkgver/"
	install -Dm644 completions/fzf_configure_bindings.fish -t "$pkgdir/usr/share/fish/vendor_completions.d/"
	install -Dm644 conf.d/fzf.fish -t "$pkgdir/usr/share/fish/vendor_conf.d/"
	find functions \
		-type f \
		-exec install -Dm644 -t "$pkgdir/usr/share/fish/vendor_functions.d/" '{}' \+
	install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
