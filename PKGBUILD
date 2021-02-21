# Maintainer: Luis Martinez
pkgname=vim-neomake-git
_pkgname=${pkgname%-git}
pkgver=r2734.5e140db5
pkgrel=1
pkgdesc="Asynchronous linting and make framework for Neovim/Vim"
arch=('any')
url="https://github.com/neomake/neomake"
license=('MIT')
groups=('vim-plugins')
depends=('vim-plugin-runtime')
makedepends=('git')
source=("$pkgname::git+$url.git")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$pkgname"
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  find autoload contrib doc plugin syntax -type f -exec \
    install -Dm644 '{}' "$pkgdir/usr/share/vim/vimfiles/{}" \;
}

