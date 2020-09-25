# Contributor: Alexander Matyukhin <matalex1991@gmail.com>
pkgname=obnc
pkgver=0.16.1
pkgrel=3
pkgdesc="Oberon compiler"
arch=('i686' 'x86_64' 'aarch64')
license=('GPL')
url="http://miasap.se/obnc/"
source=("http://miasap.se/obnc/downloads/obnc_${pkgver}.tar.gz")
depends=("gc" "sh" "awk" "sdl")
md5sums=('974245022410d7344134888c375a90fb')
sha256sums=('d90832e3d1cdb9a8a0b307e7c3d2c19e67dd6864dae273fa1b1cfa84025bacdd')
sha384sums=('9486d9620061adeb3f55f7d3e72f2635d16d603627c045a3a967a4dbad029f4f56b5e94d704e4fb4217165423a090433')
sha512sums=('428e6c5d7fe1f83fc8ef6b3828932b148a7f8f1dd5d5b7e61c1ed66fa3af921a4711bbf0a8ea62cbd6c8ba426f09df7cddf49161a1b6662c003aadb634e92531')
build() {
  cd $srcdir/$pkgname-$pkgver/
  pwd
  ./build --prefix=/usr
}

package() {
  cd $srcdir/$pkgname-$pkgver/
  ./install --destdir=$pkgdir
}

