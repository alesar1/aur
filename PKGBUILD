# Maintainer : Daniel Bermond <dbermond@archlinux.org>
# Contributor: Iacopo Isimbaldi <isiachi@rhye.it>

_svt_hevc_ver='33ca9aa8a2a2d28022d3fc03704e99ce01828376'
_svt_vp9_ver='abd5c59c06d686eae57ef4e6f899c601f791d055'

pkgname=ffmpeg-full
pkgver=4.4
pkgrel=1
pkgdesc='Complete solution to record, convert and stream audio and video (all possible features including libfdk-aac)'
arch=('x86_64')
url='https://www.ffmpeg.org/'
license=('custom: nonfree and unredistributable')
depends=(
    # official repositories:
        'alsa-lib' 'avisynthplus' 'bzip2' 'frei0r-plugins' 'libgcrypt' 'gmp' 'gnutls'
        'ladspa' 'libass' 'aom' 'aribb24' 'libbluray' 'libbs2b' 'libcaca' 'celt'
        'libcdio-paranoia' 'codec2' 'dav1d' 'libdc1394' 'libavc1394' 'libfdk-aac'
        'fontconfig' 'freetype2' 'fribidi' 'glslang' 'spirv-tools' 'libgme' 'gsm'
        'libiec61883' 'libilbc' 'jack' 'kvazaar' 'libmodplug' 'lame'
        'opencore-amr' 'openjpeg2' 'opus' 'libpulse' 'librabbitmq-c' 'rav1e' 'librsvg'
        'rubberband' 'rtmpdump' 'smbclient' 'snappy' 'libsoxr' 'speex' 'srt' 'libssh'
        'svt-hevc' 'svt-av1' 'svt-vp9' 'tensorflow' 'tesseract' 'libtheora' 'twolame'
        'v4l-utils' 'vid.stab' 'vmaf' 'libvorbis' 'libvpx' 'libwebp' 'x264' 'x265'
        'libxcb' 'xvidcore' 'libxml2' 'zimg' 'zeromq' 'zvbi' 'lv2' 'lilv' 'xz'
        'libmysofa' 'openal' 'ocl-icd' 'libgl' 'sndio' 'sdl2' 'vapoursynth'
        'vulkan-icd-loader' 'libxv' 'libx11'  'libxext' 'zlib' 'cuda'
        'libomxil-bellagio' 'libdrm' 'intel-media-sdk' 'libva' 'libvdpau'
    # AUR:
        'chromaprint-fftw' 'davs2' 'flite1-patched' 'libklvanc-git' 'openh264'
        'libopenmpt-svn' 'librist' 'shine' 'uavs3d-git' 'vo-amrwbenc' 'xavs'
        'xavs2' 'pocketsphinx' 'rockchip-mpp' 'lensfun-git'
)
makedepends=(
    # official repositories:
        'nasm' 'opencl-headers' 'vulkan-headers' 'ffnvcodec-headers' 'clang'
        'amf-headers'
    # AUR:
        'decklink-sdk'
)
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavutil.so' 'libpostproc.so' 'libavresample.so' 'libswscale.so'
          'libswresample.so' 'ffmpeg')
conflicts=('ffmpeg')
source=("https://ffmpeg.org/releases/ffmpeg-${pkgver}.tar.xz"{,.asc}
        '010-ffmpeg-fix-vmaf-model-path.patch'
        '015-ffmpeg-cuda11-fix.patch'
        "020-ffmpeg-add-svt-hevc-g${_svt_hevc_ver:0:7}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/${_svt_hevc_ver}/ffmpeg_plugin/0001-lavc-svt_hevc-add-libsvt-hevc-encoder-wrapper.patch"
        "030-ffmpeg-add-svt-hevc-docs-g${_svt_hevc_ver:0:7}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-HEVC/${_svt_hevc_ver}/ffmpeg_plugin/0002-doc-Add-libsvt_hevc-encoder-docs.patch"
        "040-ffmpeg-add-svt-vp9-g${_svt_vp9_ver:0:7}.patch"::"https://raw.githubusercontent.com/OpenVisualCloud/SVT-VP9/${_svt_vp9_ver}/ffmpeg_plugin/master-0001-Add-ability-for-ffmpeg-to-run-svt-vp9.patch"
        'LICENSE')
sha256sums=('06b10a183ce5371f915c6bb15b7b1fffbe046e8275099c96affc29e17645d909'
            'SKIP'
            '52778c70d9fe6e3a10941b99b96ac7749cec325dc1b9ee11ab75332b5ff68e50'
            'e096996903d4e19348fabe9c61923678cbadf57299cd03809c9e06065d6ffbe2'
            '740dc9838aa47daa9f9b107178e53e384344f4c6f90865bd7e3af189257da544'
            '1499e419dda72b1604dc5e3959668f3843292ff56bfba78734e31510ba576de0'
            'b7d722dfce20b73e9d5c73d55ffe041bbdc92a3c4a5c5d766b6b3040671b4052'
            '04a7176400907fd7db0d69116b99de49e582a6e176b3bfb36a03e50a4cb26a36')
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')

prepare() {
    rm -f "ffmpeg-${pkgver}/libavcodec/"libsvt_{hevc,vp9}.c
    sed -i 's/general.texi/general_contents.texi/g' "030-ffmpeg-add-svt-hevc-docs-g${_svt_hevc_ver:0:7}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/010-ffmpeg-fix-vmaf-model-path.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/015-ffmpeg-cuda11-fix.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/020-ffmpeg-add-svt-hevc-g${_svt_hevc_ver:0:7}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/030-ffmpeg-add-svt-hevc-docs-g${_svt_hevc_ver:0:7}.patch"
    patch -d "ffmpeg-${pkgver}" -Np1 -i "${srcdir}/040-ffmpeg-add-svt-vp9-g${_svt_vp9_ver:0:7}.patch"
}

build() {
    cd "ffmpeg-${pkgver}"
    printf '%s\n' '  -> Running ffmpeg configure script...'
    
    ./configure \
        --prefix='/usr' \
        --extra-cflags='-I/opt/cuda/include -I/usr/include/tensorflow' \
        --extra-ldflags='-L/opt/cuda/lib64' \
        --enable-lto \
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
        --disable-libopenvino \
        --enable-libopus \
        --enable-libpulse \
        --enable-librabbitmq \
        --enable-librav1e \
        --enable-librist \
        --enable-librsvg \
        --enable-librubberband \
        --enable-librtmp  \
        --enable-libshine \
        --enable-libsmbclient \
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
        --enable-libuavs3d \
        --enable-libv4l2 \
        --enable-libvidstab \
        --enable-libvmaf \
        --enable-libvo-amrwbenc \
        --enable-libvorbis \
        --enable-libvpx \
        --enable-libsvtvp9 \
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
        --enable-rkmpp \
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
