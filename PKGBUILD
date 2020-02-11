# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

_pkgname=ffmpeg
pkgname=ffmpeg-headless
pkgver=4.2.2
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video; optimised for server (headless) systems'
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url='http://ffmpeg.org/'
license=('GPL3')
depends=(
  aom
  bzip2
  fribidi
  gmp
  gnutls
  gsm
  lame
  libbluray.so
  libdav1d.so
  libdrm
  libmodplug
  libtheora
  libva.so
  libva-drm.so
  libvorbisenc.so
  libvorbis.so
  libvpx.so
  libwebp
  libx264.so
  libx265.so
  libxml2
  libxvidcore.so
  opencore-amr
  openjpeg2
  opus
  speex
  v4l-utils
  xz
  zlib
  rtmpdump
)
makedepends=(
  nasm
)
provides=(
  libavcodec.so
  libavdevice.so
  libavfilter.so
  libavformat.so
  libavutil.so
  libpostproc.so
  libswresample.so
  libswscale.so
  ffmpeg
)
conflicts=('ffmpeg')
source=("https://ffmpeg.org/releases/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('cb754255ab0ee2ea5f66f8850e1bd6ad5cac1cd855d0a2f4990fb8c668b0d29c')

prepare() {
  cd ${_pkgname}-${pkgver}

}

build() {
  cd ${_pkgname}-${pkgver}


  ./configure \
    --prefix=/usr \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --disable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --disable-ladspa \
    --enable-libaom \
    --disable-libass \
    --enable-libbluray \
    --enable-libdav1d \
    --enable-libdrm \
    --disable-libfreetype \
    --enable-libfribidi \
    --enable-libgsm \
    --disable-libiec61883 \
    --disable-libjack \
    --disable-libmfx \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore_amrnb \
    --enable-libopencore_amrwb \
    --enable-libopenjpeg \
    --enable-libopus \
    --disable-libpulse \
    --disable-libsoxr \
    --enable-libspeex \
    --disable-libssh \
    --enable-libtheora \
    --enable-libv4l2 \
    --disable-libvidstab \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --disable-libxcb \
    --enable-libxml2 \
    --enable-libxvid \
    --disable-nvdec \
    --disable-nvenc \
    --disable-omx \
    --enable-shared \
    --enable-version3 \
    --enable-vaapi \
    --enable-librtmp \
    --enable-runtime-cpudetect \
    --disable-vdpau \
    --disable-xlib  \
    --disable-sdl2 \
    --disable-htmlpages \
    --disable-ffplay

  make
}

package() {
  make DESTDIR="${pkgdir}" -C ${_pkgname}-${pkgver} install install-man
}
