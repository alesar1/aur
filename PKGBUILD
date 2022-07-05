# Maintainer: Marc-Olivier Barre <mobarre-archlinux@snarchi.io>
# Maintainer: Sebastian Baberowski <sebastian@baberowski.com>

pkgname=libindi-qsi
pkgver=1.9.6
pkgrel=1
pkgdesc="3rd party drivers for INDI, support for QSI cameras"
url="http://www.indilib.org/index.php?title=Main_Page"
license=(LGPL2.1)
arch=(i686 x86_64)
depends=(libindi=${pkgver} libasi=${pkgver})
makedepends=(cmake)
source=("https://github.com/indilib/indi-3rdparty/archive/v${pkgver}.tar.gz")
sha256sums=("2d2f45d54231b941f896df4069df84a339efb5b9b81f2e060422f29e1c900b84")

prepare() {
  mkdir -p build
  cd  indi-3rdparty-${pkgver}

  #set all to off by default
  sed -i -e '/option(WITH_.*On)$/s/ On)$/ Off)/' CMakeLists.txt
}

build() {
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWITH_QSI=On \
    ../indi-3rdparty-${pkgver}
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
