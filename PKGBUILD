# Maintainer:
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Antonio Rojas <arojas@archlinux.org>

_pkgname=kmime
pkgname=$_pkgname-git
pkgver=r1335.c18e5dc
pkgrel=1
pkgdesc="Library for handling mail messages and newsgroup articles"
arch=(i686 x86_64)
url="https://kontact.kde.org"
license=(LGPL)
depends=(ki18n kcodecs)
makedepends=(extra-cmake-modules git)
conflicts=("$_pkgname")
provides=("$_pkgname")
source=("git+https://github.com/KDE/$_pkgname.git")
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
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd $srcdir/$_pkgname/build
  make DESTDIR="$pkgdir" install
  install -Dm644 ../COPYING.LIB "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
