# Maintainer: Sebastian Baberowski <sebastian@baberowski.com>

pkgname=libindi-asi
pkgver=1.8.7
pkgrel=1
pkgdesc="3rd party drivers for INDI, support for ZWO devices: ASI cameras, EFW filter wheel, ASI ST4 port and ASI focuser"
url="http://www.indilib.org/index.php?title=Main_Page"
license=(LGPL2.1)
arch=(i686 x86_64)
depends=(libindi=${pkgver} libasi=${pkgver})
makedepends=(cmake)
source=("https://github.com/indilib/indi-3rdparty/archive/v${pkgver}.tar.gz")
sha256sums=('7571bbc087e0efa2df992c174fca9a7e87e6b2a0f0c6d99cdff01af6fe7e82de')

prepare() {
  mkdir -p build
  cd  indi-3rdparty-${pkgver}

  #set all to off by default
  sed -i -e '/option(WITH_.*On/s/ On/ Off/' CMakeLists.txt
}

build() {
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWITH_ASICAM=On \
    ../indi-3rdparty-${pkgver}
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
