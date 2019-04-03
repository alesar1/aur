# Contributor: Abhishek Dasgupta <abhidg@gmail.com>
# Contributor: Eric Belanger <eric@archlinux.org>
# Contributor: Jan Fader <jan.fader@web.de>
# Contributor: Stephen Drodge <stephen.drodge@gmail.com>
# Maintainer: SanskritFritz (gmail)

pkgname=fish-git
_gitname="fish-shell"
pkgver=3.0.2.r801.g318fe3c04
pkgrel=1
epoch=2
pkgdesc="User friendly shell intended mostly for interactive use."
arch=('i686' 'x86_64' 'arm')
url="http://fishshell.com"
license=("GPL2")
depends=('ncurses')
optdepends=('python: fish_update_completions and other tools' 
			'xsel: clipboard integration')
makedepends=('cmake' 'python-sphinx' 'git')
provides=('fish' 'fish-shell')
conflicts=('fish' 'fish-shell')
install='fish.install'
source=("git://github.com/fish-shell/fish-shell.git")
md5sums=('SKIP')

pkgver() {
	cd "$_gitname"
	git describe --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
	cd "$srcdir/$_gitname"
	mkdir -p build
	cd build
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_SYSCONFDIR=/etc -DCMAKE_BUILD_TYPE=Release ..
	make

}

package() {
	cd "$srcdir/$_gitname/build"
	make DESTDIR="$pkgdir" install
	
}
