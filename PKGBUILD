# Author: Roman Gilg <subdiff@gmail.com>

pkgname=disman-kwinft
pkgver=5.21.0
_pkgver=0.521.0-beta.0
pkgrel=1
pkgdesc='Qt/C++ display management library'
arch=(x86_64)
url="https://gitlab.com/kwinft/disman"
license=(LGPL)
depends=(qt5-x11extras libxrandr plasma-framework wrapland)
provides=("disman")
conflicts=("disman")
makedepends=(extra-cmake-modules)
source=("https://gitlab.com/kwinft/disman/-/archive/disman@$_pkgver/disman-disman@$_pkgver.tar.gz")
md5sums=('0db4de79e01a060dcf8859494bab17c6')

prepare() {
  tar -xvf disman-disman@$_pkgver.tar.gz
  mkdir -p "$srcdir"/build/make
}
  
build() {
  cd "$srcdir"/build
  cmake "$srcdir/disman-disman@$_pkgver" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DCMAKE_INSTALL_LIBEXECDIR=lib \
    -DCMAKE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd "$srcdir"/build
  make DESTDIR="$pkgdir" install
}
