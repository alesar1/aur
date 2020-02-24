# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=boca-git
pkgver=1.0.beta3.r3.g765662c9
pkgrel=1
epoch=2
pkgdesc="A component library used by the fre:ac audio converter"
arch=('i686' 'x86_64')
url="https://github.com/enzo1982/boca"
license=('GPL2')
depends=('alsa-lib' 'libcdio-paranoia' 'expat' 'libpulse' 'uriparser' 'smooth-git')
makedepends=('git')
provides=("${pkgname%-git}" 'libboca' 'libboca-1.0.so=2-64' 'freac_cdk')
conflicts=("${pkgname%-git}" 'libboca' 'freac_cdk')
source=('git+https://github.com/enzo1982/boca.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	find . -type f -exec sed -i 's|/usr/local|/usr|g' {} \;

	sed -i 's/FOLDERS += coreaudioconnect/#FOLDERS += coreaudioconnect/g' \
		components/encoder/Makefile
}

build() {
	cd "$srcdir/${pkgname%-git}"
	make
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir/" install
}
