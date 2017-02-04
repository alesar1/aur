# Maintainer: Marco Scarpetta <marcoscarpetta02@gmail.com>

pkgname=kube-develop
pkgver=r577.7c291e2
pkgrel=1
pkgdesc='A modern groupware client based on QtQuick and Sink (development branch)'
arch=('i686' 'x86_64')
url='https://kube.kde.org/'
license=('GPL')
depends=('sink-develop' 'messagelib' 'qgpgme')
makedepends=('extra-cmake-modules' 'git' 'clang')
conflicts=(kube)
provides=(kube)
source=("git://anongit.kde.org/kube.git#branch=develop")
sha256sums=('SKIP')

pkgver() {
  cd kube
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}"
  mkdir -p build
  cd "${srcdir}/kube"
}

build() { 
  cd "${srcdir}/build"
  QGpgme_DIR=/usr/lib/cmake/Gpgmepp/ cmake "${srcdir}/kube" \
    -DENABLE_TESTING=OFF \
    -DCMAKE_C_COMPILER=/usr/bin/clang \
    -DCMAKE_CXX_COMPILER=/usr/bin/clang++ \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="$pkgdir" install
}
