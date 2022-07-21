pkgname=coin-or-ipopt
pkgver=3.14.9
pkgrel=1
pkgdesc="Interior Point OPTimizer"
arch=('x86_64')
url="https://github.com/coin-or/Ipopt"
license=('EPL')
groups=('coin-or')
depends=('lapack' 'coin-or-asl' 'coin-or-coinmumps')
source=("https://github.com/coin-or/Ipopt/archive/releases/${pkgver}.tar.gz")
sha256sums=('e12eba451269ec30f4cf6e2acb8b35399f0d029c97dff10465416f5739c8cf7a')

build() {
  cd "$srcdir"
  mkdir -p build && pushd build
  "$srcdir/Ipopt-releases-$pkgver/./configure" --prefix=/usr --without-hsl --disable-java
  make
}

check() {
  cd "$srcdir/build"
  make test
}

package() {
  cd "$srcdir/build"
  PKG_CONFIG_LIBDIR="${pkgdir}/usr/lib/pkgconfig/" \
  make DESTDIR="$pkgdir" install
  # for compatibility
  install -d "$pkgdir/usr/include/coin"
  install -m644 "$pkgdir"/usr/include/coin-or/* "$pkgdir"/usr/include/coin
}
