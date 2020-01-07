# Maintainer: László Várady <laszlo.varady93@gmail.com>
# Contributor: Aleksandar Trifunović <akstrfn at gmail dot com>
# Contributor: Daichi Shinozaki <dsdseg at gmail dot com>

pkgname=wangle
pkgver=2020.01.06.00
pkgrel=1
pkgdesc="C++ networking library providing client/server abstractions for building services"
arch=('x86_64')
url="https://github.com/facebook/wangle"
license=('Apache')
depends=('boost' 'boost-libs' 'google-glog' 'fizz' 'folly' 'libevent' 'openssl' 'fmt')
makedepends=('cmake' 'double-conversion' 'gflags' 'gtest' 'gmock')
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('6edcf6a29b80696ae8c47e89769e8d895e1e5854c151e554b3e454e1d949bfa3')

build() {
    cd "$pkgname-$pkgver/$pkgname"
    cmake -S . -B build \
          -DCMAKE_C_FLAGS:STRING="${CFLAGS}" \
          -DCMAKE_CXX_FLAGS:STRING="${CXXFLAGS}" \
          -DCMAKE_EXE_LINKER_FLAGS:STRING="${LDFLAGS}" \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -DCMAKE_BUILD_TYPE=Release
    cmake --build build
}

check() {
    cd "$pkgname-$pkgver/$pkgname"
    cmake --build build --target test
}

package() {
    cd "$pkgname-$pkgver/$pkgname"
    cmake --build build --target install -- DESTDIR="$pkgdir/"
}
