# Maintainer: Anton T Johansson <anton@tetov.se>
# Contributor: GPereira
# Contributor: Jelle van der Waa <jelle@archlinux.org>
# Contributor: Grey Christoforo <first name [at] last name [dot] net>

pkgname=arcus-beta-git
pkgver=4.0
pkgrel=1
pkgdesc="Communication library between internal components for Ultimaker software"
arch=('x86_64')
url="https://github.com/Ultimaker/libArcus"
license=('LGPL3')
depends=('python' 'protobuf' 'python-sip')
makedepends=('cmake' 'git' 'sip')
provides=('arcus' 'libarcus')
conflicts=('arcus' 'libarcus' 'arcus-beta')
source=("git+${url}#branch=${pkgver}")
md5sums=('SKIP')

build() {
  cd libArcus
  mkdir -p build
  cd build

  cmake .. \
  -DCMAKE_INSTALL_PREFIX=/usr \
  -DCMAKE_BUILD_TYPE=Release \
  -DBUILD_EXAMPLES=OFF  \
  -DCMAKE_INSTALL_LIBDIR=/usr/lib/

  make
}

package() {
  cd libArcus/build
  make DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:
