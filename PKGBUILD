# Maintainer:
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>

_pkgname=krunner
pkgname=$_pkgname-git
pkgver=r432.7c36535
pkgrel=1
pkgdesc='Framework for providing different actions given a string query'
arch=('i686' 'x86_64')
url='https://community.kde.org/Frameworks'
license=('LGPL')
groups=(kf5)
depends=(plasma-framework threadweaver)
makedepends=(extra-cmake-modules kdoctools doxygen git qt5-tools qt5-doc)
conflicts=("$_pkgname")
provides=("$_pkgname")
source=('git+https://github.com/KDE/krunner.git')
sha256sums=('SKIP')

pkgver() {
  cd $srcdir/$_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
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
