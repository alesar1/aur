# Maintainer: Florian Walsh

pkgname=cocoalib
pkgver=0.99712
pkgrel=2
pkgdesc="A C++ library for doing Computations in Commutative Algebra. Also includes the CoCoA-5 Interpreter."
arch=('i686' 'x86_64')
url="http://cocoa.dima.unige.it/"
license=('GPL')
depends=('gmp' 'boost-libs' 'readline')
makedepends=('frobby' 'boost')
source=("http://cocoa.dima.unige.it/cocoalib/tgz/CoCoALib-$pkgver.tgz" "cocoa5")
sha256sums=('eff4432565d0be2ac2e7c7ace7f404dba370eb7d3d71e321bcb8b439489d11d3'
            'e9cc79cb1e35f28399afe8c2fd8f521da7566a996363e9789ed76d55093511b3')

build() {
  cd "$srcdir/CoCoALib-$pkgver"
  ./configure --with-libfrobby='/usr/lib/libfrobby.a'
  make -s CXXFLAGS='-Wno-deprecated-declarations -fPIC' library
  cd src/CoCoA-5
  make -s CXXFLAGS='-Wno-deprecated-declarations -fPIC' cocoa5
}

package() {
  cd "$srcdir/CoCoALib-$pkgver"
  install -d "$pkgdir/usr/include/CoCoA"
  for file in include/CoCoA/*.H; do
      install "$file" "$pkgdir/usr/$file"
  done
  install -d "$pkgdir/usr/lib"
  install -m 644 lib/libcocoa.a "$pkgdir/usr/lib/libcocoa.a"
  install -d "$pkgdir/usr/lib/CoCoA/bin"
  install src/CoCoA-5/CoCoAInterpreter "$pkgdir/usr/lib/CoCoA/bin/CoCoAInterpreter"
  install -d "$pkgdir/usr/lib/CoCoA/packages"
  for file in src/CoCoA-5/packages/*; do
      install "$file" "$pkgdir/usr/lib/CoCoA/packages"
  done
  install -d "$pkgdir/usr/lib/CoCoA/CoCoAManual"
  install src/CoCoA-5/CoCoAManual/CoCoAHelp.xml "$pkgdir/usr/lib/CoCoA/CoCoAManual/CoCoAHelp.xml"
  install -d "$pkgdir/usr/lib/CoCoA/examples"
  for file in examples/*; do
      install "$file" "$pkgdir/usr/lib/CoCoA/examples"
  done
  install -d "$pkgdir/usr/lib/CoCoA/doc"
  for file in doc/*.html; do
      install "$file" "$pkgdir/usr/lib/CoCoA/doc"
  done
  install -d "$pkgdir/usr/lib/CoCoA/doc/html"
  for file in doc/html/*.html; do
      install "$file" "$pkgdir/usr/lib/CoCoA/doc/html"
  done
  install "doc/CoCoALib.pdf" "$pkgdir/usr/lib/CoCoA/doc"
  install "doc/COPYING" "$pkgdir/usr/lib/CoCoA/doc"
  install "COPYING-GPLv3" "$pkgdir/usr/lib/CoCoA"
  install -d "$pkgdir/usr/bin"
  install ../cocoa5 "$pkgdir/usr/bin/cocoa5"
}
