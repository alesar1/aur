# Maintainer: Thomas Schneider <maxmusterm@gmail.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=ffmpeg-svt
pkgver=4.2.2
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video. SVT Patchset applied'
arch=(x86_64)
url=https://ffmpeg.org/
license=(GPL3)
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
  opencore-amr
  openjpeg2
  opus
  sdl2
  speex
  v4l-utils
  xz
  zlib
)
makedepends=(
  ffnvcodec-headers
  git
  ladspa
  nasm
  svt-av1
  svt-vp9
  svt-hevc
)
optdepends=('ladspa: LADSPA filters')
provides=(
  ffmpeg
  libavcodec.so
  libavdevice.so
  libavfilter.so
  libavformat.so
  libavutil.so
  libpostproc.so
  libswresample.so
  libswscale.so
)
replaces=('ffmpeg')
conflicts=('ffmpeg')
source=(git+https://git.ffmpeg.org/ffmpeg.git#tag=n${pkgver}
        "ffmpeg-full-add-svt-hevc-${_svt_hevc_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/v${_svt_hevc_ver}/ffmpeg_plugin/0001-lavc-svt_hevc-add-libsvt-hevc-encoder-wrapper.patch"
        "ffmpeg-full-add-svt-hevc-docs-${_svt_hevc_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/v${_svt_hevc_ver}/ffmpeg_plugin/0002-doc-Add-libsvt_hevc-encoder-docs.patch"
        "ffmpeg-full-add-svt-av1-${_svt_av1_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-AV1/v${_svt_av1_ver}/ffmpeg_plugin/0001-Add-ability-for-ffmpeg-to-run-svt-av1-with-svt-hevc.patch"
        "ffmpeg-full-add-svt-vp9-${_svt_vp9_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-VP9/v${_svt_vp9_ver}/ffmpeg_plugin/0001-Add-ability-for-ffmpeg-to-run-svt-vp9-with-svt-hevc-av1.patch")

sha256sums=('SKIP'
            '19825c7226c7300514715fc5048c2e6b04000f0c83f9c94688af1c095639bf2b')

prepare() {
  cd $srcdir/ffmpeg
    rm -f "ffmpeg-${pkgver}/libavcodec/"libsvt_{hevc,av1,vp9}.c
    sed -i 's/eb_init_handle/svt_av1_enc_init_handle/' "ffmpeg-full-add-svt-vp9-${_svt_vp9_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/ffmpeg-full-add-svt-hevc-${_svt_hevc_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/ffmpeg-full-add-svt-hevc-docs-${_svt_hevc_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/ffmpeg-full-add-svt-av1-${_svt_av1_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/ffmpeg-full-add-svt-vp9-${_svt_vp9_ver}.patch"
}

build() {
  cd ffmpeg

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
    --enable-libsvtav1


  make
  make tools/qt-faststart
  make doc/ff{mpeg,play}.1
}

package() {
  make DESTDIR="${pkgdir}" -C ffmpeg install install-man
  install -Dm 755 ffmpeg/tools/qt-faststart "${pkgdir}"/usr/bin/
}

# vim: ts=2 sw=2 et:
