# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Gleb Sinyavskiy <zhulik.gleb@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

# Documentation:
# https://docs.nvidia.com/video-technologies/video-codec-sdk/ffmpeg-with-nvidia-gpu/

pkgname=ffmpeg-cuda
pkgver=4.4.1
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video. Includes cuda support.'
arch=(x86_64)
url=https://ffmpeg.org/
license=('custom')
depends=(
  alsa-lib
  aom
  bzip2
  cuda
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
  libmfx
  libmodplug
  libpulse
  librav1e.so
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
  svt-av1
  v4l-utils
  vmaf
  xz
  zlib
)
makedepends=(
  amf-headers
  avisynthplus
  clang
  ffnvcodec-headers
  git
  ladspa
  nasm
)
optdepends=(
  'avisynthplus: AviSynthPlus support'
  'ladspa: LADSPA filters'
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
_tag=7e0d640edf6c3eee1816b105c2f7498c4f948e74
source=(
  git+https://git.ffmpeg.org/ffmpeg.git#tag=${_tag}
  vmaf-model-path.patch
)
sha256sums=('SKIP'
            '8dff51f84a5f7460f8893f0514812f5d2bd668c3276ef7ab7713c99b71d7bd8d')

pkgver() {
  cd ffmpeg

  git describe --tags | sed 's/^n//'
}

prepare() {
  cd ffmpeg
  git cherry-pick -n 988f2e9eb063db7c1a678729f58aab6eba59a55b # fix nvenc on older gpus
  patch -Np1 -i "${srcdir}"/vmaf-model-path.patch
}

build() {
  local _cflags='-I/opt/cuda/include'
  local _ldflags='-L/opt/cuda/lib64'
  local _nvccflags='-gencode arch=compute_52,code=sm_52 -O2'

  cd ffmpeg

  ./configure \
    --prefix=/usr \
    --extra-cflags="$_cflags" \
    --extra-ldflags="$_ldflags" \
    --nvccflags="$_nvccflags" \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --enable-amf \
    --enable-avisynth \
    --enable-nonfree \
    --enable-cuda-nvcc \
    --enable-libnpp \
    --enable-lto \
    --enable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-ladspa \
    --enable-libaom \
    --enable-libass \
    --enable-libbluray \
    --enable-libdav1d \
    --enable-libdrm \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libgsm \
    --enable-libiec61883 \
    --enable-libjack \
    --enable-libmfx \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore_amrnb \
    --enable-libopencore_amrwb \
    --enable-libopenjpeg \
    --enable-libopus \
    --enable-libpulse \
    --enable-librav1e \
    --enable-librsvg \
    --enable-libsoxr \
    --enable-libspeex \
    --enable-libsrt \
    --enable-libssh \
    --enable-libsvtav1 \
    --enable-libtheora \
    --enable-libv4l2 \
    --enable-libvidstab \
    --enable-libvmaf \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --enable-libxcb \
    --enable-libxml2 \
    --enable-libxvid \
    --enable-libzimg \
    --enable-nvdec \
    --enable-nvenc \
    --enable-shared \
    --enable-version3

  make
  make tools/qt-faststart
  make doc/ff{mpeg,play}.1
}

package() {
  make DESTDIR="${pkgdir}" -C ffmpeg install install-man
  install -Dm 755 ffmpeg/tools/qt-faststart "${pkgdir}"/usr/bin/

  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
