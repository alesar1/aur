# Maintainer: Christian Mauderer <oss@c-mauderer.de>
pkgname=sii-slp-cups-git
pkgver=r3.6b25589
pkgrel=1
pkgdesc="Linux cups drivers for Smart Label Printers slp100 slp200 slp240 slp440 slp450 slp620 slp650"
arch=('i686' 'x86_64')
url="https://github.com/paulfurley/smart-label-printer-slp-linux-driver"
license=('GPL')
depends=('cups' 'libcups' 'libjpeg' 'zlib')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+https://github.com/c-mauderer/smart-label-printer-slp-linux-driver.git")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	make build
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir/" install
}
