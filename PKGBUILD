# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
pkgname=wxmaxima-git
pkgver=r4660.21b098ff
pkgrel=1
pkgdesc="A document based interface for the computer algebra system Maxima."
arch=('i686' 'x86_64')
url="http://andrejv.github.io/wxmaxima/index.html"
license=('GPL2')
depends=('maxima' 'wxgtk')
makedepends=('git' 'texi2html')
conflicts=('wxmaxima')
provides=('wxmaxima')
source=("git+https://github.com/andrejv/wxmaxima.git")
sha256sums=('SKIP')
options=('!makeflags')

pkgver() {
  cd "$srcdir/wxmaxima"
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/wxmaxima"
  export WX_CONFIG_PATH=/usr/bin/wx-config
  export CXXFLAGS+=" -fno-delete-null-pointer-checks"
  LANG=C
  ./bootstrap
  ./configure --with-wx-config=/usr/bin/wx-config --prefix=/usr
  make
  make allmo
}

package() {
  cd "$srcdir/wxmaxima"
  make DESTDIR="$pkgdir" install
}
