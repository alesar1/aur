# Maintainer: Jiachen YANG <farseerfc@archlinux.org>
# Contributor: csslayer <wengxt AT gmail com>

_pkgname=fcitx5-lua
pkgname="$_pkgname-git"
pkgver=r22.58c249f
pkgrel=1
pkgdesc="Lua support for fcitx5, with an imeapi addon implementing googlepinyin api"
arch=('i686' 'x86_64')
url="https://github.com/fcitx/$_pkgname"
license=('LGPL')
depends=('boost-libs' 'curl' 'fcitx5-git' 'gettext' 'lua')
makedepends=('boost' 'extra-cmake-modules' 'git')
conflicts=("$_pkgname")
provides=("$_pkgname")
source=("git+$url.git")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build(){
  cd $_pkgname

  mkdir build && cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_LIBDIR=/usr/lib ..
  make
}

package() {
  cd $_pkgname
  cd build
  make DESTDIR="$pkgdir" install
}
