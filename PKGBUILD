# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=libtorrent-rasterbar-1_1-git
pkgver=1.1.7.r16.gdc28c9655
pkgrel=1
pkgdesc="A feature complete C++ bittorrent library (git branch RC_1_1)"
arch=('i686' 'x86_64')
url="https://www.libtorrent.org/"
license=('BSD')
depends=('boost-libs')
makedepends=('git' 'boost' 'python' 'python2')
provides=('libtorrent-rasterbar')
conflicts=('libtorrent-rasterbar')
options=('staticlibs' '!strip')
source=('git+https://github.com/arvidn/libtorrent.git#branch=RC_1_1')
sha256sums=('SKIP')


pkgver() {
  cd "libtorrent"

  git describe --long --tags | sed 's/^[A-Za-z]*-//;s/\([^-]*-g\)/r\1/;s/[_-]/./g'
}

build() {
  cd "libtorrent"
  ./autotool.sh

  cd "$srcdir"
  mkdir -p "py2" "py3"
  _build 2
  _build 3
}

_build() (
  cd "py$1"

  # https://bugs.archlinux.org/task/50745
  _boost="boost_python"
  if [ $1 = "3" ]; then _boost="boost_python3"; fi

  # https://github.com/qbittorrent/qBittorrent/issues/5265#issuecomment-220007436
  CXXFLAGS="$CXXFLAGS -std=c++11" \
  PYTHON="/usr/bin/python$1" \
  ../libtorrent/configure \
    --prefix="/usr" \
    --with-libiconv \
    --enable-python-binding \
    --with-boost-python="$_boost"

  make
)

package() {
  make -C py2 DESTDIR="$pkgdir" install
  make -C py3 DESTDIR="$pkgdir" install
  install -Dm644 "libtorrent/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
