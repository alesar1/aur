# Maintainer: acxz <akashpatel2008 at yahoo dot com>
# Contributor: Benjamin Chretien <chretien at lirmm dot fr>
pkgdesc="Flexible Collision Library."
url='https://github.com/flexible-collision-library/fcl'
pkgname=fcl
pkgver=0.6.1
arch=('i686' 'x86_64')
pkgrel=1
license=('BSD')
makedepends=('cmake' 'octomap')
depends=('libccd' 'eigen')
optdepends=('octomap: collision detection with octrees'
            'tinyxml: support for global penetration depth test'
            'flann: support for fast approximate nearest neighbor searches')
_dir=fcl-${pkgver}
source=(https://github.com/flexible-collision-library/fcl/archive/v${pkgver}.tar.gz)
sha256sums=('c8a68de8d35a4a5cd563411e7577c0dc2c626aba1eef288cb1ca88561f8d8019')

build() {
  mkdir -p ${srcdir}/build
  cd ${srcdir}/build

  cmake ${srcdir}/${_dir} \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib" \
    -DCMAKE_BUILD_TYPE="Release"

  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
