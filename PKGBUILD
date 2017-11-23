# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=gambit
pkgver=15.1.1
pkgrel=4
pkgdesc="Tools for doing computation in game theory - git version"
arch=('i686' 'x86_64')
url="http://www.gambit-project.org"
license=('GPL')
depends=('wxgtk')
makedepends=('git' 'gcc6' 'cython2')
source=("https://sourceforge.net/projects/$pkgname/files/gambit15/$pkgver/$pkgname-$pkgver.tar.gz" ludecomp.diff)
md5sums=('db47a02f66644806dbd43f77dc41ebeb'
         '4086c9c74892440e00c9be7f8ace4bce')
options=('!makeflags')

build() {
  cd "$pkgname-$pkgver"
  aclocal
  libtoolize
  automake --add-missing
  autoconf
  CXX=g++-6 CPP=cpp-6 ./configure --prefix=/usr --disable-enumpoly
  make
  cd src/python
  CC=gcc-6 python2 setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  cd src/python
  CC=gcc-6 python2 setup.py install --root="$pkgdir"
}
