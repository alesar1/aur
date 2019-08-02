# Maintainer: Mort Yao <soi@mort.ninja>

pkgname=mlkit
pkgver=4.4.3
pkgrel=1
pkgdesc='Standard ML Compiler and Toolkit'
url='http://www.elsman.com/mlkit/'
license=('GPL2')
arch=('i686' 'x86_64')
depends=('gmp')
makedepends=('mlton>=20170725')
source=("https://github.com/melsman/mlkit/archive/$pkgname-$pkgver.tar.gz"
        Makefiledefault)
md5sums=('65b4745ad5ed94d142405d5d0ccce140'
         '4aaf5cf417bfa1b816a14585199ec393')

prepare() {
  cp Makefiledefault "mlkit-$pkgname-$pkgver"
}

build() {
  cd "$pkgname-$pkgname-$pkgver"
  ./autobuild
  ./configure --sysconfdir=/etc --prefix=/usr
  make mlkit
  make mlkit_libs
}

package() {
  cd "$pkgname-$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}
