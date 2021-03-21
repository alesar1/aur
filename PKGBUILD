# Maintainer: X0rg
# Contributor: eloaders <eloaders at linux dot pl>

_pkgname=libcpuid
pkgname=$_pkgname-git
epoch=2
pkgver=0.5.1.r1.gccd0ec8
pkgrel=1
pkgdesc="A small C library for x86 CPU detection and feature extraction"
arch=('i686' 'x86_64')
url="http://libcpuid.sourceforge.net"
license=('BSD')
depends=('glibc')
makedepends=('git' 'cmake' 'ninja' 'doxygen')
provides=('libcpuid')
conflicts=('libcpuid')
source=("git+https://github.com/anrieff/libcpuid.git")
sha512sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cmake -S "$srcdir/$_pkgname" -B build -GNinja -DCMAKE_BUILD_TYPE=RelWithDebInfo -DCMAKE_INSTALL_PREFIX=/usr
	cmake --build build
}

package() {
	DESTDIR="$pkgdir" cmake --install build
	install -Dvm644 "$srcdir/$_pkgname/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
