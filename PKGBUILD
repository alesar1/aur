# Maintainer: drakkan <nicola.murino at gmail dot com>
pkgname=mingw-w64-gst-editing-services
pkgver=1.20.2
pkgrel=1
pkgdesc="GStreamer editing services (mingw-w64)"
arch=(any)
url="http://gstreamer.freedesktop.org/"
license=('LGPL')
depends=('mingw-w64-gst-plugins-base')
makedepends=('mingw-w64-meson')
options=('!strip' '!buildflags' 'staticlibs')

source=("${url}src/gst-editing-services/gst-editing-services-${pkgver}.tar.xz")
sha256sums=('2ddef442cf8313e78477510a4461c8522f180afef26d035a38fea3f5006d012f')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/gst-editing-services-${pkgver}"
  for _arch in $_architectures; do
    mkdir -p "build-${_arch}" && pushd build-${_arch}
    ${_arch}-meson \
      -D doc=disabled ..
    ninja
    popd
  done
}

package() {
  cd "${srcdir}/gst-editing-services-${pkgver}"
  for _arch in ${_architectures}; do
    DESTDIR="${pkgdir}" ninja -C "${srcdir}/gst-editing-services-${pkgver}/build-${_arch}" install
  done
}

# vim: ts=2 sw=2 et:
