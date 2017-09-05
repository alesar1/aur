# Contributor: Adrian Petrescu <apetresc@gmail.com>
# Maintainer: Adrian Petrescu <apetresc@gmail.com>

pkgname=benzene-mohex
pkgver=1.0.1
pkgrel=1
pkgdesc='Computer Hex engine by UAlberta. Winner of 2015 ICGA Olympiad.'
arch=('i686' 'x86_64')
url='http://benzene.sourceforge.net'
license=('GPL3')
depends=('boost-libs' 'db')
makedepends=('boost')
source=("https://github.com/apetresc/$pkgname/archive/v$pkgver.tar.gz"
        'https://github.com/apetresc/fuego/archive/v1.1.tar.gz')
md5sums=('517c202987706c6f3dd70dbf57fe67fa'
         '90a3e6c46f5a418f9fe5bdab46ca6b90')

build() {
  cd fuego-1.1/
  autoreconf -i
  ./configure
  make

  cd ../$pkgname-$pkgver/
  autoreconf -i
  ./configure --with-fuego-root=$(pwd)/../fuego-1.1/
  make
}

check() {
  cd $pkgname-$pkgver
  make check
}

package() {
  mkdir -p $pkgdir/usr/bin

  cp $srcdir/$pkgname-$pkgver/src/mohex/mohex $pkgdir/usr/bin/mohex
}

