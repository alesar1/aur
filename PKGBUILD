# Maintainer: François Freitag <mail@franek.fr>
pkgname=php-igbinary
_pkgname=igbinary
pkgver=3.0.0
pkgrel=1
pkgdesc="Igbinary is a drop in replacement for the standard php serializer."
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url='https://github.com/igbinary/igbinary'
license=('BSD')
depends=(php)
conflicts=(php-igbinary-git)
backup=("etc/php/conf.d/igbinary.ini")
source=("${pkgname}-${pkgver}-${pkgrel}.tar.gz::${url}/archive/${pkgver}.tar.gz")
sha256sums=('0ad4ad02209f1bce9c255e574ef253ef2346f9a331bccb9277f2d8d26b8d7297')

build() {
	cd "${_pkgname}-${pkgver}"

	phpize
	./configure --enable-igbinary
	make
}

check() {
	cd "${_pkgname}-${pkgver}"

	NO_INTERACTION=1 make test
}

package() {
	cd "${_pkgname}-${pkgver}"

	make INSTALL_ROOT="$pkgdir" install
	install -D -m0644 \
		"${srcdir}/${_pkgname}-${pkgver}/igbinary.php.ini" \
		"${pkgdir}/etc/php/conf.d/igbinary.ini"
	install -D -m0644 \
		"${srcdir}/${_pkgname}-${pkgver}/COPYING" \
		"${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
