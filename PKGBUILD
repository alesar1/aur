# Maintainer: Jiachen Yang <farseerfc@archlinux.org>
# Co-Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: poplarch <poplarch@gmail.com>

_pkgname=fcitx5-configtool
pkgname=$_pkgname-git
pkgver=r332.734741d
pkgrel=4
pkgdesc="Config tools for Fcitx5, nightly build from git"
arch=('i686' 'x86_64')
url="https://github.com/fcitx/fcitx5-configtool"
license=('GPL')
depends=('fcitx5-qt5-git' 'kconfigwidgets' 'kitemviews' 'kirigami2' 'kpackage')
makedepends=('extra-cmake-modules' 'python' 'git' 'kcmutils')
conflicts=("$_pkgname" "fcitx5-config-qt" "kbd-layout-viewer5")
provides=("$_pkgname" "fcitx5-config-qt" "kbd-layout-viewer5")
replaces=("kcm-fcitx5-git" "kbd-layout-viewer5-git<=r332.734741d-2" "fcitx5-config-qt-git<=r332.734741d-2")
source=("git+$url.git")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  mkdir build
  cd build

  cmake ../$_pkgname \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
  make
}

package() {
  conflicts=("$_pkgname")
  provides=("$_pkgname")

  cd build
  make DESTDIR="$pkgdir" install
}

