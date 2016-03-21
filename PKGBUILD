# Maintainer: Dmitry Kharitonov <darksab0r at gmail com>
# Contributor: Daniel Bermond < yahoo-com: danielbermond >
# Contributor: rcpoison <rc dot poison at gmail dot com>
# Contributor: Gerad Munsch <gmunsch@unforgivendevelopment.com>
# Contributor: Rudolf Polzer <divVerent[at]xonotic[dot]org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=ffmpeg-full-nvenc
_pkgbasename=ffmpeg
pkgver=3.0
pkgrel=7
epoch=1
pkgdesc="Record, convert, and stream audio and video (all codecs including Nvidia NVENC)"
arch=('i686' 'x86_64')
url="http://ffmpeg.org/"
license=('GPL' 'custom:UNREDISTRIBUTABLE')
depends=('alsa-lib' 'bzip2' 'celt' 'chromaprint' 'faac' 'fontconfig'
         'frei0r-plugins' 'fribidi' 'gnutls' 'gsm' 'jack' 'kvazaar' 'ladspa' 'lame' 'libass' 
         'libavc1394'  'libbluray' 'libbs2b' 'libcaca' 'libcdio-paranoia' 'libcl' 'libdc1394'
         'libfdk-aac' 'libgme' 'libiec61883' 'libilbc' 'libmfx-git' 'libmodplug' 'libpulse' 
         'libsoxr' 'libutvideo-git' 'libssh' 'libtheora' 'libva' 'libvdpau' 'libwebp'
         'libxv' 'mesa' 'netcdf' 'nut-multimedia-git' 'openal' 'opencore-amr' 'opencl-headers'
         'openjpeg' 'opus' 'rubberband' 'rtmpdump' 'schroedinger' 'sdl' 'smbclient' 'speex' 'shine'
         'tesseract' 'twolame' 'v4l-utils' 'vid.stab' 'vo-amrwbenc' 'libxcb' 'xvidcore' 
         'wavpack' 'zeromq' 'zimg' 'zlib' 'zvbi' 'libdcadec.so'
         'libvorbisenc.so' 'libvorbis.so' 'libvpx.so' 'libx264.so' 'x265'
         'snappy' 'openh264' 'xavs')
depends_x86_64=('cuda')
makedepends=('hardening-wrapper' 'libvdpau' 'nvidia-sdk' 'yasm')
optdepends=('avxsynth-git: for Avisynth support'
            'chromaprint-fftw: for chromaprint which uses fftw for FFT calculations')
optdepends_x86_64=('intel-media-sdk: for Intel QSV support (Experimental! See PKGBUILD of that package for additional info)')
conflicts=('ffmpeg' 'ffmpeg-full' 'ffmpeg-git' 'ffmpeg-full-git' 'ffmpeg-full-extra')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so' 'ffmpeg' 'qt-faststart')
source=(http://ffmpeg.org/releases/$_pkgbasename-$pkgver.tar.bz2{,.asc}
        'UNREDISTRIBUTABLE.txt')
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')
sha256sums=('f19ff77a2f7f736a41dd1499eef4784bf3cb7461f07c13a268164823590113c0'
            'SKIP'
            'e0c1b126862072a71e18b9580a6b01afc76a54aa6e642d2c413ba0ac9d3010c4')

build() {
  cd $_pkgbasename-$pkgver

  # Add x86_64 (opt)depends to the build
  if [ "$CARCH" = "x86_64" ]; then
      _cuda="--enable-cuda"
      _cudainc="-I/opt/cuda/include"
      _cudalib="-L/opt/cuda/lib64"
      _intelsdklib="-Wl,-rpath -Wl,/opt/intel/mediasdk/lib64"
  else
      _cuda=""
      _cudainc=""
      _cudalib=""
     _intelsdklib=""
  fi

  msg "Starting configure..."
  ./configure \
    --prefix=/usr \
    --extra-cflags="-I/usr/include/nvidia-sdk" \
    --extra-ldflags="${_intelsdklib}" \
    \
    --enable-rpath \
    --enable-gpl \
    --enable-version3 \
    --enable-nonfree \
    --disable-static \
    --enable-shared \
    --enable-avresample \
    \
    --enable-avisynth \
    --enable-chromaprint \
    --enable-decoder=atrac3 \
    --enable-decoder=atrac3p \
    --enable-bzlib \
    --enable-fontconfig \
    --enable-frei0r \
    --enable-gnutls \
    --enable-gpl \
    --enable-gray \
    --enable-iconv \
    --enable-ladspa \
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
    --enable-libopus \
    --enable-libpulse \
    --enable-librubberband \
    --enable-librtmp  \
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
    --enable-libutvideo \
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
    --enable-libxcb-shm \
    --enable-libxcb-xfixes \
    --enable-libxcb-shape \
    --enable-libxvid \
    --enable-libzimg \
    --enable-libzmq \
    --enable-libzvbi \
    --enable-netcdf \
    --enable-nvenc \
    --enable-openal \
    --enable-opencl \
    --enable-opengl \
    --enable-openssl \
    --enable-x11grab
    
  msg "Starting make"
  make
  make tools/qt-faststart
  make doc/ff{mpeg,play,server}.1
}

package() {
  cd $_pkgbasename-$pkgver
  make DESTDIR="$pkgdir" install install-man
  install -Dm 755 tools/qt-faststart "${pkgdir}"/usr/bin/
  install -Dm 644 "$srcdir"/UNREDISTRIBUTABLE.txt "$pkgdir/usr/share/licenses/$pkgname/UNREDISTRIBUTABLE.txt"
}
