# Maintainer: Francois Menning <f.menning@pm.me>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>
# Contributor: Daniel Bermond < yahoo-com: danielbermond >
# Contributor: Iacopo Isimbaldi <isiachi@rhye.it>
# Contributor: Ben Widawsky <ben@bwidawsk.net>

_srcname=ffmpeg
pkgname=ffmpeg-qsv
pkgver=4.1.2
pkgrel=1
pkgdesc='Complete solution to record, convert and stream audio and video (including qsv and libfdk-aac)'
arch=(x86_64)
url='https://www.ffmpeg.org/'
license=('GPL3' 'custom: nonfree and unredistributable')
depends=(
  alsa-lib
  aom
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
  libdrm
  libfreetype.so
  libiec61883
  libmodplug
  libomxil-bellagio
  libpulse
  libraw1394
  libsoxr
  libssh
  libtheora
  libva
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
  opencore-amr
  openjpeg2
  opus
  sdl2
  speex
  v4l-utils
  xz
  zlib
  libfdk-aac
  intel-media-sdk
)
makedepends=(
  ffnvcodec-headers
  opencl-headers
  git
  ladspa
  nasm
)
optdepends=(
  'ladspa: LADSPA filters'
  'libva-utils: Intel VA-API Media Applications and Scripts for libva'
  'libva-intel-driver: VA-API implementation for Intel G45 and HD Graphics family'
  'libva-mesa-driver: VA-API implementation for gallium'
  'compute-runtime: Intel(R) Graphics Compute Runtime for OpenCL(TM).'
  'beignet: OpenCL implementation for Intel IvyBridge+ iGPUs'
  'opencl-mesa: OpenCL support for AMD/ATI Radeon mesa drivers'
  'opencl-amd: OpenCL userspace driver as provided in the amdgpu-pro driver stack'
  'opencl-nvidia: OpenCL implemention for NVIDIA'
)
provides=(
  ffmpeg
  ffmpeg-libfdk_aac
  libavcodec.so
  libavdevice.so
  libavfilter.so
  libavformat.so
  libavutil.so
  libpostproc.so
  libswresample.so
  libswscale.so
)
conflicts=(
  ffmpeg
  ffmpeg-full-nvenc
  ffmpeg-nvenc
  ffmpeg-libfdk_aac
  ffmpeg-decklink
  ffmpeg-git
  ffmpeg-full-git
  ffmpeg-semifull-git
  ffmpeg-qsv-git
)
source=("git+https://git.ffmpeg.org/ffmpeg.git#tag=n${pkgver}" 'LICENSE')
sha256sums=('SKIP'
            '04a7176400907fd7db0d69116b99de49e582a6e176b3bfb36a03e50a4cb26a36')

build() {
  cd ffmpeg

  export PKG_CONFIG_PATH="${PKG_CONFIG_PATH:+${PKG_CONFIG_PATH}:}/opt/intel/mediasdk/lib64/pkgconfig"

  ./configure \
    --prefix='/usr' \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --enable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-ladspa \
    --enable-libaom \
    --enable-libass \
    --enable-libbluray \
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
    --enable-libsoxr \
    --enable-libspeex \
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
    --enable-nvdec \
    --enable-nvenc \
    --enable-omx \
    --enable-shared \
    --enable-version3 \
    --enable-nonfree \
    --enable-iconv \
    --enable-opencl \
    --enable-opengl \
    --enable-libfdk_aac \
    --enable-libmfx \
    --enable-vaapi \
    --enable-vdpau

  make
  make tools/qt-faststart
  make doc/ff{mpeg,play}.1
}

package() {
  make DESTDIR="${pkgdir}" -C ffmpeg install install-man
  install -Dm 755 ffmpeg/tools/qt-faststart "${pkgdir}"/usr/bin/
  install -Dm 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
