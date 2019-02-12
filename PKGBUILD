# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=libdvdnav-git
pkgver=6.0.0.3.ged3d4c3
pkgrel=1
pkgdesc="Library to navigate DVD disks. (GIT version)"
arch=('x86_64')
url='http://dvdnav.mplayerhq.hu'
license=('GPL2')
depends=('libdvdread-git')
makedepends=('git')
provides=('libdvdnav'
          'libdvdnav.so'
          )
conflicts=('libdvdnav')
source=('git+https://code.videolan.org/videolan/libdvdnav.git')
sha256sums=('SKIP')

pkgver() {
  cd libdvdnav
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build

  cd libdvdnav
  autoreconf -vif
}

build() {
  cd build
  ../libdvdnav/configure \
    --prefix=/usr \
    --enable-static=no

  make
}

package() {
  make -C build DESTDIR="${pkgdir}" install
}
