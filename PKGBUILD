# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=libtorrent-rasterbar-1_1-git
pkgver=1.1.13.r0.g6f1250c65
pkgrel=1
pkgdesc="A feature complete C++ bittorrent library (git branch RC_1_1)"
arch=('i686' 'x86_64')
url="https://www.libtorrent.org/"
license=('BSD')
depends=('boost-libs')
makedepends=('git' 'boost' 'cmake' 'python' 'python-setuptools')
provides=('libtorrent-rasterbar')
conflicts=('libtorrent-rasterbar')
options=('!strip')
source=('git+https://github.com/arvidn/libtorrent.git#branch=RC_1_1')
sha256sums=('SKIP')


pkgver() {
  cd "libtorrent"

  git describe --long --tags | sed 's/^[A-Za-z]*[-_]//;s/\([^-]*-g\)/r\1/;s/[_-]/./g'
}

build() {
  cd "libtorrent"

  mkdir -p "_build" && cd "_build"
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib" \
    -Dpython-bindings=ON \
    -DPYTHON_EXECUTABLE="/usr/bin/python3" \
    "../"
  make
}

package() {
  cd "libtorrent"

  make -C "_build" DESTDIR="$pkgdir" install
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/libtorrent-rasterbar/LICENSE"
}
