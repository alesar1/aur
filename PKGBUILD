# Maintainer: Alexander F. R�dseth <xyproto@archlinux.org>

pkgname=monitor
pkgver=3.1.1
pkgrel=1
pkgdesc='Collection of utilities for dealing with monitors and wallpapers'
arch=(x86_64)
url='https://github.com/xyproto/monitor'
license=(MIT)
makedepends=(git go)
source=("git+$url#tag=$pkgver")
sha256sums=('SKIP')

prepare() {
  sed -i 's/go build/go build -gcflags "all=-trimpath=${PWD}" -asmflags "all=-trimpath=${PWD}" -ldflags "-extldflags ${LDFLAGS}"/g' $pkgname/Makefile
}

build() {
  make -C $pkgname
}

package() {
  DESTDIR="$pkgdir" make -C $pkgname install
}

# vim: ts=2 sw=2 et:
