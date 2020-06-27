# Maintainer: João Figueiredo <jf dot mundox at gmail dot com>
# Contributor: farseerfc <farseerfc@archlinuxcn.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>

pkgname=kwalletmanager-git
pkgver=r1111.c3d198c
pkgrel=1
pkgdesc='Wallet management tool'
arch=(i686 x86_64)
url='http://www.kde.org/applications/system/kwalletmanager/'
license=(LGPL)
depends=(kdelibs4support hicolor-icon-theme)
makedepends=(extra-cmake-modules git python kdoctools)
conflicts=(kwalletmanager kdeutils-kwalletmanager)
provides=(kwalletmanager)
source=('git+https://github.com/KDE/kwalletmanager.git')
install=$pkgname.install
md5sums=('SKIP')

pkgver() {
  cd kwalletmanager
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../kwalletmanager \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
