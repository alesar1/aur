# $Id: PKGBUILD 279478 2016-10-30 16:53:01Z alucryd $
# Maintainer: Jan Koppe <post@jankoppe.de>
#
# This package is a modified version of extra/ffmpeg with --enable-decklink
# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=ffmpeg-decklink
pkgver=3.2.2
pkgrel=2
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video'
arch=('i686' 'x86_64')
url='http://ffmpeg.org/'
license=('GPL3')
depends=('alsa-lib' 'bzip2' 'decklink' 'fontconfig' 'fribidi' 'glibc' 'gmp' 'gnutls' 'gsm'
         'jack' 'lame' 'libavc1394' 'libiec61883' 'libmodplug' 'libpulse'
         'libraw1394' 'libsoxr' 'libssh' 'libtheora' 'libva' 'libvdpau'
         'libwebp' 'libx11' 'libxcb' 'opencore-amr' 'openjpeg2' 'opus'
         'schroedinger' 'sdl2' 'speex' 'v4l-utils' 'xz' 'zlib'
         'libass.so' 'libbluray.so' 'libfreetype.so' 'libnetcdf.so'
         'libvidstab.so' 'libvorbisenc.so' 'libvorbis.so' 'libvpx.so'
         'libx264.so' 'libx265.so' 'libxvidcore.so')
makedepends=('decklink-sdk' 'hardening-wrapper' 'ladspa' 'libvdpau' 'yasm')
optdepends=('ladspa: LADSPA filters')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so')
conflicts=('ffmpeg')
provides=('ffmpeg')
source=("https://ffmpeg.org/releases/ffmpeg-${pkgver}.tar.xz"{,.asc})
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')
sha256sums=('3f01bd1fe1a17a277f8c84869e5d9192b4b978cb660872aa2b54c3cc8a2fedfc'
            'SKIP')

build() {
  cd ffmpeg-${pkgver}

  ./configure \
    --prefix='/usr' \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --extra-cflags="-I/usr/src/decklink-sdk" \
    --extra-ldflags="-L/usr/src/decklink-sdk" \
    --enable-avisynth \
    --enable-avresample \
    --enable-decklink \
    --enable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-ladspa \
    --enable-libass \
    --enable-libbluray \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libgsm \
    --enable-libiec61883 \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore_amrnb \
    --enable-libopencore_amrwb \
    --enable-libopenjpeg \
    --enable-libopus \
    --enable-libpulse \
    --enable-libschroedinger \
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
    --enable-libxvid \
    --enable-netcdf \
    --enable-shared \
    --enable-version3 \
    --enable-x11grab

  make
  make tools/qt-faststart
  make doc/ff{mpeg,play,server}.1
}

package() {
  cd ffmpeg-${pkgver}

  make DESTDIR="${pkgdir}" install install-man
  install -Dm 755 tools/qt-faststart "${pkgdir}"/usr/bin/
}

# vim: ts=2 sw=2 et:
