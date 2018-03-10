# $Id$
# Maintainer: Christian Hesse <mail@eworm.de>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Eivind Uggedal <eivind@uggedal.com>
# Contributor: Frédéric Mangano <fmang+aur@mg0.fr>

# ALARM: Kevin Mihelich <kevin@archlinuxarm.org>
#  - armv7/aarch64 needs to be built with fPIC
# Upstream: https://raw.githubusercontent.com/archlinuxarm/PKGBUILDs/master/community/mpv/PKGBUILD

pkgname=mpv-rpi
_pkgname=mpv
epoch=1
pkgver=0.27.2
pkgrel=2
_waf_version=1.9.8
pkgdesc='mpv with Raspberry Pi support'
arch=('armv6h' 'armv7h' 'aarch64')
# We link against libraries that are licensed GPLv3 explicitly, libsmbclient
# being one of these. So our package is GPLv3 only as well.
license=('GPL3')
url='https://mpv.io/'
depends=(
  'ffmpeg-mmal' 'lcms2' 'libcdio-paranoia' 'libgl' 'libxss'
  'libxinerama' 'libxv' 'libxkbcommon' 'libva' 'wayland' 'libcaca'
  'desktop-file-utils' 'hicolor-icon-theme' 'xdg-utils' 'lua52' 'libdvdnav'
  'libxrandr' 'jack' 'rubberband' 'uchardet' 'libarchive' 'smbclient'
)
makedepends=('mesa' 'python-docutils' 'ladspa')
optdepends=('youtube-dl: for video-sharing websites playback')
options=('!emptydirs')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/mpv-player/$_pkgname/archive/v$pkgver.tar.gz"
  '0001-opengl-backend-support-multiple-backends.patch'
  '0002-vaapi-Use-libva2-message-callbacks.patch'
  '0003-demux_lavf-return-AVERROR_EOF-on-file-end.patch'
  "https://waf.io/waf-${_waf_version}")
sha256sums=('2ad104d83fd3b2b9457716615acad57e479fd1537b8fc5e37bfe9065359b50be'
  '609e0530f1b0cdb910dcffb5f62bf55936540e24105ce1b2daf1bd6291a7d58a'
  '3c3517f4f4c71e39e1e04ea440688fc8d7b3dc55e6bc0a9398d11a9b75bde07d'
  '5de6c616428c87cf9b39d8ba24446d65d175050c083e1054194d93cf03d5816a'
  '167dc42bab6d5bd823b798af195420319cb5c9b571e00db7d83df2a0fe1f4dbf')
provides=('mpv')
conflicts=('mpv')

prepare() {
  cd ${_pkgname}-${pkgver}

  # --opengl-backend: support multiple backends (#4384) (FS#53962)
  patch -Np1 < "${srcdir}"/0001-opengl-backend-support-multiple-backends.patch

  # vaapi: Use libva2 message callbacks
  patch -Np1 < "${srcdir}"/0002-vaapi-Use-libva2-message-callbacks.patch

  # demux_lavf: return AVERROR_EOF on file end
  patch -Np1 < "${srcdir}"/0003-demux_lavf-return-AVERROR_EOF-on-file-end.patch

  install -m755 "${srcdir}"/waf-${_waf_version} waf
}

build() {
  cd ${_pkgname}-${pkgver}

  [[ $CARCH == "armv7h" || $CARCH == "aarch64" ]] && CFLAGS+=" -fPIC" && CXXFLAGS+=" -fPIC"

  # https://github.com/mpv-player/mpv-build/issues/84
  export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/opt/vc/lib/pkgconfig"

  ./waf configure --prefix=/usr \
    --confdir=/etc/mpv \
    --enable-cdda \
    --enable-dvb \
    --enable-dvdnav \
    --enable-encoding \
    --enable-libsmbclient \
    --enable-libarchive \
    --enable-libmpv-shared \
    --enable-zsh-comp \
    --enable-egl-x11 \
    --enable-rpi

  ./waf build
}

package() {
  cd ${_pkgname}-${pkgver}

  ./waf install --destdir="$pkgdir"

  install -m644 DOCS/{encoding.rst,tech-overview.txt} \
    "$pkgdir"/usr/share/doc/mpv
}
