# Maintainer: Andrea Scarpino <andrea@archlinux.org>

pkgname=kcoreaddons-git
pkgver=v5.58.0.rc2.r133.gb8a4402
pkgrel=1
pkgdesc='KCoreAddons'
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/frameworks/kcoreaddons'
license=('LGPL')
depends=('qt5-base' 'shared-mime-info' 'gamin')
makedepends=('extra-cmake-modules-git' 'git' 'qt5-tools')
groups=('kf5')
conflicts=(kcoreaddons)
provides=(kcoreaddons)
install=kcoreaddons.install
source=('git://anongit.kde.org/kcoreaddons.git')
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
  cmake ../kcoreaddons \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_LIBDIR=lib \
    -D_KDE4_DEFAULT_HOME_POSTFIX=4 \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
