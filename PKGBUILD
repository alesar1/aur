# Maintainer: Andrea Scarpino <andrea@archlinux.org>

pkgname=kauth-git
pkgver=v4.100.0.rc1.r293.ge6877df
pkgrel=1
pkgdesc='KAuth'
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/frameworks/kauth'
license=('LGPL')
depends=('kcoreaddons-git' 'polkit-qt5')
makedepends=('extra-cmake-modules-git' 'git' 'qt5-tools')
groups=('kf5')
conflicts=(kauth)
provides=(kauth)
source=('git://anongit.kde.org/kauth.git')
md5sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../kauth \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_LIBEXECDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
