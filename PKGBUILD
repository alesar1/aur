# Maintainer: Jeremy "Ichimonji10" Audet <ichimonji10 at gmail dot com>
# Contributor: Jonjo McKay <jonjo@jonjomckay.com>

pkgname=libgroove
pkgver=4.3.0
pkgrel=1
pkgdesc='Library that provides decoding and encoding of audio on a playlist.'
arch=(i686 x86_64)
url='https://github.com/andrewrk/libgroove'
license=(MIT)
depends=(sdl2 chromaprint libebur128)
makedepends=(cmake yasm)
conflicts=(libgroove-git)
options=('strip')
source=("https://github.com/andrewrk/libgroove/archive/${pkgver}.tar.gz")
sha256sums=('76f68896f078a9613d420339ef887ca8293884ad2cd0fbc031d89a6af2993636')

prepare() {
  sed \
    -e 's|^libdir=$|libdir=/usr/lib|' \
    -e 's|^includedir=$|includedir=/usr/include/groove|' \
    -e "s|^Version:$|Version: ${pkgver}|" \
    "${srcdir}/${pkgname}-${pkgver}/example/libgroove.pc" \
    > "${srcdir}/libgroove.pc"
}

build() {
  mkdir -p "${srcdir}/${pkgname}-${pkgver}/build"
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  cmake ../ -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  make -C "${srcdir}/${pkgname}-${pkgver}/build" DESTDIR="${pkgdir}/" install
  install -Dm 644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  # Created in the `prepare` function.
  install -Dm 644 "${srcdir}/libgroove.pc" \
    "${pkgdir}/usr/lib/pkgconfig/libgroove.pc"
}

# vim:set ts=2 sw=2 et:
