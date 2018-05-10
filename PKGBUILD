# Maintainer: James Spencer <james.s.spencer@gmail.com>

pkgname=atompaw
pkgver=4.1.0.1
pkgrel=1
pkgdesc="Tool to generate projector and basis functions needed for performing electronic structure calculations based on the projector augmented wave (PAW) method."
arch=('i686' 'x86_64')
url="http://users.wfu.edu/natalie/papers/pwpaw/man.html"
license=('GPL')
depends=('lapack' 'libxc')
optdepends=('csh: analysis scripts')
makedepends=('gcc-fortran')
source=(http://users.wfu.edu/natalie/papers/pwpaw/$pkgname-$pkgver.tar.gz)
sha1sums=('9fad616c8b83c7ad9056912ec436d9c1d8a98ff1')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr --enable-libxc
  make -j1
}

package() {

  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install

}
