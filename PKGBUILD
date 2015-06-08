# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>
# Contributor: HitomiTenshi <Johann.Rekowski@googlemail.com>

pkgname=libutvideo-git
pkgver=v15.2.0.67.gd2057eb
pkgrel=1
pkgdesc="utvideo with patches for the buildsystem (GIT Version)"
arch=('i686' 'x86_64')
url="https://github.com/qyot27/libutvideo"
license=('GPL')
makedepends=('git')
conflicts=('libutvideo')
provides=('libutvideo')
source=('git://github.com/qyot27/libutvideo.git#branch=buildsystem')
sha1sums=('SKIP')

pkgver() {
  cd libutvideo
  echo "$(git describe --long --tags | tr - .)"
}

build() {
  cd libutvideo

  ./configure \
    --prefix=/usr \
    --enable-shared \
    --disable-static \
    --enable-pic
  make
}

package() {
  make -C libutvideo DESTDIR="${pkgdir}" install
}