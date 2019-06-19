# Maintainer: JSH <jsh 6 7 8 9 at gmail dot com>
pkgname=rasterview-git
pkgver=v1.7.1.r2.g5e741e6
pkgrel=1
pkgdesc="A CUPS, PWG, and Apple raster file viewer"
arch=('x86_64')
url="https://github.com/michaelrsweet/rasterview"
license=('APACHE')
depends=('fltk')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+${url}")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'

}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	sed -i 's/mimelnk/mime/' rasterview.list.in Makefile.in
	sed -i 's/\/Development//' rasterview.list.in Makefile.in
}

build() {
	cd "$srcdir/${pkgname%-git}"
	autoreconf --force --install
	./configure --prefix=/usr
	make
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir" install
}
