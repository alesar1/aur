# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=icu-git
pkgver=64.2.rc.r29.gbe25c277fd
pkgrel=1
pkgdesc="International Components for Unicode library"
arch=('i686' 'x86_64')
url="http://site.icu-project.org/"
license=('custom:icu')
depends=('glibc' 'sh')
makedepends=('git')
provides=('icu')
conflicts=('icu')
source=("git+https://github.com/unicode-org/icu.git")
sha256sums=('SKIP')


pkgver() {
  cd "icu"

  git describe --long --tags | sed 's/^release-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "icu/icu4c/source"

  export CC=gcc CXX=g++
  ./configure \
    --prefix="/usr" \
    --sbindir="/usr/bin" \
    --sysconfdir="/etc"
  make
}

check() {
  cd "icu/icu4c/source"

  make check
}

package() {
  cd "icu/icu4c/source"

  make DESTDIR="$pkgdir" install
  install -Dm644 "$srcdir/icu/icu4c/LICENSE" "$pkgdir/usr/share/licenses/icu/LICENSE"
}
