pkgname=coin-or-bonmin
pkgver=1.8.7
pkgrel=1
pkgdesc="Experimental open-source C++ code for solving general MINLP problems"
arch=('i686' 'x86_64')
url="https://projects.coin-or.org/Bonmin"
license=('EPL')
groups=('coin-or')
depends=('coin-or-cbc' 'coin-or-ipopt' 'coin-or-bcp')
makedepends=()
source=("https://www.coin-or.org/download/source/Bonmin/Bonmin-$pkgver.tgz")
sha256sums=('3e5bcb57f2a7995ce4fd9c76c033050e487ea375ecf0e277dabc22159c8cfb31')

build() {
  cd "$srcdir/Bonmin-$pkgver"
  COIN_SKIP_PROJECTS="Sample" \
  CXXFLAGS="${CXXFLAGS} -I/usr/include/coin" \
  ./configure --prefix=/usr \
              --with-osi-lib="$(pkg-config --libs osi)" \
              --with-osi-incdir="/usr/include/coin/" \
              --with-clp-lib="$(pkg-config --libs clp)" \
              --with-clp-incdir="/usr/include/coin/" \
              --with-cgl-lib="$(pkg-config --libs cgl)" \
              --with-cgl-incdir="/usr/include/coin/" \
              --with-vol-lib="$(pkg-config --libs vol)" \
              --with-vol-incdir="/usr/include/coin/" \
              --with-coinutils-lib="$(pkg-config --libs coinutils)" \
              --with-coinutils-incdir="/usr/include/coin/" \
              --with-bcp-lib="$(pkg-config --libs bcp)" \
              --with-bcp-incdir="/usr/include/coin/" \
              --with-cbc-lib="$(pkg-config --libs cbc)" \
              --with-cbc-incdir="/usr/include/coin/" \
              --with-ipopt-lib="$(pkg-config --libs ipopt)" \
              --with-ipopt-incdir="/usr/include/coin/"
  make
}

package() {
  cd "$srcdir/Bonmin-$pkgver"
  PKG_CONFIG_LIBDIR="${pkgdir}/usr/lib/pkgconfig/" \
  make DESTDIR="$pkgdir/" install
}

