# Maintainer: Hugo Hörnquist <hugo@lysator.liu.se>

pkgname=guile-redis
pkgver=2.1.2
pkgrel=1
pkgdesc=''
arch=(any)
license=(GPL3)
depends=('guile>=2.0.9')
url=http://savannah.nongnu.org/projects/guile-redis
source=( https://download.savannah.gnu.org/releases/${pkgname}/${pkgname}-${pkgver}.tar.gz{,.sig} )
md5sums=('c56f2b2b2ccd948ee6a65d1c2908103e' 'SKIP')
options=(!strip)

build(){
	cd "$srcdir/$pkgname-$pkgver"
	./configure --prefix=/usr
	make
}

check() {
	cd "$srcdir/$pkgname-$pkgver"
	make check
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR=$pkgdir install
}
