# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=libjcat-git
pkgver=0.1.10.r3.g653893a
pkgrel=1
pkgdesc="Library for reading and writing Jcat files"
arch=('i686' 'x86_64')
url="https://github.com/hughsie/libjcat"
license=('LGPL')
depends=('glibc' 'gpgme' 'json-glib')
makedepends=('git' 'meson' 'gobject-introspection' 'help2man' 'vala')
provides=('libjcat')
conflicts=('libjcat')
source=("git+https://github.com/hughsie/libjcat.git")
sha256sums=('SKIP')


pkgver() {
  cd "libjcat"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "libjcat"

  meson \
    --buildtype=plain \
    --prefix="/usr" \
    --sbindir="bin" \
    --libexecdir="/usr/lib" \
    "_build"
  meson compile -C "_build"
}

check() {
  cd "libjcat"

  meson test -C "_build"
}

package() {
  cd "libjcat"

  meson install -C "_build" --destdir "$pkgdir"
}
