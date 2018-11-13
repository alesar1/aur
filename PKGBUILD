pkgname=('alacritty-git' 'alacritty-terminfo-git')
_pkgname="alacritty"
pkgver=0.2.2.991.gd05d16f
pkgrel=1
arch=('x86_64' 'i686')
url="https://github.com/jwilm/alacritty"
license=('Apache-2.0')
makedepends=('rust' 'cargo' 'cmake' 'fontconfig' 'freetype2' 'git' 'ncurses' 'desktop-file-utils')
source=("$_pkgname::git+https://github.com/jwilm/alacritty.git")
sha256sums=('SKIP')

pkgver() {
	cd $_pkgname
	echo "$(grep '^version =' Cargo.toml|head -n1|cut -d\" -f2).$(git rev-list --count HEAD).g$(git rev-parse --short HEAD)"
}

package_alacritty-git() {
	pkgdesc="A cross-platform, GPU-accelerated terminal emulator"
	depends=('freetype2' 'fontconfig' 'xclip')
	provides=('alacritty')
	conflicts=('alacritty')

	cd $_pkgname

	env CARGO_INCREMENTAL=0 cargo build --release

	desktop-file-install -m 644 --dir "$pkgdir/usr/share/applications/" "$srcdir/$_pkgname/alacritty.desktop"

	install -D -m755 "$srcdir/$_pkgname/target/release/alacritty" "$pkgdir/usr/bin/alacritty"
	install -D -m644 "$srcdir/$_pkgname/alacritty.man" "$pkgdir/usr/share/man/man1/alacritty.1"
	install -D -m644 "$srcdir/$_pkgname/alacritty-completions.bash" "$pkgdir/usr/share/bash-completion/completions/alacritty"
	install -D -m644 "$srcdir/$_pkgname/alacritty-completions.zsh" "$pkgdir/usr/share/zsh/site-functions/_alacritty"
	install -D -m644 "$srcdir/$_pkgname/alacritty-completions.fish" "$pkgdir/usr/share/fish/completions/alacritty.fish"
}

package_alacritty-terminfo-git() {
	pkgdesc="Terminfo files for the alacritty terminal emulator"
	provides=('alacritty-terminfo')
	conflicts=('alacritty-terminfo')

	cd $_pkgname

	install -dm 755 "$pkgdir/usr/share/terminfo/a/"
	tic -o "$pkgdir/usr/share/terminfo" alacritty.info
}
