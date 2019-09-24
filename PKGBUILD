# Maintainer: drakkan <nicola.murino at gmail dot com>
pkgname=mingw-w64-gst-editing-services
pkgver=1.16.1
pkgrel=1
pkgdesc="GStreamer editing services (mingw-w64)"
arch=(any)
url="http://gstreamer.freedesktop.org/"
license=('LGPL')
depends=('mingw-w64-gst-plugins-base')
makedepends=('mingw-w64-meson')
options=('!strip' '!buildflags' 'staticlibs')

source=("${url}src/gstreamer-editing-services/gstreamer-editing-services-${pkgver}.tar.xz")
sha256sums=('c884878f9e6ddac96e4f174654d12fe52e3d48eaaec27a80767c0d56cb2f6780')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/gstreamer-editing-services-${pkgver}"
  for _arch in $_architectures; do
    mkdir -p "build-${_arch}" && pushd build-${_arch}
    ${_arch}-meson \
      -D gtk_doc=disabled ..
    ninja
    popd
  done
}

package() {
  cd "${srcdir}/gstreamer-editing-services-${pkgver}"
  for _arch in ${_architectures}; do
    DESTDIR="${pkgdir}" ninja -C "${srcdir}/gstreamer-editing-services-${pkgver}/build-${_arch}" install
  done
}

# vim: ts=2 sw=2 et:
