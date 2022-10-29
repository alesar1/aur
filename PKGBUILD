# Maintainer: justforlxz <justforlxz@gmail.com>

pkgname=dtkcore-git
_pkgname=dtkcore
_commit=8ce7d3e3c733ada955a4fd53b4d71ef93e456f27
pkgver=5.6.2.r4.g8ce7d3e
pkgrel=1
pkgdesc='DTK core modules'
arch=('x86_64' 'aarch64')
url="https://github.com/linuxdeepin/dtkcore"
license=('LGPL3')
depends=('dconf' 'deepin-desktop-base-git' 'python' 'gsettings-qt' 'lshw')
makedepends=('git' 'qt5-tools' 'gtest' 'dtkcommon-git' 'cmake' 'ninja' 'doxygen')
conflicts=('dtkcore')
provides=('dtkcore')
groups=('deepin-git')
source=("$pkgname::git+https://github.com/linuxdeepin/dtkcore.git")
source=("$_pkgname.tar.gz::https://github.com/linuxdeepin/$_pkgname/archive/$_commit.tar.gz")
sha512sums=('ee352e5ae634e73511e495d1ce8177d9939f4d774d6e4cb5fadaf405dd5602bd99798ed603b466bce91fe0869e01f08558b65a43d1da9f6e8157237f638c14e6')

build() {
  cd $_pkgname-$_commit
  cmake -GNinja \
      -DMKSPECS_INSTALL_DIR=/usr/lib/qt/mkspecs/modules/\
      -DBUILD_DOCS=ON \
      -DBUILD_EXAMPLES=OFF \
      -DQCH_INSTALL_DESTINATION=/usr/share/doc/qt \
      -DCMAKE_INSTALL_LIBDIR=/usr/lib \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DCMAKE_BUILD_TYPE=Release
  ninja
}

package() {
  cd $_pkgname-$_commit
  DESTDIR="$pkgdir" ninja install
}
