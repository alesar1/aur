#AUR Maintainter: JKA Network <contacto@jkanetwork.com>
pkgname=openlitespeed
pkgver=1.4.34
pkgrel=1
pkgdesc="A high-performance, lightweight, open source HTTP server"
arch=('x86_64' 'i686')
url="http://open.litespeedtech.com/mediawiki/index.php/Downloads"
license=('GPLv3')
depends=('pcre' 'rcs' 'geoip' 'expat' 'openssl')
makedepends=('git' 'imake')
provides=('openlitespeed')
options=()
source=("http://open.litespeedtech.com/packages/openlitespeed-$pkgver.tgz"
		'openlitespeed.service')
md5sums=('1cd1ff012033d67d3c6c85ab910ddf0b'
         'f4acf3cdbf449a457818982eb933d6f7')
install=$pkgname.install
build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr/local/lsws/
	make
}
package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
	install -Dm0644 "${srcdir}/openlitespeed.service" "${pkgdir}/usr/lib/systemd/system/openlitespeed.service"
}
