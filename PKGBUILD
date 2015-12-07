# Maintainer: Albert Vaca Cintora <albertvaka@gmail.com>

pkgname=clazy-git
pkgver=r467.9064bfc
pkgrel=1
pkgdesc='Static C++ code checker'
arch=(i686 x86_64)
url='http://www.kdab.com/use-static-analysis-improve-performance/'
license=(GPL2)
depends=(clang llvm)
makedepends=(git cmake make gcc)
provides=(clazy)
conflicts=(clazy)
source=("git://anongit.kde.org/clazy.git")
sha256sums=('SKIP')

pkgver() {
  cd clazy
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../clazy \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_LIBDIR=lib
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
