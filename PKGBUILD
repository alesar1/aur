# Maintainer: justforlxz <justforlxz@gmail.com>

pkgname=dtkcommon-git
_pkgname=dtkcommon
_commit=b7830a3221c99cc7715675ecfaed2a04388f8af6
pkgver=5.5.23.r18.gb7830a3
pkgrel=1
pkgdesc='DTK common modules'
arch=('x86_64' 'aarch64')
url="https://github.com/linuxdeepin/dtkcommon"
license=('LGPL3')
depends=()
makedepends=('git' 'qt5-tools' 'gtest' 'gmock' 'cmake' 'ninja')
conflicts=('dtkcommon')
providers=('dtkcommon')
groups=('deepin-git')
source=("$_pkgname.tar.gz::https://github.com/linuxdeepin/dtkcommon/archive/$_commit.tar.gz")
sha512sums=('ea89005ac7de534a7d63dce9dda00aa485cdae3e337997cea01a8b624aad3c6f0676a8bc1127dbfc251fee4b6363deb10a3bb4b36366420aee8be97d2b34f17d')

build() {
  cd $_pkgname-$_commit
  cmake -GNinja \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DLINUXNAME="archlinux" \
    -DCMAKE_INSTALL_PREFIX=/usr
  ninja
}

package() {
  cd $_pkgname-$_commit
  DESTDIR="$pkgdir" ninja install
}
