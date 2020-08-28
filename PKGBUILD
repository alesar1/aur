# Maintainer: Joshua Rubin <me at jawa dot dev>

pkgname=jtdxhamlib
pkgver=rc152
pkgrel=1
pkgdesc='Modified hamlib for jtdx'
arch=('x86_64')
url='https://github.com/jtdx-project/jtdxhamlib'
license=('GPL2')
depends=('libusb-1.0.so')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/jtdx-project/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('b5443a488aa19adb56ddf9eccb5e72d4')
sha1sums=('d8dbb737067cfa48f27d3dddb6db98e3b463b8f4')
sha224sums=('dc40a928d71d8c04582bafce643c17750945964ddf401fc0fc83bd66')
sha256sums=('0b1c6488a68f3256c3e7cbd8cc52e0c0f977d5c299fd74ded035948004562d05')
sha384sums=('9ee33a62fe0326d61a3db70b1422d81412cb3eedfe3af092e6b4c7bc9da76d965b55cd1b8801cab1bbbf0eb008b2d3d1')
sha512sums=('fc4800791509760c97cfffb27cc92889d7ad8b28fb80dd8181051f24c70cc273c47b3b590941bb986fe2a842fcd68e89b03c028341d1c6e8409ef5ff3824ce7b')
b2sums=('60645865795ab54761096773faf30f88514cc9eaec6b76c2371a3335f58a228ad1333a660a49bc837fa58f418ac20a0d0fa20298637fb8385264de190e985389')

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
