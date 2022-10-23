# Maintainer: ArtFox3  <artfox3@gmail.com>
pkgname="lobster"
pkgver=3.0.4
pkgrel=1
pkgdesc="Shell script to watch Movies/Webseries/Shows from the terminal."
arch=('any')
url="https://github.com/justchokingaround/lobster.git"
license=('GPL2')
makedepends=('git')
depends=('fzf' 'curl' 'grep' 'sed' 'patch' 'mpv')
source=("$pkgname::git+$url")
md5sums=('SKIP')

package() {
	cd "$srcdir/$pkgname"
	install -Dm755 "./lobster.sh" "$pkgdir/usr/bin/lobster"
}
