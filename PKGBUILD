# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=freac-git
pkgver=1.1.beta2.continuous.2.g4612a274
pkgrel=1
pkgdesc="Audio converter and CD ripper with support for various popular formats and encoders."
arch=('i686' 'x86_64')
url="https://www.freac.org"
license=('GPL2')
depends=('faac' 'faad2' 'libjpeg-turbo' 'lame' 'libmp4v2' 'mpg123' 'libogg' 'opus' 'libpng'
         'speex' 'libvorbis' 'libpulse' 'libgudev' 'boca-git' 'smooth-git' 'hicolor-icon-theme')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/enzo1982/freac.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "1.1.beta2.%s" "$(git describe --long --tags | sed 's/^v//;s/([^-]*-g)/r/;s/-/./g')"
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
