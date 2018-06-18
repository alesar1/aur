# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: James An <james@jamesan.ca>

_pkgname=darling-dmg
pkgname=$_pkgname-git
pkgver=1.0.4.r22.geca0aea
pkgrel=1
epoch=1
pkgdesc="FUSE module for .dmg files (containing an HFS+ filesystem)"
arch=('i686' 'x86_64')
license=('GPL3')
url='https://www.darlinghq.org'
depends=('bzip2' 'fuse' 'icu' 'libxml2' 'openssl' 'zlib')
# boost is used only in check() but the build step requires it to build a test executable
makedepends=('cmake' 'git' 'boost')
source=("git+https://github.com/darlinghq/darling-dmg"
        issue51.patch)
sha256sums=('SKIP'
            'ef77322fc0e4792f0ba5ff3f1aa67ca2078a02e502777c2483816f55fc255277')
conflicts=('darling-git' "$_pkgname")
provides=("$_pkgname=$pkgver")

pkgver() {
  cd "$srcdir/$_pkgname"
  ( set -o pipefail
    git describe --long --tag 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
    cd "$srcdir/$_pkgname"

    patch -Np1 -i ../issue51.patch
}

build() {
    cd "$srcdir/$_pkgname"
    mkdir -p build && cd build

    cmake -DWITH_TESTS=1 -DCMAKE_INSTALL_PREFIX:PATH=/usr ..

    make
}

check() {
    cd "$srcdir/$_pkgname/build"

    make test
}

package() {
    cd "$srcdir/$_pkgname/build"

    make DESTDIR="$pkgdir" install
}

