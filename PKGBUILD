# $Id$
# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>
# Contributor: Frédéric Mangano <fmang+aur@mg0.fr>

# ALARM: Kevin Mihelich <kevin@archlinuxarm.org>
#  - use -fPIC in host cflags for armv7 to fix print_options.c compile
# Upstream: https://raw.githubusercontent.com/archlinuxarm/PKGBUILDs/master/extra/ffmpeg/PKGBUILD

pkgname=ffmpeg-mmal
pkgver=3.1.3
pkgrel=1
epoch=1
pkgdesc='ffmpeg built with MMAL hardware acceleration support'
arch=('i686' 'x86_64' 'armv7h')
url='http://ffmpeg.org/'
license=('GPL3')
depends=('alsa-lib' 'bzip2' 'fontconfig' 'fribidi' 'gnutls' 'gsm' 'lame'
         'libass' 'libavc1394' 'libbluray' 'libiec61883' 'libmodplug'
         'libpulse' 'libsoxr' 'libssh' 'libtheora' 'libva' 'libvdpau' 'libwebp'
         'netcdf' 'opencore-amr' 'openjpeg' 'opus' 'schroedinger' 'sdl' 'speex'
         'v4l-utils' 'xvidcore' 'zlib'
         'libvidstab.so' 'libvorbis.so' 'libvorbisenc.so' 'libvpx.so'
         'libx264.so' 'libx265.so'
         'raspberrypi-firmware-tools')
makedepends=('hardening-wrapper' 'ladspa' 'libvdpau' 'yasm')
optdepends=('ladspa: LADSPA filters')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so' 'ffmpeg')
conflicts=('ffmpeg')
source=(http://ffmpeg.org/releases/ffmpeg-${pkgver}.tar.bz2{,.asc})
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')
sha256sums=('58bc89c65dd114d874efbf76f76368d03b5e407f0a3f42d5b40801c280968a38'
            'SKIP')

build() {
  cd ffmpeg-${pkgver}

  [[ $CARCH == "armv7h" || $CARCH == "aarch64" ]] && CONFIG='--host-cflags="-fPIC"'

  ./configure \
    --prefix='/usr' \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --enable-avisynth \
    --enable-avresample \
    --enable-fontconfig \
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
    --enable-mmal \
    --enable-netcdf \
    --enable-shared \
    --enable-version3 \
    --enable-x11grab \
    $CONFIG

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
