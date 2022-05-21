# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=picolibc
pkgver=1.7.7
pkgrel=1
pkgdesc="A C library designed for embedded 32 and 64 bit systems"
arch=('i686' 'x86_64')
url="https://keithp.com/picolibc/"
license=('GPL')
makedepends=('glibc' 'meson')
source=("$pkgname-$pkgver-src.tar.gz::https://github.com/picolibc/picolibc/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('eafc9a79171afc8d4cc1d5af8dacee7e784cfa4baa304bec8ea926da0da07fa9')


build() {
  cd "$pkgname-$pkgver"

  # ref: scripts/do-amd64-configure
  meson \
    --buildtype=plain \
    --prefix="/usr" \
    --includedir="include/picolibc" \
    --libdir="lib/picolibc" \
    -Dmultilib="false" \
    "_build"
  meson compile -C "_build"
}

package() {
  cd "$pkgname-$pkgver"

  meson install -C "_build" --destdir "$pkgdir"
}
