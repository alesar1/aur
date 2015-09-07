# $Id: PKGBUILD 198291 2013-10-30 13:58:19Z allan $
# Maintainer: Jan de Groot <jgc@archlinux.org>

pkgname=libwebsockets-git
_gitname=libwebsockets
pkgver=1135.3ae1bad
pkgrel=1
pkgdesc="A lightweight pure C library built to use minimal CPU and memory resources, and provide fast throughput in both directions."
arch=('i686' 'x86_64')
url="https://libwebsockets.org"
depends=('openssl' 'make')
makedepends=('cmake')
license=('LGPL')
source=("git://git.libwebsockets.org/libwebsockets")
sha256sums=('SKIP')

pkgver() {
    cd $_gitname
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${srcdir}/${_gitname}"
  rm -rf build
  mkdir build
  cd build
  if test "$CARCH" == x86_64; then
    cmake -DLIB_SUFFIX=64 ..
  fi
  if test "$CARCH" == i686; then
    cmake ..
  fi
  make
}

package() {
  cd "${srcdir}/${_gitname}/build"
  make DESTDIR="${pkgdir}" install

  cd ..
  install -m755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/"
}
