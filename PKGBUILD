# Maintainer: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>
# Contributor: quequotion <quequotion at bugmenot dot com>
# Contributor: Andrea Scarpino <andrea at archlinux dot org>
# Contributor: Pierre Schmitz <pierre at archlinux dot de>

pkgname=lib32-libical
pkgver=2.0.0
pkgrel=1
pkgdesc="An open source reference implementation of the icalendar data type and serialization format (32-bit)"
arch=('x86_64')
url='https://github.com/libical/libical'
license=('LGPL' 'MPL')
depends=("${pkgname#lib32-}" 'lib32-glibc')
makedepends=('cmake' 'gcc-multilib')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/${pkgname#lib32-}/${pkgname#lib32-}/archive/v${pkgver}.tar.gz")
sha512sums=('0b80f9aa40e0a485371b5949152c10d7fffb6e0dfe8c2aabc3c6e4e97ba0cdd465ae7093343245be60173bc7b24e80e919c0c0e199ff0bb2b14ed94af7087c4f')

prepare() {
  cd "${srcdir}/${pkgname#lib32-}-${pkgver}"
  export CC='gcc -m32'
  export CXX='g++ -m32'
  export LDFLAGS='-m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  [ -d build ] || mkdir build
}

build() {
  cd "${srcdir}/${pkgname#lib32-}-${pkgver}/build"
  cmake ../ \
        -DCMAKE_BUILD_TYPE=Release \
        -DSHARED_ONLY=true \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=/usr/lib32
  make
}

package() {
  cd "${srcdir}/${pkgname#lib32-}-${pkgver}/build"
  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/{etc,usr/{share,include,bin}}
}
