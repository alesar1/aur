# $Id$
# Maintainer: Martin Striz < ms AT martinstriz DOT cz >

pkgname=php-mongodb
pkgver=1.0.0
pkgrel=1
pkgdesc="MongoDB driver for PHP"
arch=("i686" "x86_64")
url="http://mongodb.github.io/mongo-php-driver"
license=("APACHE")
depends=("php")
backup=("etc/php/conf.d/mongodb.ini")
source=(
	"http://pecl.php.net/get/mongodb-$pkgver.tgz"
	"mongodb.ini"
)
sha256sums=('a1f0ac6835190ce119b3b0646b6918713132e6942003f38dd7a6579e8f255aff'
            '242b9ffea6bd84f813c7fc2a767eaa89f83577c5ff10ff36aecec2ca308ff72b')

build() {
	cd mongodb-$pkgver
	phpize
	./configure --prefix=/usr
}

package() {
	cd mongodb-$pkgver
	make INSTALL_ROOT="$pkgdir" install
	install -Dm644 "$srcdir/mongodb.ini" "$pkgdir/etc/php/conf.d/mongodb.ini"
}
