# Maintainer: João Figueiredo <jf dot mundox at gmail dot com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=kcrash-git
pkgver=v5.71.0.r7.g4008e6a
pkgrel=2
pkgdesc='KCrash'
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/frameworks/kcrash'
license=('LGPL')
depends=('kcoreaddons-git' 'kwindowsystem-git')
makedepends=('extra-cmake-modules-git' 'git')
conflicts=(kcrash)
provides=(kcrash)
source=('git+https://github.com/KDE/kcrash.git')
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
  cmake ../kcrash \
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
