# Maintainer: Moses Miller <Majora320@gmail.com>
pkgname=jelly-git
pkgver=r223.6de53f3
pkgrel=1
pkgdesc="An esoratic programming language"
arch=('any')
url="https://github.com/DennisMitchell/jelly"
license=('unknown')
depends=('python3' 'python-sympy')
makedepends=('git')
source=("jelly-git::git+http://github.com/DennisMitchell/jelly")
md5sums=('SKIP')

_python3ver="$(python3 --version | sed -E 's/Python ([[:digit:]].[[:digit:]]).[[:digit:]]/\1/')"

package() {
	libdestdir="$pkgdir/usr/lib/python$_python3ver/jelly"
	bindestdir="$pkgdir/usr/bin"
	bindest="$bindestdir/jelly"

	cd "$pkgname"
	
	install -D -m444 dictionary.py "$libdestdir"
	install -D -m444 jelly.py "$libdestdir"
	install -D -m555 jelly "$libdestdir"

	mkdir -p "$bindestdir"
	ln -s "../lib/python$_python3ver/jelly/jelly" "$bindest"
	chmod 555 "$bindest"
}

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
