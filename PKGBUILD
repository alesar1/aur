_phpbase=72
pkgname=php72-igbinary
_pkgname=igbinary
pkgver=3.2.6
pkgrel=1
pkgdesc="php72 extension igbinary"
url="http://pecl.php.net/package/igbinary"
arch=('x86_64')
license=('PHP')
makedepends=("php${_phpbase}")
depends=("php${_phpbase}")
backup=("etc/php${_phpbase}/conf.d/igbinary.ini")
source=("http://pecl.php.net/get/igbinary-${pkgver}.tgz")
md5sums=('6970abb34217faff470767c2b84ea2da')

build() {
  cd "$srcdir/igbinary-$pkgver"
  phpize${_phpbase}
  ./configure --prefix=/usr CFLAGS="-O2 -g" --enable-igbinary
  make
}

check() {
  cd "$srcdir/igbinary-$pkgver"
  NO_INTERACTION=1 make test
}

package() {
  cd "$srcdir/igbinary-$pkgver"
  make INSTALL_ROOT="$pkgdir" install  
  install -D -m0644 \
    "${srcdir}/${_pkgname}-${pkgver}/igbinary.php.ini" \
    "${pkgdir}/etc/php72/conf.d/igbinary.ini"
  install -D -m0644 \
    "${srcdir}/${_pkgname}-${pkgver}/COPYING" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"  
}
