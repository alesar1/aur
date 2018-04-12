# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=libdvdnav-git
pkgver=6.0.0.0.gdcb9109
pkgrel=1
pkgdesc="Library to navigate DVD disks. (GIT version)"
arch=('x86_64')
url='http://dvdnav.mplayerhq.hu'
license=('GPL2')
depends=('libdvdread-git')
makedepends=('git')
provides=('libdvdnav' 'libdvdnav.so')
conflicts=('libdvdnav')
source=('git+https://code.videolan.org/videolan/libdvdnav.git')
sha256sums=('SKIP')

pkgver() {
  cd libdvdnav
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  cd libdvdnav
  autoreconf -if
}

build() {
  cd libdvdnav
  ./configure \
    --prefix=/usr \
    --enable-static=no

  make
}

package() {
  make -C libdvdnav DESTDIR="${pkgdir}" install
}
