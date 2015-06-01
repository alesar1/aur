pkgname=shaman-git
pkgver=2.0.0.α.r22.g1ded016
pkgrel=1

pkgdesc="A small, native C library and utility to fetch weather"
url="https://github.com/HalosGhost/shaman"
arch=('i686' 'x86_64')
license=('GPL2')

depends=('curl' 'jansson')
makedepends=('git' 'tup' 'clang' 'python-sphinx')

source=('git+https://github.com/HalosGhost/shaman.git')

sha256sums=('SKIP')

pkgver () {
	cd shaman
	git describe --long | sed -r 's/([^-]*-g)/r\1/; s/-/./g'
}

build () {
	cd shaman
	LANG='en_US.utf8' tup upd
}

check () {
	cd shaman/test
	LD_LIBRARY_PATH=../src ./suite
}

package () {
	cd shaman
	DESTDIR="$pkgdir" PREFIX='/usr' ./install.sh
}
