# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=libdvdcss-git
pkgver=1.3.99
pkgrel=1
pkgdesc="A portable abstraction library for DVD decryption. (GIT version)"
arch=('i686' 'x86_64')
license=('GPL2')
url="http://www.videolan.org/libdvdcss"
makedepends=('git')
provides=('libdvdcss')
conflicts=('libdvdcss')
source=('git://git.videolan.org/libdvdcss.git')
sha1sums=('SKIP')

pkgver() {
  cd libdvdcss
  echo "$(git describe --always | tr - .)"
}

prepare() {
  cd libdvdcss
  autoreconf -if
}

build() {
  cd libdvdcss
  ./configure --prefix=/usr
  make
}

package() {
  make -C libdvdcss DESTDIR="${pkgdir}" install
}
