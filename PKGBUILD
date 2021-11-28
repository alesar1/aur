# Maintainer: Will Gauvin <wgauvin@gmail.com>

pkgname=libindi-astromechfoc
pkgver=1.9.3
pkgrel=1
pkgdesc="3rd party drivers for INDI, support for Astromechanics Focuser T-Ring"
url="http://www.indilib.org/index.php?title=Main_Page"
license=(LGPL2.1)
arch=(i686 x86_64)
depends=(libindi=${pkgver})
makedepends=(cmake)
source=("https://github.com/indilib/indi-3rdparty/archive/v${pkgver}.tar.gz")
sha256sums=('4e71a8106fcdf6248486b18f04f4013332b0722b4942b90fbf01770d8037d3dc')

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
