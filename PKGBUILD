# Maintainer: Jordan Rudess <jrudess@gmail.com>
pkgname=levd-git
pkgver=r3.fd0be7d
pkgrel=6
pkgdesc="Daemon to control NZXT Kraken x61"
arch=('i686' 'x86_64')
url="https://github.com/jrudess/levd"
license=('MIT')
depends=('google-glog' 'yaml-cpp' 'libusb')
makedepends=('git' 'cmake')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
backup=("etc/leviathan/levd.cfg")
install=
source=('git://github.com/jrudess/levd.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	mkdir -p "$srcdir/${pkgname%-git}/build"
	patch -Np1 -i "$srcdir/../${pkgname%-git}.patch"
}

build() {
	cd "$srcdir/${pkgname%-git}/build"
	cmake -DCMAKE_INSTALL_PREFIX="/usr" ..
	make
}

package() {
	cd "$srcdir/${pkgname%-git}/build"
	make DESTDIR="$pkgdir/" install
	install -Dm644 ../LICENSE "$pkgdir"/usr/share/licenses/${pkgname%-git}/LICENSE
}
