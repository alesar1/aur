# Maintainer: Alexander Minges <alexander.minges@gmail.com>
pkgname=libccp4
pkgver=6.5.1
pkgrel=5
pkgdesc="Protein X-ray crystallography toolkit - Libraries"
arch=('i686' 'x86_64')
url="http://www.ccp4.ac.uk/"
license=('GPL')
depends=('mmdb2')
makedepends=('gcc-fortran')
conflicts=('libccp4-bzr')
source=(ftp://ftp.ccp4.ac.uk/opensource/$pkgname-$pkgver.tar.gz)

sha256sums=('280b473d950cdf8837ef66147ec581104298b892399bd856f13b096f2395dbe5')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  
  ./configure --prefix=/usr --enable-shared --datadir=/usr/share/ccp4 --disable-static
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"  

  make DESTDIR="$pkgdir/" install
} 
