# Maintainer: Kobus van Schoor <pbscube at gmail dot com>
pkgname=dotgit
pkgver=1.0.0
pkgrel=1
pkgdesc="A simple bash program to backup all your dotfiles (read multiple hosts) in a single git repo"
url="http://github.com/Cube777/dotgit"
arch=('any')
depends=('git' 'sed' 'grep' 'bash' )
source=('git+https://github.com/Cube777/dotgit.git')
md5sums=('SKIP')

package() {
	install -Dm755 "$srcdir/$pkgname/dotgit" "$pkgdir/usr/bin/dotgit"
}
