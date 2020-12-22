# Maintainer: Jiachen Yang <farseerfc@archlinux.org>
# Co-Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: poplarch <poplarch@gmail.com>

_pkgname=fcitx5-configtool
pkgname=$_pkgname-git
pkgver=5.0.1.r23.g1db244a
pkgrel=1
pkgdesc="Config tools for Fcitx5, nightly build from git"
arch=('i686' 'x86_64')
url="https://github.com/fcitx/fcitx5-configtool"
license=('GPL')
depends=('fcitx5-qt5-git' 'kconfigwidgets' 'kitemviews' 'qt5-x11extras')
makedepends=('extra-cmake-modules' 'python' 'git' 'kcmutils' 'kirigami2' 'kdeclarative')
conflicts=("$_pkgname" "fcitx5-config-qt" "kbd-layout-viewer5")
provides=("$_pkgname" "fcitx5-config-qt" "kbd-layout-viewer5")
optdepends=("kdeclarative: for KCM support"
            "kirigami2: for KCM support")
replaces=("kcm-fcitx5-git" "kbd-layout-viewer5-git<=r332.734741d-2" "fcitx5-config-qt-git<=r332.734741d-2")
source=("git+$url.git")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
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
  cd build
  make DESTDIR="$pkgdir" install
}

