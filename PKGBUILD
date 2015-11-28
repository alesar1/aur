# Maintainer: Dmitry Kharitonov <darksab0r at gmail com>
# Contributor: rcpoison <rc dot poison at gmail dot com>
# Contributor: Gerad Munsch <gmunsch@unforgivendevelopment.com>
# Contributor: Rudolf Polzer <divVerent[at]xonotic[dot]org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=ffmpeg-full-nvenc
_pkgbasename=ffmpeg
pkgver=2.8.3
pkgrel=1
epoch=1
pkgdesc="Record, convert, and stream audio and video (all codecs including Nvidia NVENC)"
arch=('i686' 'x86_64')
url="http://ffmpeg.org/"
license=('GPL' 'custom:UNREDISTRIBUTABLE')
depends=('alsa-lib' 'bzip2' 'celt' 'faac' 'fontconfig' 'frei0r-plugins' 'fribidi' 
         'gnutls' 'gsm' 'jack' 'ladspa' 'lame' 'libaacplus' 'libass' 'libavc1394' 
         'libbluray' 'libbs2b' 'libcaca' 'libcdio-paranoia' 'libcl' 'libdc1394'
         'libfdk-aac' 'libgme' 'libiec61883' 'libmodplug' 'libpulse' 'libsoxr' 
         'libutvideo-git' 'libssh' 'libtheora' 'libva' 'libvdpau' 'libwebp'
         'libxv' 'mesa' 'openal' 'opencore-amr' 
         'openjpeg' 'opus' 'schroedinger' 'sdl' 'speex' 'rtmpdump' 'shine'
         'twolame' 'v4l-utils' 'vid.stab' 'vo-aacenc' 'vo-amrwbenc' 'xvidcore' 
         'wavpack' 'zeromq' 'zlib' 'zvbi' 'libdcadec.so'
         'libvorbisenc.so' 'libvorbis.so' 'libvpx.so' 'libx264.so' 'libx265.so')
makedepends=('hardening-wrapper' 'libvdpau' 'nvenc-api' 'yasm')
optdepends=('avxsynth-git: for Avisynth support'
            'cuda: for CUDA support')
conflicts=('ffmpeg' 'ffmpeg-full' 'ffmpeg-git' 'ffmpeg-full-git' 'ffmpeg-full-extra')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so' 'ffmpeg' 'qt-faststart')
source=(http://ffmpeg.org/releases/$_pkgbasename-$pkgver.tar.bz2{,.asc}
        'UNREDISTRIBUTABLE.txt'
        'ffmpeg-2.8.1-libvpxenc-remove-some-unused-ctrl-id-mappings.patch')
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')
sha256sums=('1bcf993a71839bb4a37eaa0c51daf315932b6dad6089f672294545cc51a5caf6'
            'SKIP'
            'e0c1b126862072a71e18b9580a6b01afc76a54aa6e642d2c413ba0ac9d3010c4'
            '277994aca5a6e40c1a90750859828817e0646bfb28142fdb34d5f9d3196c3f7a')

prepare() {
  cd $_pkgbasename-$pkgver

  patch -p1 -i ../ffmpeg-2.8.1-libvpxenc-remove-some-unused-ctrl-id-mappings.patch
}

build() {
  cd $_pkgbasename-$pkgver

  msg "Starting configure..."
  ./configure \
    --enable-shared \
    --disable-debug \
    --disable-static \
    --prefix=/usr \
    --enable-avisynth \
    --enable-avresample \
    --enable-decoder=atrac3 \
    --enable-decoder=atrac3p \
    --enable-bzlib \
    --enable-dxva2 \
    --enable-fontconfig \
    --enable-frei0r \
    --enable-gnutls \
    --enable-gpl \
    --enable-gray \
    --enable-iconv \
    --enable-ladspa \
    --enable-libaacplus \
    --enable-libass \
    --enable-libbluray \
    --enable-libbs2b \
    --enable-libcaca \
    --enable-libcdio \
    --enable-libcelt \
    --enable-libdc1394 \
    --enable-libdcadec \
    --enable-libfaac \
    --enable-libfdk-aac \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libgme \
    --enable-libgsm \
    --enable-libiec61883 \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore-amrnb \
    --enable-libopencore-amrwb \
    --enable-libopencv \
    --enable-libopenjpeg \
    --enable-libopus \
    --enable-libpulse \
    --enable-libschroedinger \
    --enable-libshine \
    --enable-libsoxr \
    --enable-libspeex \
    --enable-libssh \
    --enable-libtheora \
    --enable-libtwolame \
    --enable-libutvideo \
    --enable-libv4l2 \
    --enable-libvidstab \
    --enable-libvo-aacenc \
    --enable-libvo-amrwbenc \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwavpack \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --enable-libxvid \
    --enable-libzmq \
    --enable-libzvbi \
    --enable-nonfree \
    --enable-nvenc \
    --enable-openal \
    --enable-opengl \
    --enable-openssl \
    --enable-postproc\
    --enable-runtime-cpudetect \
    --enable-vaapi \
    --enable-vda \
    --enable-vdpau \
    --enable-version3 \
    --enable-x11grab \
    --enable-zlib \

  msg "Starting make"
  make
  make tools/qt-faststart
  make doc/ff{mpeg,play,server}.1
}

package() {
  cd ffmpeg-$pkgver
  make DESTDIR="$pkgdir" install install-man
  install -Dm755 tools/qt-faststart "$pkgdir/usr/bin/qt-faststart"
  install -Dm644 "$srcdir"/UNREDISTRIBUTABLE.txt "$pkgdir/usr/share/licenses/$pkgname/UNREDISTRIBUTABLE.txt"
}
