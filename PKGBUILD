# Maintainer: Erick Gallesio <eg at unice dot fr>
# Contributor: Jorge Silva <j0rj@posteo.net>

pkgname=stklos
pkgver=1.40
pkgrel=1
pkgdesc="Free R5RS/R7RS Scheme system."
arch=('i686' 'x86_64')
url="http://www.stklos.net"
license=('GPL')
depends=('readline' 'gmp' 'pcre' 'libffi' 'gc')
source=("http://www.stklos.net/download/$pkgname-$pkgver.tar.gz")
md5sums=('f29dc35b373223f2aacc414254935952')

build() {
  cd "$pkgname-$pkgver"
  ./configure --prefix=/usr \
              --enable-threads=pthreads
  make
}

check() {
  cd "$pkgname-$pkgver"
  make -k check
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}
