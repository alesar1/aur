# Maintainer: João Figueiredo <jf dot mundox at gmail dot com>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Henri Chain <henri@henricha.in>

_pkgname=kdecoration
pkgname=$_pkgname-git
pkgver=v5.19.90.r1.g46b7027
pkgrel=1
pkgdesc='Plugin based library to create window decorations (Git)'
arch=(i686 x86_64)
url='https://www.kde.org/workspaces/plasmadesktop/'
license=(LGPL3.0)
depends=(ki18n)
makedepends=(extra-cmake-modules git)
conflicts=(kdecoration)
provides=(kdecoration)
groups=(plasma)
source=('git+https://github.com/KDE/kdecoration.git')
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
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd $srcdir/$_pkgname/build
  make DESTDIR="$pkgdir" install
  install -Dm644 ../LICENSES/* -t "$pkgdir/usr/share/licenses/$_pkgname/"
}
