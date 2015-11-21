# Maintainer: Peter Mattern <pmattern at arcor dot de>

_pkgname=qlipper
pkgname=$_pkgname-git
pkgver=2.0.2.23.g4d52f94
pkgrel=1
pkgdesc='Cross-platform clipboard history applet'
arch=('i686' 'x86_64')
url='https://github.com/pvanek/qlipper'
license=('GPL2')
depends=('qt5-base' 'libxkbcommon-x11')
makedepends=('cmake' 'qt5-tools')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=('git+https://github.com/pvanek/qlipper.git')
sha256sums=("SKIP")

pkgver() {
  cd $_pkgname
  git describe --always | sed "s/-/./g"
}

build() {
  mkdir -p build ; cd build
  cmake $srcdir/$_pkgname -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd build
  make DESTDIR=$pkgdir install
}
