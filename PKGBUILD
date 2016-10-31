# $Id$
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

_pkgname=ffmpeg
pkgname=ffmpeg-headless
pkgver=3.2
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video; optimised for server (headless) systems'
arch=('i686' 'x86_64' 'armv7h' 'armv6h')
url='http://ffmpeg.org/'
license=('GPL3') #enabling libfdk_aac makes ffmpeg incompatible with the GPL!
depends=('bzip2' 'fontconfig' 'fribidi' 'glibc' 'gmp' 'gnutls' 'gsm'
		 'lame' 'libmodplug'
		 'libtheora'
		 'libwebp' 'opencore-amr' 'openjpeg2' 'opus'
		 'schroedinger' 'speex' 'v4l-utils' 'xz' 'zlib'
		 'libass.so' 'libbluray.so'
		 'libvorbisenc.so' 'libvorbis.so' 'libvpx.so'
		 'libx264.so' 'libx265.so' 'libxvidcore.so'
		 'rtmpdump')
optdepends=('vid.stab: Video stabilization library'
            'libfdk-aac: AAC-HE support'
            'libiec61883: FireWire DV/HDV support'
            'libavc1394: FireWire DV/HDV support'
            'netcdf: Binaural listening support'
            'libsoxr: SoX resampler library')
makedepends=('hardening-wrapper' 'yasm')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so' "ffmpeg")
conflicts=('ffmpeg')
replaces=('ffmpeg')
source=(https://ffmpeg.org/releases/${_pkgname}-${pkgver}.tar.xz)
sha256sums=('88f70c1b8cab108f494ecbab5ba302cdb35d59a84cea88008b5fe49be068d5da')

build() {
  cd ${_pkgname}-${pkgver}

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
	--enable-libass \
	--enable-libbluray \
	--enable-libfreetype \
	--enable-libfribidi \
	--enable-libgsm \
	--enable-libmodplug \
	--enable-libmp3lame \
	--enable-libopencore_amrnb \
	--enable-libopencore_amrwb \
	--enable-libopenjpeg \
	--enable-libopus \
	--enable-libschroedinger \
	--enable-libspeex \
	--enable-libtheora \
	--enable-libv4l2 \
	--enable-libvorbis \
	--enable-libvpx \
	--enable-libwebp \
	--enable-libx264 \
	--enable-libx265 \
	--enable-libxvid \
	--enable-shared \
	--enable-version3 \
	--enable-librtmp \
	--enable-runtime-cpudetect \
	--disable-ffplay \
	--disable-sdl2 \
	--disable-fontconfig \
	--disable-libfreetype \
	--disable-vdpau \
	--disable-vaapi \
	--disable-htmlpages #\
    #--enable-libiec61883
    #--enable-libsoxr \
    #--enable-libvidstab \
    #--enable-netcdf \
    #--enable-libfdk_aac \
    #--enable-nonfree

  make
}

package() {
  cd ${_pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
}
