# Maintainer: Jerome Leclanche <jerome@leclan.ch>
# Co-Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

_pkgname=qtermwidget
pkgname=$_pkgname-git
pkgver=0.9.0.65.g6d1be93
pkgrel=2
pkgdesc="A terminal widget for Qt"
arch=("i686" "x86_64")
url="https://github.com/lxqt/qtermwidget"
license=("GPL2")
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
depends=(qt5-base)
makedepends=(git cmake lxqt-build-tools-git qt5-tools python-pyqt5 python-sip sip)
source=("git+https://github.com/lxqt/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --always | sed "s/-/./g"
}

build() {
  mkdir -p build
  cd build
  cmake "$srcdir/$_pkgname" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DQTERMWIDGET_BUILD_PYTHON_BINDING=ON
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
