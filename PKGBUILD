# Maintainer: Alexandre `zopieux` Macabies <web+oss@zopieux.com>

pkgname=vim-nix-git
pkgver=r83.be0c6bb
pkgrel=1
pkgdesc="Nix support for Vim"
arch=('any')
url='https://github.com/LnL7/vim-nix'
license=('MIT')
depends=('vim')
source=('vim-nix::git+git://github.com/LnL7/vim-nix.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/${pkgname%-git}"
	declare -r vimfiles="$pkgdir/usr/share/vim/vimfiles"
	for component in compiler ftdetect ftplugin indent plugin syntax
	do
		for file in $component/*
		do
			install -D -m644 "$file" "$vimfiles/$file"
		done
	done
}
