# Maintainer : Daniel Bermond <dbermond@archlinux.org>
# Contributor: Iacopo Isimbaldi <isiachi@rhye.it>

_svt_hevc_ver='1.5.0'
_svt_av1_ver='0.8.4'
_svt_vp9_ver='0.2.2'

pkgname=ffmpeg-full
pkgver=4.3.1
pkgrel=7
pkgdesc='Complete solution to record, convert and stream audio and video (all possible features including libfdk-aac)'
arch=('x86_64')
url='https://www.ffmpeg.org/'
license=('custom: nonfree and unredistributable')
depends=(
    # official repositories:
        'alsa-lib' 'avisynthplus' 'bzip2' 'frei0r-plugins' 'libgcrypt' 'gmp' 'gnutls'
        'ladspa' 'libass' 'aom' 'aribb24' 'libbluray' 'libbs2b' 'libcaca' 'celt'
        'libcdio-paranoia' 'codec2' 'dav1d' 'libdc1394' 'libavc1394' 'libfdk-aac'
        'fontconfig' 'freetype2' 'fribidi' 'glslang' 'libgme' 'gsm' 'libiec61883'
        'libilbc' 'jack' 'kvazaar' 'lensfun' 'libmodplug' 'lame' 'opencore-amr'
        'openjpeg2' 'opus' 'pulseaudio' 'librabbitmq-c' 'rav1e' 'librsvg' 'rubberband'
        'rtmpdump' 'snappy' 'libsoxr' 'speex' 'srt' 'libssh' 'svt-hevc' 'svt-av1'
        'svt-vp9' 'tensorflow' 'tesseract' 'libtheora' 'twolame' 'v4l-utils'
        'vid.stab' 'vmaf' 'libvorbis' 'libvpx' 'wavpack' 'libwebp' 'x264' 'x265'
        'libxcb' 'xvidcore' 'libxml2' 'zimg' 'zeromq' 'zvbi' 'lv2' 'lilv' 'xz'
        'libmysofa' 'openal' 'ocl-icd' 'libgl' 'sndio' 'sdl2' 'vapoursynth'
        'vulkan-icd-loader' 'libxv' 'libx11'  'libxext' 'zlib' 'cuda'
        'libomxil-bellagio' 'libdrm' 'intel-media-sdk' 'libva' 'libvdpau'
    # AUR:
        'chromaprint-fftw' 'davs2' 'flite1-patched' 'libklvanc-git' 'openh264'
        'libopenmpt-svn' 'shine' 'vo-amrwbenc' 'xavs' 'xavs2' 'pocketsphinx'
)
makedepends=(
    # official repositories:
        'nasm' 'opencl-headers' 'vulkan-headers' 'ffnvcodec-headers' 'clang'
    # AUR:
        'decklink-sdk' 'amf-headers'
)
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavutil.so' 'libpostproc.so' 'libavresample.so' 'libswscale.so'
          'libswresample.so' 'ffmpeg')
conflicts=('ffmpeg')
source=("https://ffmpeg.org/releases/ffmpeg-${pkgver}.tar.xz"{,.asc}
        '010-ffmpeg-fix-vmaf-model-path.patch'
        '015-ffmpeg-cuda11.0-fix.patch'
        '016-ffmpeg-srt-1.4.2-fix.patch'::'https://git.ffmpeg.org/gitweb/ffmpeg.git/patch/7c59e1b0f285cd7c7b35fcd71f49c5fd52cf9315'
        "020-ffmpeg-add-svt-hevc-${_svt_hevc_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/v${_svt_hevc_ver}/ffmpeg_plugin/0001-lavc-svt_hevc-add-libsvt-hevc-encoder-wrapper.patch"
        "030-ffmpeg-add-svt-hevc-docs-${_svt_hevc_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/v${_svt_hevc_ver}/ffmpeg_plugin/0002-doc-Add-libsvt_hevc-encoder-docs.patch"
        "040-ffmpeg-add-svt-av1-${_svt_av1_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-AV1/v${_svt_av1_ver}/ffmpeg_plugin/0001-Add-ability-for-ffmpeg-to-run-svt-av1.patch"
        "050-ffmpeg-add-svt-vp9-${_svt_vp9_ver}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-VP9/v${_svt_vp9_ver}/ffmpeg_plugin/master-0001-Add-ability-for-ffmpeg-to-run-svt-vp9.patch"
        'LICENSE')
sha256sums=('ad009240d46e307b4e03a213a0f49c11b650e445b1f8be0dda2a9212b34d2ffb'
            'SKIP'
            'b6fcef2f4cbb1daa47d17245702fbd67ab3289b6b16f090ab99b9c2669453a02'
            '1392206202287f64f95023ec8630095c0419454f913af4d5fd703ea8117fe133'
            '960fd930955cd126e33c543eb5bf300fc050efdd4238626ee4aad2a50d353fa7'
            'b37d43d5d8692599347c6f1f316c13b9a9addc66d3ceb7e6e02341c494af7cdc'
            '1499e419dda72b1604dc5e3959668f3843292ff56bfba78734e31510ba576de0'
            '5e960b4dab495437082d0838a40a8cae9b67d1cef1ffd57da960afaa2bfd3719'
            'b74be6d805672210e226e7c0b403f88b0ee8a53c732c9bdc873c4b44aeb75c96'
            '04a7176400907fd7db0d69116b99de49e582a6e176b3bfb36a03e50a4cb26a36')
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')

prepare() {
    rm -f "ffmpeg-${pkgver}/libavcodec/"libsvt_{hevc,av1,vp9}.c
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/010-ffmpeg-fix-vmaf-model-path.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/015-ffmpeg-cuda11.0-fix.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/016-ffmpeg-srt-1.4.2-fix.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/020-ffmpeg-add-svt-hevc-${_svt_hevc_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/030-ffmpeg-add-svt-hevc-docs-${_svt_hevc_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/040-ffmpeg-add-svt-av1-${_svt_av1_ver}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/050-ffmpeg-add-svt-vp9-${_svt_vp9_ver}.patch"
}

build() {
    cd "ffmpeg-${pkgver}"
    printf '%s\n' '  -> Running ffmpeg configure script...'
    
    ./configure \
        --prefix='/usr' \
        --extra-cflags='-I/opt/cuda/include -I/usr/include/tensorflow' \
        --extra-ldflags='-L/opt/cuda/lib64' \
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
        --enable-libglslang \
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
        --enable-librabbitmq \
        --enable-librav1e \
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
        --enable-libsvtvp9 \
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
        --enable-vulkan \
        --enable-xlib \
        --enable-zlib \
        \
        --enable-amf \
        --enable-cuda-nvcc \
        --enable-cuda-llvm \
        --enable-cuvid \
        --enable-ffnvcodec \
        --enable-libdrm \
        --enable-libmfx \
        --enable-libnpp \
        --enable-nvdec \
        --enable-nvenc \
        --enable-omx \
        --disable-rkmpp \
        --enable-v4l2-m2m \
        --enable-vaapi \
        --enable-vdpau
    make
    make tools/qt-faststart
}

package() {
    make -C "ffmpeg-${pkgver}" DESTDIR="$pkgdir" install
    install -D -m755 "ffmpeg-${pkgver}/tools/qt-faststart" -t "${pkgdir}/usr/bin"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
