# Maintainer:
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_pkgname=kactivities
pkgname=$_pkgname-git
pkgver=v5.70.0.r5.g82a8883
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="Core components for the KDE's Activities"
url='https://community.kde.org/Frameworks'
license=(LGPL)
depends=(kcoreaddons kconfig kwindowsystem)
makedepends=(extra-cmake-modules boost doxygen git qt5-tools qt5-doc qt5-declarative)
optdepends=('qt5-declarative: QML bindings')
groups=(kf5)
provides=('kactivities' 'kactivities-frameworks')
conflicts=('kactivities')
source=("git+https://github.com/KDE/kactivities.git")
sha256sums=('SKIP')

pkgver() {
  cd $srcdir/$_pkgname
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd $srcdir/$_pkgname
  mkdir -p build
}

build() {
  cd $srcdir/$_pkgname/build
  cmake ../ \
    -DBUILD_TESTING=OFF \
    -DBUILD_QCH=ON
  make
}

package() {
  cd $srcdir/$_pkgname/build
  make DESTDIR="$pkgdir" install
  install -Dm644 ../COPYING.LIB "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
