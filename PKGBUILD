# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=freac-git
pkgver=1.1.3.r31.a75a4a43
pkgrel=1
pkgdesc="Audio converter and CD ripper with support for various popular formats and encoders."
arch=('x86_64')
url="https://www.freac.org"
license=('GPL2')
depends=('fdkaac' 'faad2' 'lame' 'libmp4v2' 'mpg123' 'libogg' 'opus' 'libpng'
         'speex' 'libvorbis' 'libpulse' 'libgudev' 'boca-git' 'hicolor-icon-theme')
makedepends=('git')
provides=("${pkgname%-git}" 'freac.so=freac.so-64')
conflicts=("${pkgname%-git}")
source=('git+https://github.com/enzo1982/freac.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	find . -type f -exec sed -i 's|/usr/local|/usr|g' {} \;
}

build() {
	cd "$srcdir/${pkgname%-git}"
	make
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir/" install
}
