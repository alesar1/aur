# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

# Modified from aur/fcitx5-chinese-addons-git. Original maintainers:
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: csslayer <wengxt AT gmail com>

_pkgname=fcitx5-chewing
pkgname=$_pkgname-git
pkgver=5.0.2.r10.gb2d3dae
pkgrel=2
pkgdesc="Fcitx5 addon for Chewing"
arch=('i686' 'x86_64')
url="https://gitlab.com/fcitx/fcitx5-chewing"
license=('GPL')
depends=('libchewing-git' 'fcitx5' 'hicolor-icon-theme')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname" 'fcitx-chewing')
makedepends=('extra-cmake-modules' 'git')
source=("git+https://github.com/fcitx/fcitx5-chewing.git")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build(){
  cd $_pkgname

  cmake -B build -S . \
      -DCMAKE_INSTALL_PREFIX=/usr

  make -C build
}

package() {
  cd $_pkgname/build
  make DESTDIR="$pkgdir" install
}
