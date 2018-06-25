# Maintainer: Connor Behan <connor.behan@gmail.com>
# Contributor: Rémy Oudompheng <oudomphe@clipper.ens.fr>
pkgname=singular-factory
pkgver=4.1.1
pkgrel=1
pkgdesc="Computer Algebra System for polynomial computations: factory and libfac"
arch=('i686' 'x86_64')
url="http://www.singular.uni-kl.de/"
license=('GPL')
depends=('gmp' 'ncurses' 'readline' 'ntl')
options=('!strip')
source=(http://www.mathematik.uni-kl.de/ftp/pub/Math/Singular/Factory/factory-$pkgver.tar.gz)

build() {
	cd "$srcdir"/factory-$pkgver

        autoreconf -vfi
        cp cf_assert.h include/factory/
	./configure --prefix=/usr \
		    --libdir=/usr/lib \
		    --includedir=/usr/include/singular \
		    --with-ntl \
		    --with-gmp \
		    --disable-omalloc \
		    --without-Singular

	make
}

package() {
	cd "$srcdir"/factory-$pkgver
	make DESTDIR="$pkgdir" install
}

md5sums=('f2bed6e0e0f88a8cfb6a7225b26931c6')
