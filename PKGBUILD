# Maintainer: Nick Østergaard <oe.nick at gmail dot com>
pkgname=liblxi-git
pkgver=r130.8b43290
pkgrel=2
pkgdesc="LXI library"
arch=('i686' 'x86_64')
url="https://github.com/lxi/liblxi"
license=('BSD-3')
provides=('liblxi')
conflicts=('liblxi')
depends=('rpcsvc-proto' 'libxml2' 'avahi')
optdepends=('lxi-tools')
source=("$pkgname::git+https://github.com/lxi/liblxi")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$pkgname"

  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:

