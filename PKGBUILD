#
# Maintainer: Iacopo Isimbaldi <isiachi@rhye.it>
#

pkgname=ffmpeg-full
pkgver=3.2
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video (with all options)'
arch=('i686' 'x86_64')
url='http://ffmpeg.org/'
license=('GPL3' 'custom:UNREDISTRIBUTABLE')
depends=('alsa-lib' 'bzip2' 'fontconfig' 'fribidi' 'glibc' 'gmp' 'gnutls' 'gsm'
         'jack' 'lame' 'libavc1394' 'libiec61883' 'libmodplug' 'libpulse'
         'libraw1394' 'libsoxr' 'libssh' 'libtheora' 'libva' 'libvdpau'
         'libwebp' 'libx11' 'libxcb' 'opencore-amr' 'openjpeg2' 'opus'
         'schroedinger' 'sdl2' 'speex' 'v4l-utils' 'xz' 'zlib'
         'libass.so' 'libbluray.so' 'libfreetype.so' 'libnetcdf.so'
         'libvidstab.so' 'libvorbisenc.so' 'libvorbis.so' 'libvpx.so'
         'libx264.so' 'libx265.so' 'libxvidcore.so'
         'celt' 'chromaprint-fftw' 'faac' 'frei0r-plugins' 'kvazaar'
         'ladspa' 'libbs2b' 'libcaca' 'libcdio-paranoia' 'libcl' 'libdc1394'
         'libebur128' 'libfdk-aac' 'libgme' 'libilbc' 'libmfx-git' 'libopenmpt'
         'libxv' 'java-environment-common' 'mesa' 'nut-multimedia-git' 'openal'
         'opencl-headers' 'openh264' 'rubberband' 'rtmpdump' 'shine'
         'smbclient' 'snappy' 'tesseract' 'twolame' 'vid.stab' 'vo-aacenc'
         'vo-amrwbenc' 'wavpack' 'xavs' 'zeromq' 'zimg' 'zvbi')
makedepends=('hardening-wrapper' 'intel-media-sdk' 'libvdpau' 'yasm')
optdepends=('intel-media-sdk: for Intel QSV encoding/decoding')
conflicts=('ffmpeg' 'ffmpeg-git' 'ffmpeg-full-git')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so'
          'ffmpeg')
source=(https://ffmpeg.org/releases/ffmpeg-$pkgver.tar.xz{,.asc}
        UNREDISTRIBUTABLE.txt)
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8') # ffmpeg-devel
sha256sums=('88f70c1b8cab108f494ecbab5ba302cdb35d59a84cea88008b5fe49be068d5da'
            'SKIP'
            'e0c1b126862072a71e18b9580a6b01afc76a54aa6e642d2c413ba0ac9d3010c4')

build() {
  cd ${pkgname%-full}-$pkgver

  ./configure \
    --prefix=/usr \
    --extra-cflags="-I/usr/lib/jvm/$(archlinux-java get)/include \
                    -I/usr/lib/jvm/$(archlinux-java get)/include/linux" \
    --extra-ldflags="-Wl,-rpath -Wl,/opt/intel/mediasdk/lib64" \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --enable-avisynth \
    --enable-avresample \
    --enable-chromaprint \
    --enable-decoder=atrac3 \
    --enable-decoder=atrac3p \
    --enable-frei0r \
    --enable-gcrypt \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-gray \
    --enable-jni \
    --enable-ladspa \
    --enable-libass \
    --enable-libbluray \
    --enable-libbs2b \
    --enable-libcaca \
    --enable-libcdio \
    --enable-libcelt \
    --enable-libdc1394 \
    --enable-libebur128 \
    --enable-libfdk-aac \
    --enable-libfontconfig \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libgme \
    --enable-libgsm \
    --enable-libiec61883 \
    --enable-libilbc \
    --enable-libkvazaar \
    --enable-libmfx \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libnut \
    --enable-libopencore-amrnb \
    --enable-libopencore-amrwb \
    --enable-libopencv \
    --enable-libopenh264 \
    --enable-libopenjpeg \
    --enable-libopenmpt \
    --enable-libopus \
    --enable-libpulse \
    --enable-librtmp \
    --enable-librubberband \
    --enable-libschroedinger \
    --enable-libshine \
    --enable-libsmbclient \
    --enable-libsnappy \
    --enable-libsoxr \
    --enable-libspeex \
    --enable-libssh \
    --enable-libtesseract \
    --enable-libtheora \
    --enable-libtwolame \
    --enable-libv4l2 \
    --enable-libvidstab \
    --enable-libvo-amrwbenc \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwavpack \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --enable-libxavs \
    --enable-libxcb \
    --enable-libxcb-shape \
    --enable-libxcb-shm \
    --enable-libxcb-xfixes \
    --enable-libxvid \
    --enable-libzimg \
    --enable-libzmq \
    --enable-libzvbi \
    --enable-netcdf \
    --enable-nonfree \
    --enable-omx \
    --enable-openal \
    --enable-opencl \
    --enable-opengl \
    --enable-openssl \
    --enable-runtime-cpudetect \
    --enable-shared \
    --enable-swresample \
    --enable-vaapi \
    --enable-vdpau \
    --enable-version3

  make
  make tools/qt-faststart
  make doc/ff{mpeg,play,server}.1
}

package() {
  cd ${pkgname%-full}-$pkgver

  make DESTDIR="$pkgdir" install install-man
  install -Dm755 tools/qt-faststart "$pkgdir"/usr/bin/qt-faststart
  install -Dm644 "$srcdir"/UNREDISTRIBUTABLE.txt "$pkgdir/usr/share/licenses/$pkgname/UNREDISTRIBUTABLE.txt"
}

# vim:set ts=2 sw=2 et:
