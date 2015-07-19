# Maintainer: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>
# Contributor: josephgbr <rafael.f.f1 at gmail dot com>

pkgname=lib32-libexif
pkgver=0.6.21
pkgrel=4
pkgdesc="A library to parse an EXIF file and read the data from those tags (32-bit)"
arch=('x86_64')
license=('LGPL')
url="http://sourceforge.net/projects/libexif"
depends=('lib32-glibc' "${pkgname#lib32-}")
makedepends=('gcc-multilib')
options=('!libtool')
source=(http://downloads.sf.net/sourceforge/${pkgname#lib32-}/${pkgname#lib32-}-${pkgver}.tar.bz2)
sha512sums=('4e0fe2abe85d1c95b41cb3abe1f6333dc3a9eb69dba106a674a78d74a4d5b9c5a19647118fa1cc2d72b98a29853394f1519eda9e2889eb28d3be26b21c7cfc35')

build() {
  cd "${srcdir}/${pkgname#lib32-}-${pkgver}"
  export CC='gcc -m32'
  export CXX='g++ -m32'
  export LDFLAGS='-m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  ./configure --prefix=/usr --libdir=/usr/lib32
  make
}

package() {
  cd "${srcdir}/${pkgname#lib32-}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}/usr/"{include,share,lib32/*.a}
}
