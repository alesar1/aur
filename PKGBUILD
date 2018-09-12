# Maintainer: Jerome Leclanche <jerome@leclan.ch>
# Co-Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

_pkgname=screengrab
pkgname=$_pkgname-git
pkgver=1.99.11.g64176b5
pkgrel=3
pkgdesc="Crossplatform tool for grabbing screenshots of your desktop."
arch=("i686" "x86_64")
url="https://github.com/lxqt/screengrab"
license=("GPL2")
depends=("qt5-base" "qt5-x11extras" "kwindowsystem" "libqtxdg-git" "libx11" "libxcb" "hicolor-icon-theme")
makedepends=("git" "cmake" "qt5-tools")
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("git+https://github.com/lxqt/$_pkgname")
sha256sums=('SKIP')


pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --always | sed "s/-/./g"
}

build() {
  mkdir -p build
  cd build
  cmake "$srcdir/$_pkgname" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib
  make
}

package() {
  cd build
  make install DESTDIR="$pkgdir"
}
