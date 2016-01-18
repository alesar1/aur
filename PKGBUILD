# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=python-occ
_pkgname=pythonocc-core
pkgver=0.16.3
pkgrel=2
pkgdesc="A python library whose purpose is to provide 3D modeling features"
url="https://github.com/tpaviot/pythonocc-core"
arch=('i686' 'x86_64')
license=('GPLv3')
makedepends=('cmake' 'swig')
depends=('oce' 'python')
source=(https://github.com/tpaviot/${_pkgname}/archive/${pkgver}.tar.gz)
md5sums=('437d6709453b64e176d00e146e84a51f')

prepare() {
  cd ${_pkgname}-${pkgver}
  mkdir -p build
  cd build
  flags=""
  flags="$flags -DCMAKE_INSTALL_PREFIX=/usr/local"
  flags="$flags -DOCE_INCLUDE_PATH=/opt/oce/include/oce"
  flags="$flags -DOCE_LIB_PATH=/opt/oce/lib"
  cmake $flags ..
}

build() {
  cd ${_pkgname}-${pkgver}/build
  make
}

package() {
  cd ${_pkgname}-${pkgver}/build
  make DESTDIR="${pkgdir}" install
  install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
