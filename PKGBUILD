# Maintainer: Guillaume Horel <guillaume.horel@gmail.com
# Contributor: Antonio Rojas <arojas@archlinux.org>

pkgname=bzrtp-git
_pkgname=bzrtp
pkgver=1.0.6.r36.gc01c277
pkgrel=1
pkgdesc="Opensource implementation of ZRTP keys exchange protocol"
arch=('x86_64')
url="https://github.com/BelledonneCommunications/bzrtp"
license=('GPL2')
conflicts=('bzrtp')
provides=('bzrtp')
depends=('libxml2' 'mbedtls' 'bctoolbox-git')
makedepends=('cmake')
source=("git+https://github.com/BelledonneCommunications/bzrtp.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}
build() {
  cd ${_pkgname}
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
      -DENABLE_STATIC=NO \
      -DENABLE_STRICT=NO \
      -DCMAKE_INSTALL_LIBDIR="/usr/lib" .
  make
}

package() {
  cd ${_pkgname}
  make DESTDIR="${pkgdir}" install
}
