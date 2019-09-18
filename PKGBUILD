# Maintainer : Daniel Bermond < gmail-com: danielbermond >
# Contributor: Iacopo Isimbaldi <isiachi@rhye.it>

_svt_hevc_ver='1.4.1'
_svt_av1_ver='0.6.0'
_svt_vp9_ver='ce245894c6fc1c5d1439c41a7dda8d6dc61784c4'

pkgname=ffmpeg-full
pkgver=4.2.1
pkgrel=2
pkgdesc='Complete solution to record, convert and stream audio and video (all possible features including nvenc, qsv and libfdk-aac)'
arch=('x86_64')
url='https://www.ffmpeg.org/'
license=('custom: nonfree and unredistributable')
depends=(
    # official repositories:
        'glibc' 'alsa-lib' 'jack' 'libpng'
        'bzip2' 'frei0r-plugins' 'libgcrypt' 'gmp' 'gnutls' 'ladspa' 'libass' 'aom'
        'aribb24' 'libbluray' 'libbs2b' 'libcaca' 'celt' 'libcdio-paranoia' 'dav1d'
        'libdc1394' 'libavc1394' 'libfdk-aac' 'fontconfig' 'freetype2' 'fribidi'
        'libgme' 'gsm' 'libiec61883' 'lensfun' 'libmodplug' 'lame' 'opencore-amr'
        'openjpeg2' 'opus' 'pulseaudio' 'librsvg' 'rubberband' 'rtmpdump' 'snappy'
        'libsoxr' 'speex' 'srt' 'libssh' 'tensorflow' 'tesseract' 'libtheora'
        'twolame' 'v4l-utils' 'vid.stab' 'libvorbis' 'libvpx' 'wavpack' 'libwebp'
        'libx264.so'  'x265' 'libxcb' 'xvidcore' 'libxml2' 'zimg' 'zeromq' 'zvbi'
        'lv2' 'lilv' 'xz' 'openal' 'ocl-icd' 'libgl' 'sndio' 'sdl2' 'vapoursynth'
        'libxv' 'libx11'  'libxext' 'zlib' 'cuda' 'libomxil-bellagio' 'libva'
        'libdrm' 'libvdpau' 'svt-hevc' 'svt-av1'
    # AUR:
        'chromaprint-fftw' 'codec2' 'davs2' 'flite1-patched' 'libilbc'
        'libklvanc-git' 'kvazaar' 'openh264' 'libopenmpt-svn' 'shine' 'vo-amrwbenc'
        'xavs' 'xavs2' 'libmysofa' 'pocketsphinx' 'intel-media-sdk' 'rockchip-mpp'
        'svt-vp9-git'
)
makedepends=(
    # official repositories:
        'nasm' 'opencl-headers' 'ffnvcodec-headers'
    # AUR:
        'vmaf' 'blackmagic-decklink-sdk'
)
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavutil.so' 'libpostproc.so' 'libavresample.so' 'libswscale.so'
          'libswresample.so' 'ffmpeg')
conflicts=('ffmpeg')
source=("https://ffmpeg.org/releases/ffmpeg-${pkgver}.tar.xz"{,.asc}
        "ffmpeg-full-add-svt-hevc-${_svt_hevc_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/v${_svt_hevc_ver}/ffmpeg_plugin/0001-lavc-svt_hevc-add-libsvt-hevc-encoder-wrapper.patch"
        "ffmpeg-full-add-svt-hevc-docs-${_svt_hevc_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/v${_svt_hevc_ver}/ffmpeg_plugin/0002-doc-Add-libsvt_hevc-encoder-docs.patch"
        "ffmpeg-full-add-svt-av1-${_svt_av1_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-AV1/v${_svt_av1_ver}/ffmpeg_plugin/0001-Add-ability-for-ffmpeg-to-run-svt-av1-with-svt-hevc.patch"
        "ffmpeg-full-add-svt-vp9-g${_svt_vp9_ver:0:7}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-VP9/${_svt_vp9_ver}/ffmpeg_plugin/0001-Add-ability-for-ffmpeg-to-run-svt-vp9-with-svt-hevc-av1.patch"
        'LICENSE')
sha256sums=('cec7c87e9b60d174509e263ac4011b522385fd0775292e1670ecc1180c9bb6d4'
            'SKIP'
            'd2db0acbdb0773f3883746cd25996905ff0a3f539d9b434fe314f883856ad883'
            '1499e419dda72b1604dc5e3959668f3843292ff56bfba78734e31510ba576de0'
            '102a70c5c453875f5806ce02cc83fdc74e53c078cf5be2657f3dd1dd4438868c'
            '7690a4f6bdc4a57e35c7ff5b6e87f2fe6d056d452eff9e767eaccff41832f4d7'
            '04a7176400907fd7db0d69116b99de49e582a6e176b3bfb36a03e50a4cb26a36')
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')

