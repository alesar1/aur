# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

_pkgname=ffmpeg
pkgname=ffmpeg-headless
pkgver=4.3.3
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video; optimised for server (headless) systems'
arch=(i686 x86_64 armv7h armv6h aarch64)
url=https://ffmpeg.org/
license=(GPL3)
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
  librav1e.so
  libtheora
  libva
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
sha256sums=('9f0a68fbd74feb4e50dc220bddd59d84626774a53687fb737806ae00e5c6e9e6')

prepare() {
  cd ${_pkgname}-${pkgver}

}

build() {
  cd ${_pkgname}-${pkgver}

  CFLAGS="$CFLAGS -Wno-deprecated-declarations"

  ./configure \
    --prefix=/usr \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --disable-amf \
    --disable-avisynth \
    --disable-cuda-llvm \
    --enable-lto \
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
    --enable-librav1e \
    --disable-libsoxr \
    --enable-libspeex \
    --disable-libsrt \
    --disable-libssh \
    --enable-libtheora \
    --enable-libv4l2 \
    --disable-libvidstab \
    --disable-libvmaf \
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
