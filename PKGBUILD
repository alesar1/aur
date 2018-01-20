# Maintainer: David Baum <david.baum@naraesk.eu>
pkgname=plasma5-applets-docker
pkgver=1.1.1
pkgrel=1
pkgdesc="Start and stop docker images"
arch=('i686' 'x86_64')
url="https://github.com/naraesk/plasma-docker"
license=('GPL3')
groups=()
depends=('docker')
makedepends=('cmake' 'extra-cmake-modules' 'ki18n' 'qt5-base' 'qt5-declarative')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=()
changelog=()
source=('https://github.com/naraesk/plasma-docker/archive/v1.1.1.tar.gz')
noextract=()
md5sums=('6865ee415f6d9caff9276bb303e06b01')

prepare() {
  cd plasma-docker-${pkgver}
  mkdir -p build
}

build() {
  cd plasma-docker-${pkgver}/build
  export QT_SELECT=5
  cmake ../ \
    -DCMAKE_INSTALL_PREFIX=`kf5-config --prefix` \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DCMAKE_BUILD_TYPE=Release
  make
}

package() {
  cd plasma-docker-${pkgver}/build
  make DESTDIR="${pkgdir}" install
}
