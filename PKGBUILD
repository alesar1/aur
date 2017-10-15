# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=lame-altivec
pkgver=3.100
pkgrel=1
pkgdesc="AltiVec/SSE optimized LAME encoder"
arch=('i686' 'x86_64')
url="http://tmkk.undo.jp/lame/index_e.html"
license=('GPL')
depends=('glibc' 'ncurses')
makedepends=('nasm')
provides=('lame')
conflicts=('lame')
options=('staticlibs')
source=("https://downloads.sourceforge.net/project/lame/lame/$pkgver/lame-$pkgver.tar.gz"
        "http://tmkk.undo.jp/lame/lame-3.100-sse-20171014.diff")
sha256sums=('ddfe36cab873794038ae2c1210557ad34857a4b6bdc515785d1da9e175b1da1e'
            '8c32c706f7fce0da8150a5fa0a4e7efadc77cc39e0375c05dc2737331a584662')


prepare() {
  cd "lame-$pkgver"

  patch -Np0 -i "$srcdir/lame-3.100-sse-20171014.diff"
}

build() {
  cd "lame-$pkgver"

  ./configure --prefix="/usr" --enable-nasm
  make
}

check() {
  cd "lame-$pkgver"

  #make test
}

package() {
  cd "lame-$pkgver"

  make DESTDIR="$pkgdir" install
}
