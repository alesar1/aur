# Maintainer: KingofToasters <s.gregoratto@gmail.com>

pkgname=otpclient-git
dirname="OTPClient"
pkgver=1.0.6
pkgrel=1
pkgdesc="Simple GTK+ v3 TOTP/HOTP client that uses libcotp"
arch=('x86_64')
url="https://github.com/paolostivanin/OTPClient"
license=('GPL3')
depends=('gtk3' 'glib2' 'json-glib' 'libgcrypt' 'json-glib' 'libzip' 'libcotp' 'pkg-config')
makedepends=('cmake' 'git')
provides=(otpclient)
source=("git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "$dirname"
 	printf "%s" "$(git describe --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	
	cd $dirname
	mkdir build 
	cd build
	cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
	make
}

package() {
	cd $dirname/build
	make DESTDIR="$pkgdir/" install
}
