# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: James An <james@jamesan.ca>

_pkgname=darling-dmg
pkgname=$_pkgname-git
pkgver=1.0.4.r73.g97a92a6
pkgrel=2
epoch=1
pkgdesc="FUSE module for .dmg files (containing an HFS+ filesystem)"
arch=('i686' 'x86_64')
license=('GPL3')
url='https://www.darlinghq.org'
depends=('bzip2' 'fuse' 'icu' 'libxml2' 'openssl' 'zlib')
# boost is used only in check() but the build step requires it to build a test executable
makedepends=('cmake' 'git' 'boost')
source=("git+https://github.com/darlinghq/darling-dmg")
sha256sums=('SKIP')
conflicts=('darling-git' "$_pkgname")
provides=("$_pkgname=$pkgver")

pkgver() {
  cd $_pkgname
  ( set -o pipefail
    git describe --long --tag 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
  )
}

prepare() {
  cd $_pkgname
  mkdir -p build
}

build() {
  cd $_pkgname/build

  cmake \
    -DCMAKE_INSTALL_PREFIX:PATH=/usr \
    -DWITH_TESTS=1 \
    ..

  make
}

check() {
  cd $_pkgname/build

  make test
}

package() {
  cd $_pkgname/build

  make DESTDIR="$pkgdir" install
}
