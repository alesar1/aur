#Maintainer: Mikhail Rudenko <mike.rudenko@gmail.com>

pkgname=highfive
_pkgname=HighFive
pkgver=2.4.0
pkgrel=1
pkgdesc="Header-only C++ HDF5 interface"
arch=('x86_64')
url='https://github.com/BlueBrain/HighFive'
license=('Boost')
depends=('boost' 'hdf5' 'eigen')
makedepends=('cmake')
source=(https://github.com/BlueBrain/$_pkgname/archive/v$pkgver.tar.gz)
md5sums=('fd4a24d62f1128ff24966517b23f1392')

prepare() {
  mkdir -p build-$pkgver
  cd $_pkgname-$pkgver
}

build() {
  cd build-$pkgver
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DHIGHFIVE_EXAMPLES=OFF \
        -DHIGHFIVE_USE_EIGEN=ON -DCMAKE_BUILD_TYPE=Release \
        ../$_pkgname-$pkgver
  make
}

check() {
  cd build-$pkgver
  make test
}

package() {
  cd build-$pkgver
  make DESTDIR="$pkgdir/" install
}