prepare() {
    cd "ffmpeg-${pkgver}"
    
    # add svt codec support for hevc, av1 and vp9
    patch -Np1 -i "${srcdir}/ffmpeg-full-add-svt-hevc-${_svt_hevc_ver}.patch"
    patch -Np1 -i "${srcdir}/ffmpeg-full-add-svt-hevc-docs-${_svt_hevc_ver}.patch"
    patch -Np1 -i "${srcdir}/ffmpeg-full-add-svt-av1-${_svt_av1_ver}.patch"
    patch -Np1 -i "${srcdir}/ffmpeg-full-add-svt-vp9-g${_svt_vp9_ver:0:7}.patch"
}

build() {
    cd "ffmpeg-${pkgver}"
    
    local _ldflags='-L/opt/cuda/lib64'
    
    export PKG_CONFIG_PATH="${PKG_CONFIG_PATH:+${PKG_CONFIG_PATH}:}/opt/intel/mediasdk/lib/pkgconfig"
        
    # set path of -lcuda on systems with legacy nvidia-340xx drivers
    # (libcuda.so.x, required by --enable-cuda-sdk)
    if pacman -Qs '^nvidia-340xx-utils' >/dev/null 2>&1
    then
        _ldflags+=' -L/usr/lib/nvidia'
    fi
    
    printf '%s\n' '  -> Running ffmpeg configure script...'
    
    ./configure \
        --prefix='/usr' \
        --extra-cflags='-I/opt/cuda/include -I/usr/include/tensorflow' \
        --extra-ldflags="$_ldflags" \
        \
        --disable-rpath \
        --enable-gpl \
        --enable-version3 \
        --enable-nonfree \
        --enable-shared \
        --disable-static \
        --disable-stripping \
        --enable-gray \
        --enable-avresample \
        \
        --enable-alsa \
        --enable-avisynth \
        --enable-bzlib \
        --enable-chromaprint \
        --enable-frei0r \
        --enable-gcrypt \
        --enable-gmp \
        --enable-gnutls \
        --enable-iconv \
        --enable-ladspa \
        --enable-libaom \
        --enable-libaribb24 \
        --enable-libass \
        --enable-libbluray \
        --enable-libbs2b \
        --enable-libcaca \
        --enable-libcelt \
        --enable-libcdio \
        --enable-libcodec2 \
        --enable-libdav1d \
        --enable-libdavs2 \
        --enable-libdc1394 \
        --enable-libfdk-aac \
        --enable-libflite \
        --enable-fontconfig \
        --enable-libfreetype \
        --enable-libfribidi \
        --enable-libgme \
        --enable-libgsm \
        --enable-libiec61883 \
        --enable-libilbc \
        --enable-libjack \
        --enable-libklvanc \
        --enable-libkvazaar \
        --enable-liblensfun \
        --enable-libmodplug \
        --enable-libmp3lame \
        --enable-libopencore-amrnb \
        --enable-libopencore-amrwb \
        --disable-libopencv \
        --enable-libopenh264 \
        --enable-libopenjpeg \
        --enable-libopenmpt \
        --enable-libopus \
        --enable-libpulse \
        --enable-librsvg \
        --enable-librubberband \
        --enable-librtmp  \
        --enable-libshine \
        --disable-libsmbclient \
        --enable-libsnappy \
        --enable-libsoxr \
        --enable-libspeex \
        --enable-libsrt \
        --enable-libssh \
        --enable-libsvthevc \
        --enable-libsvtav1 \
        --enable-libsvtvp9 \
        --enable-libtensorflow \
        --enable-libtesseract \
        --enable-libtheora \
        --disable-libtls \
        --enable-libtwolame \
        --enable-libv4l2 \
        --enable-libvidstab \
        --enable-libvmaf \
        --enable-libvo-amrwbenc \
        --enable-libvorbis \
        --enable-libvpx \
        --enable-libwavpack \
        --enable-libwebp \
        --enable-libx264 \
        --enable-libx265 \
        --enable-libxavs \
        --enable-libxavs2 \
        --enable-libxcb \
        --enable-libxcb-shm \
        --enable-libxcb-xfixes \
        --enable-libxcb-shape \
        --enable-libxvid \
        --enable-libxml2 \
        --enable-libzimg \
        --enable-libzmq \
        --enable-libzvbi \
        --enable-lv2 \
        --enable-lzma \
        --enable-decklink \
        --disable-mbedtls \
        --enable-libmysofa \
        --enable-openal \
        --enable-opencl \
        --enable-opengl \
        --disable-openssl \
        --enable-pocketsphinx \
        --enable-sndio \
        --enable-sdl2 \
        --enable-vapoursynth \
        --enable-xlib \
        --enable-zlib \
        \
        --enable-cuda-nvcc \
        --enable-cuvid \
        --enable-ffnvcodec \
        --enable-libdrm \
        --enable-libmfx \
        --enable-libnpp \
        --enable-nvdec \
        --enable-nvenc \
        --enable-omx \
        --enable-omx-rpi \
        --enable-rkmpp \
        --enable-v4l2-m2m \
        --enable-vaapi \
        --enable-vdpau
        
    make
    make tools/qt-faststart
}

package() {
    cd "ffmpeg-${pkgver}"
    
    make DESTDIR="$pkgdir" install
    
    install -D -m755 tools/qt-faststart  -t "${pkgdir}/usr/bin"
    install -D -m644 "${srcdir}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
