# Maintainer: kraftwerk28 <kefirchik3@gmail.com>

pkgname=lua-i3ipc-git
_pkgname="${pkgname%-git}"
pkgver=v1.0.r0.g22378ed
pkgrel=1
pkgdesc="A lua library for controlling i3wm & Sway"
arch=('any')
url="https://github.com/kraftwerk28/lua-i3ipc.git"
license=('MIT')
depends=('luajit')
makedepends=('git' 'luarocks' 'tree')
source=("git+https://github.com/kraftwerk28/lua-i3ipc.git")
sha256sums=('SKIP')

pkgver() {
	cd $_pkgname
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
	local luaver=5.1
	local dir="$pkgdir/usr/share/lua/$luaver/"
	luarocks \
		--lua-version $luaver \
		--tree "$pkgdir/usr" \
		install --no-manifest luv
	luarocks \
		--lua-version $luaver \
		--tree "$pkgdir/usr" \
		install --no-manifest struct
	mkdir -p $dir
	cd $dir
	cp -R "$srcdir/$_pkgname/i3ipc/" .
}
