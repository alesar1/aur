# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=teximpatient  
pkgver=2.4
pkgrel=1
pkgdesc="TeX for the Impatient is a ~350 page book on TeX, plain TeX, and Eplain, written by Paul Abrahams, Kathryn Hargreaves, and Karl Berry. "
url="http://savannah.gnu.org/projects/teximpatient/"
arch=('any')
license=('FDL1.3')
makedepends=('texlive-core' 'icon')
source=("http://mirror.netcologne.de/gnu/$pkgname/$pkgname-$pkgver.tar.gz")
sha512sums=('bd584b65b7cd799c396fb27dc40fbb69e02fa5ae74ff207895ba9b51af02166f24586aa52acaf3086316ec08d2b2a07dfcc1fd874d1ef1b2a1ca545c526bd630')

build() {
  cd $srcdir/
  touch install.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd $srcdir/
  make DESTDIR=$pkgdir install  
}
