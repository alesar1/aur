# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=aom-git
pkgver=0.1.0.r9222.g421ab870b3
pkgrel=1
pkgdesc="An open, royalty-free video coding format designed for video transmissions over the Internet"
arch=('i686' 'x86_64')
url="http://aomedia.org/"
license=('BSD' 'custom:PATENTS')
depends=('gcc-libs')
makedepends=('git' 'cmake' 'perl' 'yasm')
provides=('aom')
conflicts=('aom')
source=("git+https://aomedia.googlesource.com/aom")
sha256sums=('SKIP')


pkgver() {
  cd "aom"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "aom"

  mkdir -p "_build" && cd "_build"
  cmake \
    -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=1 \
    -DCONFIG_UNIT_TESTS=0 \
    ../
  make
}

check() {
  cd "aom/_build"

  #make runtests
}

package() {
  cd "aom/_build"

  make DESTDIR="$pkgdir" install
  install -Dm644 "$srcdir/aom/LICENSE" "$pkgdir/usr/share/licenses/aom/LICENSE"
  install -Dm644 "$srcdir/aom/PATENTS" "$pkgdir/usr/share/licenses/aom/PATENTS"
}
