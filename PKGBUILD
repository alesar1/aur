# Maintainer: Will Gauvin <wgauvin@gmail.com>

pkgname=libindi-astromechfoc
pkgver=1.9.2
pkgrel=2
pkgdesc="3rd party drivers for INDI, support for Astromechanics Focuser T-Ring"
url="http://www.indilib.org/index.php?title=Main_Page"
license=(LGPL2.1)
arch=(i686 x86_64)
depends=(libindi=${pkgver})
makedepends=(cmake)
source=("https://github.com/indilib/indi-3rdparty/archive/v${pkgver}.tar.gz")
sha256sums=('d582fa25a3b2b53f2a91be7881689951a616cbe8c87c71a392f714a0870cc473')

prepare() {
  mkdir -p build
  cd  indi-3rdparty-${pkgver}

  #set all to off by default
  sed -i -e '/option(WITH_.*On/s/ On)/ Off)/' CMakeLists.txt
}

build() {
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWITH_ASTROMECHFOC=On \
    ../indi-3rdparty-${pkgver}
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
