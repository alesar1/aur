# Maintainer: Kaan Genç <SeriousBug at gmail dot com>
# Contributor: Christian Hesse <mail@eworm.de>
# Contributor:  Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Eivind Uggedal <eivind@uggedal.com>

pkgname=mpv-vapoursynth
_pkgname=mpv
epoch=1
pkgver=0.27.0
pkgrel=1
pkgdesc='Video player based on MPlayer/mplayer2'
arch=('i686' 'x86_64')
license=('GPL')
url='http://mpv.io'
depends=(
  'ffmpeg' 'lcms2' 'libcdio-paranoia' 'libgl' 'libxss'
  'libxinerama' 'libxv' 'libxkbcommon' 'libva' 'wayland' 'libcaca'
  'desktop-file-utils' 'hicolor-icon-theme' 'xdg-utils' 'lua52' 'libdvdnav'
  'libxrandr' 'jack' 'rubberband' 'uchardet' 'libarchive'
  'vapoursynth'
)
makedepends=('mesa' 'python-docutils' 'ladspa')
optdepends=('youtube-dl: for video-sharing websites playback')
conflicts=($_pkgname)
provides=($_pkgname)
options=('!emptydirs')
install=mpv.install
source=("$_pkgname-$pkgver.tar.gz::https://github.com/mpv-player/$_pkgname/archive/v$pkgver.tar.gz"
        '0001-opengl-backend-support-multiple-backends.patch'
        '0002-vaapi-Use-libva2-message-callbacks.patch'
        '0003-demux_lavf-return-AVERROR_EOF-on-file-end.patch')
sha256sums=('341d8bf18b75c1f78d5b681480b5b7f5c8b87d97a0d4f53a5648ede9c219a49c'
            '609e0530f1b0cdb910dcffb5f62bf55936540e24105ce1b2daf1bd6291a7d58a'
            '3c3517f4f4c71e39e1e04ea440688fc8d7b3dc55e6bc0a9398d11a9b75bde07d'
            '5de6c616428c87cf9b39d8ba24446d65d175050c083e1054194d93cf03d5816a')

prepare() {
  cd ${_pkgname}-${pkgver}

   # --opengl-backend: support multiple backends (#4384) (FS#53962)
  patch -Np1 < "${srcdir}"/0001-opengl-backend-support-multiple-backends.patch

  # vaapi: Use libva2 message callbacks
  patch -Np1 < "${srcdir}"/0002-vaapi-Use-libva2-message-callbacks.patch

  # demux_lavf: return AVERROR_EOF on file end
  patch -Np1 < "${srcdir}"/0003-demux_lavf-return-AVERROR_EOF-on-file-end.patch

  ./bootstrap.py
}

build() {
  cd ${_pkgname}-${pkgver}

  ./waf configure --prefix=/usr \
    --confdir=/etc/mpv \
    --enable-cdda \
    --enable-dvb \
    --enable-dvdnav \
    --enable-encoding \
    --enable-libarchive \
    --enable-libmpv-shared \
    --enable-zsh-comp

  ./waf build
}

package() {
  cd ${_pkgname}-${pkgver}

  ./waf install --destdir="$pkgdir"

  install -m644 DOCS/{encoding.rst,tech-overview.txt} \
    "$pkgdir"/usr/share/doc/mpv
}
