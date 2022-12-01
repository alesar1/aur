# Maintainer: github.com/catppuccin
# Packager: Ivan Sosnov <dinckel at dinckelman dot xyz" 

pkgname=catppuccin-konsole-theme-git
pkgdesc="Catppuccin for Konsole"
pkgver=r29.7d86b8a
pkgrel=1
url="https://github.com/catppuccin/konsole"
license=('MIT')
arch=('any')
makedepends=('git')
source=("${pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$pkgname"

	install -Dm0644 -t "$pkgdir"/usr/share/konsole/ $(find . -type f -name 'Catppuccin-*.colorscheme')
	install -Dm0644 -t "$pkgdir"/usr/share/licenses/$pkgname LICENSE
}