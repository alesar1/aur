# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
pkgname=opendht
pkgver=0.6.3
pkgrel=1
epoch=1
pkgdesc="A C++11 implementation of the Kademlia DHT (Distributed Hash Table)"
arch=('i686' 'x86_64')
depends=('gnutls' 'nettle' 'readline')
makedepends=('git' 'msgpack-c' 'cmake' 'cython')
optdepends=('python: to use the Python bindings')
url="https://github.com/savoirfairelinux/opendht"
license=('GPL3')
source=("git://github.com/savoirfairelinux/opendht#tag=$pkgver")
md5sums=('SKIP')

build() {
  cd "${pkgname}"

  msg2 'Building...'
  mkdir -p build
  cd build
  cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DOPENDHT_PYTHON=ON \
    -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${pkgname}"

  msg2 'Installing...'
  cd build
  make DESTDIR="$pkgdir" install
  cd ..

  msg2 'Installing documentation...'
  install -D -m655 README.md "${pkgdir}/usr/share/doc/opendht/README.md"

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}

# vim:set ts=2 sw=2 et:
