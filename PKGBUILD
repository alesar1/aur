# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=fish-fzf
pkgver=9.4
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
sha256sums=('4e7ecc999a9c49c538c083daf8fa7b7a9161995bae09263af3840caa6629b87d')

# check() {
#  cd "fzf.fish-$pkgver/"
#  find tests -type f -exec fish -Pc 'fishtape {}' \;
# }

package() {
	cd "fzf.fish-$pkgver/"
	install -Dm644 completions/*.fish -t "$pkgdir/usr/share/fish/vendor_completions.d/"
	install -Dm644 conf.d/*.fish -t "$pkgdir/usr/share/fish/vendor_conf.d/"
	install -Dm644 functions/*.fish -t "$pkgdir/usr/share/fish/vendor_functions.d/"
	install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
