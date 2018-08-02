# Maintainer: Graham Edgecombe <gpe@grahamedgecombe.com>
pkgname=nextpnr-git
pkgver=r1185.1c1fd99
pkgrel=1
pkgdesc='Portable FPGA place and route tool'
arch=('i686' 'x86_64')
url='https://github.com/YosysHQ/nextpnr'
license=('ISC')
depends=('boost-libs' 'python' 'qt5-base')
makedepends=('boost' 'cmake' 'git' 'icestorm')
provides=('nextpnr')
conflicts=('nextpnr')
source=('nextpnr::git+https://github.com/YosysHQ/nextpnr.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/nextpnr"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/nextpnr"

  mkdir -p build
  cd build

  cmake \
    -DARCH=generic\;ice40 \
    -DICEBOX_ROOT=/usr/share/icebox \
    -DBUILD_TESTS=ON \
    -DCMAKE_BUILD_TYPE=RelWithDebInfo \
    -DCMAKE_INSTALL_PREFIX=/usr \
    ..
  make
}

check() {
  cd "$srcdir/nextpnr/build"
  make test
}

package() {
  cd "$srcdir/nextpnr/build"
  make DESTDIR="$pkgdir" install
  install -Dm644 ../COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
