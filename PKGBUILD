pkgname=kdstatemachineeditor
pkgver=1.2.7
pkgrel=1
arch=(any)
pkgdesc=""
license=("LGPL2.1")
depends=('qt5-declarative' 'qt5-remoteobjects' 'qt5-scxml' 'graphviz')
makedepends=('cmake' 'doxygen' 'qt5-tools')
url="https://github.com/KDAB/KDStateMachineEditor/"
source=("https://github.com/KDAB/KDStateMachineEditor/archive/v${pkgver}.tar.gz")
sha256sums=('8b2ae1775201b1f97cd332f5aec23ed5bb943531c6583690c4130ff517f75b2c')

prepare() {
  mkdir -p build
}

build() {
    cd build
    cmake \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DCMAKE_INSTALL_LIBDIR=lib \
      -DBUILD_TESTING=OFF \
      ../KDStateMachineEditor-${pkgver}
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install
}
