# Maintainer: Kat Witten <turtlewit@live.com>
pkgname=cglm
pkgver=0.8.2
pkgrel=1
pkgdesc="OpenGL Mathematics (glm) for C"
arch=('x86_64')
url="https://github.com/recp/cglm"
license=('MIT')
depends=('glibc')
source=("$pkgname-$pkgver.tar.gz::https://github.com/recp/cglm/archive/v$pkgver.tar.gz")
md5sums=('34de5c0ee245b71d3fd4e20e4fd1e3ef')

build() {
	cd "$pkgname-$pkgver"
	sh autogen.sh
	./configure --prefix=/usr
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
	install -d "$pkgdir/usr/share/licenses/cglm/"
	install LICENSE "$pkgdir/usr/share/licenses/cglm/"
	install -d "$pkgdir/usr/lib/pkgconfig/"
	install cglm.pc "$pkgdir/usr/lib/pkgconfig/"
}
