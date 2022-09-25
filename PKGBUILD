
# Maintainer: Eric Woudstra <ericwouds AT gmail DOT com>

# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=ffmpeg-v4l2-request-git
_srcname=FFmpeg
pkgver=r101819.6eb83262f6
pkgrel=1
epoch=2
pkgdesc='FFmpeg with v4l2-request and drmprime'
arch=('armv7h' 'aarch64')
url=https://ffmpeg.org/
license=(GPL3)
depends=(
  alsa-lib
  bzip2
  fontconfig
  fribidi
  gmp
  gnutls
  gsm
  jack
  lame
  libass.so
  libavc1394
  libbluray.so
  libdav1d.so
  libdrm
  libfreetype.so
  libiec61883
  libmodplug
  libpulse
  libraw1394
  librsvg-2.so
  libsoxr
  libssh
  libtheora
  libva.so
  libva-drm.so
  libva-x11.so
  libvdpau
  libvidstab.so
  libvorbisenc.so
  libvorbis.so
  libvpx.so
  libwebp
  libx11
  libx264.so
  libx265.so
  libxcb
  libxext
  libxml2
  libxv
  libxvidcore.so
  libzimg.so
  opencore-amr
  openjpeg2
  opus
  sdl2
  speex
  srt
  v4l-utils
  xz
  zlib
)
makedepends=(
  amf-headers
  avisynthplus
  clang
  git
  ladspa
  linux-api-headers
  nasm
)
optdepends=(
  'avisynthplus: AviSynthPlus support'
  'ladspa: LADSPA filters'
)
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavutil.so' 'libpostproc.so' 'libswscale.so' 'libswresample.so'
          'ffmpeg')
conflicts=('ffmpeg')
source=(
  'git+https://github.com/jernejsk/FFmpeg'
  'ffmpeg-build-fix-for-dav1d-1.0.0.patch'
)
sha256sums=(
  SKIP
  SKIP
)
_branch1='v4l2-request-hwaccel-4.4'
_branch2='v4l2-drmprime-v6'

prepare() {
  cd ${_srcname}

  git reset --hard
  git checkout $_branch1
  git -c "user.name=Your Name" -c "user.email=you@example.com" \
    merge --no-edit origin/$_branch2

  for bp in "${srcdir}"/ffmpeg-*.patch; do
    patch -Np1 -i $bp
  done

}

pkgver() {
  cd ${_srcname}
  (
    set -o pipefail
    _cnt1=$(git rev-list --count origin/$_branch1)
    _cnt2=$(git rev-list --count origin/$_branch2)
    printf "r%s.%s.%s" "$(( $_cnt1 + $_cnt2 ))" \
                       "$(git rev-parse --short origin/$_branch1)" \
                       "$(git rev-parse --short origin/$_branch2)"
  )
}

build() {
  cd ${_srcname}

  [[ $CARCH == "armv7h" || $CARCH == "aarch64" ]] && CONFIG='--host-cflags="-fPIC"'
  [[ $CARCH == "armv6h" || $CARCH == 'arm' ]] && CONFIG='--extra-libs="-latomic"'

  ./configure \
    --prefix=/usr \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --enable-amf \
    --enable-avisynth \
    --enable-cuda-llvm \
    --enable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-ladspa \
    --enable-libass \
    --enable-libbluray \
    --enable-libdav1d \
    --enable-libdrm \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libgsm \
    --enable-libiec61883 \
    --enable-libjack \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore_amrnb \
    --enable-libopencore_amrwb \
    --enable-libopenjpeg \
    --enable-libopus \
    --enable-libpulse \
    --enable-librsvg \
    --enable-libsoxr \
    --enable-libspeex \
    --enable-libsrt \
    --enable-libssh \
    --enable-libtheora \
    --enable-libv4l2 \
    --enable-libvidstab \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --enable-libxcb \
    --enable-libxml2 \
    --enable-libxvid \
    --enable-libzimg \
    --enable-shared \
    --enable-version3 \
    \
    --enable-v4l2_m2m \
    --enable-v4l2-request \
    --enable-libudev \
    --enable-omx \
    --enable-pic \
    --enable-neon \
    $CONFIG

  make
  make tools/qt-faststart
  make doc/ff{mpeg,play}.1
}

package() {
  cd ${_srcname}

  make DESTDIR="${pkgdir}" install install-man
  install -Dm 755 tools/qt-faststart "${pkgdir}"/usr/bin/
}
