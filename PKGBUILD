# Maintainer: justforlxz <justforlxz@gmail.com>

pkgname=dtkcommon-git
pkgver=5.5.2.r0.g3d8ba1c
pkgrel=1
pkgdesc='DTK common modules'
arch=('x86_64')
url="https://github.com/linuxdeepin/dtkcommon"
license=('LGPL3')
depends=()
makedepends=('git' 'qt5-tools' 'gtest')
groups=('deepin-git')
source=("$pkgname::git://github.com/linuxdeepin/dtkcommon.git")
sha512sums=('SKIP')

pkgver() {
    cd $pkgname
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $pkgname
  qmake-qt5 PREFIX=/usr DTK_VERSION=$pkgver LIB_INSTALL_DIR=/usr/lib
  make
}

package() {
  cd $pkgname
  make INSTALL_ROOT="$pkgdir" install
}
