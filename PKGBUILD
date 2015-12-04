# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=spectacle-git
pkgver=r142.8549eb4
pkgrel=1
pkgdesc='The new screenshot capture utility, replaces KSnapshot'
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/kde/kdegraphics/spectacle'
license=('LGPL')
depends=('kio' 'libkscreen' 'xcb-util-cursor' 'libkipi-git')
makedepends=('extra-cmake-modules' 'git')
conflicts=('spectacle' 'kscreengenie' 'kdegraphics-ksnapshot')
replaces=('kscreengenie' 'kdegraphics-ksnapshot')
provides=('spectacle')
install=${pkgname}.install
source=("spectacle::git://anongit.kde.org/spectacle.git")
md5sums=('SKIP')

pkgver() {
  cd spectacle
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../spectacle \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
}

package() {
  cd build
  make DESTDIR="${pkgdir}" install
}
