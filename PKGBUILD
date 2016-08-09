# Maintainer: kikadf <kikadf.01@gmail.com>

pkgname=plasma5-applets-volumewin7mixer
pkgver=11
pkgrel=2
pkgdesc="A fork of the default volume plasmoid with a Windows 7 theme (vertical sliders)"
arch=('any')
url="https://github.com/Zren/plasma-applets/tree/master/org.kde.plasma.volumewin7mixer"
license=(GPL)
depends=('plasma-workspace' 'qt5-declarative')
makedepends=('extra-cmake-modules')
source=(https://github.com/Zren/plasma-applets/archive/volumewin7mixer-$pkgver.tar.gz
        https://raw.githubusercontent.com/kikadf/patches/master/plasma5-applets-volumewin7mixer/Add_CMakeLists.patch)
md5sums=('522d616869ae20e4f6df955a85b23e2a'
         '78e377c969441382dd6d931688f43cbe')

prepare() {
  cd plasma-applets-volumewin7mixer-$pkgver/org.kde.plasma.volumewin7mixer
  patch -p2 -i "${srcdir}"/Add_CMakeLists.patch
  rm -f build
  mkdir -p build
}

build() {
  cd plasma-applets-volumewin7mixer-$pkgver/org.kde.plasma.volumewin7mixer/build
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
}

package() {
  cd plasma-applets-volumewin7mixer-$pkgver/org.kde.plasma.volumewin7mixer/build
  make DESTDIR="$pkgdir" install
}
