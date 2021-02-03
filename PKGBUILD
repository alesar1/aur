# Maintainer: Joshua Rubin <me at jawa dot dev>

pkgname=jtdxhamlib
pkgver=rc155
pkgrel=1
pkgdesc='Modified hamlib for jtdx'
arch=('x86_64')
url='https://github.com/jtdx-project/jtdxhamlib'
license=('GPL2')
depends=('libusb-1.0.so')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/jtdx-project/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('361b0ee5ed788d00a405e66d2385c4ae')
sha1sums=('b6f4535e35abbb91c755c7f6627f5977cd920f94')
sha224sums=('0937669cd5e2202dc315599f5bb212db8280555a5f2a2cd71a24a529')
sha256sums=('c1589bdd273b5dee61c2d6bd7f5d98ceba50eed523a409345c1611ec39a4903d')
sha384sums=('5ddce4e956382601f9eb5262a2e87bc9ed1cc91eda205ab4a01aef3ddf852cf1398c278205142003a10128b8b85e6045')
sha512sums=('7ddf2750b39fa6e6e45dc709150316f4e813f6794a1b7437fd360f0059120a07f4b9382315de1c228cb53510c80fb41d109608c1946759eaf0d758f39f05e34b')
b2sums=('2c4bc12330e26d5711e5a2863fc3289d2efa7c6a7c7b95b90593bff27cce3f74add83db934458146fd0032774e7180351d3fdaa4e12bb33931e2a7977ae29f3f')

prepare() {
  cd "${pkgname}-${pkgver}"
  ./bootstrap
}

build() {
  cd "${pkgname}-${pkgver}"
  rm -rf build
  mkdir build
  cd build
  ../configure \
    "--prefix=/opt/${pkgname}" \
    --disable-shared \
    --enable-static \
    --without-cxx-binding \
    --disable-winradio
  make
}

package() {
  cd "${pkgname}-${pkgver}/build"
  make DESTDIR="${pkgdir}/" install
}
