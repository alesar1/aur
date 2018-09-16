# Maintainer: F Carpano < gmail-com: daert781 >

## NOTE: This PKGBUILD is a nonconflicting version of ffmpeg-full-git.
## NOTE: It can be installed alongside the official one in the Extra repo.

pkgname=ffmpeg-git-nc
_pkgname=ffmpeg-git
pkgver=4.1.r91949.g6304268e39
pkgrel=1
pkgdesc='Complete solution to record, convert and stream audio and video (all possible features including nvenc, qsv and libfdk-aac; Nonconflicting git version)'
arch=('i686' 'x86_64')
url='http://www.ffmpeg.org/'
license=('custom: nonfree and unredistributable')
depends=(
    # official repositories:
        'glibc' 'alsa-lib' 'jack' 'libpng'
        'bzip2' 'frei0r-plugins' 'libgcrypt' 'gmp' 'gnutls' 'ladspa' 'libass' 'aom'
        'libbluray' 'libbs2b' 'libcaca' 'celt' 'libcdio-paranoia' 'libdc1394'
        'libavc1394' 'libfdk-aac' 'fontconfig' 'freetype2' 'fribidi' 'libgme' 'gsm'
        'libiec61883' 'lensfun' 'libmodplug' 'lame' 'opencore-amr' 'openjpeg2' 'opus'
        'pulseaudio' 'librsvg' 'rubberband' 'rtmpdump' 'smbclient' 'snappy' 'libsoxr'
        'speex' 'srt' 'libssh' 'tensorflow' 'tesseract' 'libtheora' 'twolame'
        'v4l-utils' 'vid.stab' 'libvorbis' 'libvpx' 'wavpack' 'libwebp' 'libx264.so'
        'x265' 'libxcb' 'xvidcore' 'libxml2' 'zimg' 'zeromq' 'zvbi' 'lv2' 'lilv' 'xz'
        'openal' 'ocl-icd' 'libgl' 'sndio' 'sdl2' 'vapoursynth' 'libxv' 'libx11'
        'libxext' 'zlib' 'libomxil-bellagio' 'libva' 'libdrm' 'libvdpau'
    # AUR:
        'chromaprint-fftw' 'codec2' 'davs2-git' 'flite1-patched' 'libilbc' 'kvazaar'
        'openh264' 'libopenmpt-svn' 'shine' 'vo-amrwbenc' 'xavs' 'ndi-sdk' 'libmysofa'
        'rockchip-mpp'
)
depends_x86_64=(
    # official repositories:
        'cuda'
    # AUR:
        'intel-media-sdk'
)
makedepends=(
    # official repositories:
        'git' 'nasm' 'opencl-headers' 'ffnvcodec-headers'
    # AUR:
        'blackmagic-decklink-sdk'
)
makedepends_x86_64=(
    # AUR:
        'vmaf'
)
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so')
source=("$_pkgname"::'git://source.ffmpeg.org/ffmpeg.git'
        'LICENSE')
sha256sums=('SKIP'
            '04a7176400907fd7db0d69116b99de49e582a6e176b3bfb36a03e50a4cb26a36')

prepare() {
    cd "$_pkgname"
    
    # strictly specifying nvcc path is needed if package is installing
    # cuda for the first time (nvcc path will be in $PATH only after relogin)
    sed -i "s|^nvcc_default=.*|nvcc_default='/opt/cuda/bin/nvcc'|" configure
}

pkgver() {
    cd "$_pkgname"
    
    local _version="$(  git describe  --tags --long      | awk -F'-' '{ printf $1 }' | sed 's/^n//')"
    local _revision="$( git describe  --tags --match 'N' | awk -F'-' '{ printf $2 }')"
    local _shorthash="$(git rev-parse --short HEAD)"
    
    printf '%s.r%s.g%s' "$_version" "$_revision" "$_shorthash"
}

build() {
    cd "$_pkgname"
    
    # set x86_64 specific options
    if [ "$CARCH" = 'x86_64' ] 
    then
        local _libvmaf='--enable-libvmaf'
        local _cudasdk='--enable-cuda-sdk'
        local _libmfx='--enable-libmfx'
        local _libnpp='--enable-libnpp'
        
        local _cflags='-I/opt/cuda/include'
        local _ldflags='-L/opt/cuda/lib64'
        
        export PKG_CONFIG_PATH="${PKG_CONFIG_PATH:+${PKG_CONFIG_PATH}:}/opt/intel/mediasdk/lib64/pkgconfig"
        
        # set path of -lcuda (libcuda.so.x, required by cuda_sdk)
        # on systems with legacy nvidia drivers
        if pacman -Qs '^nvidia-340xx-utils' >/dev/null 2>&1
        then
            _ldflags="${_ldflags} -L/usr/lib/nvidia"
        fi
    fi
    
    msg2 'Running ffmpeg configure script. Please wait...'
    
    ./configure \
        --prefix='/usr' \
        --incdir="/usr/include/$_pkgname" \
        --libdir="/usr/lib/$_pkgname" \
        --shlibdir="/usr/lib/$_pkgname" \
        --extra-cflags="$_cflags" \
        --extra-ldflags="$_ldflags" \
        \
        --disable-doc \
        --enable-rpath \
        --enable-gpl \
        --enable-version3 \
        --enable-nonfree \
        --enable-shared \
        --disable-static \
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
        --enable-libass \
        --enable-libbluray \
        --enable-libbs2b \
        --enable-libcaca \
        --enable-libcelt \
        --enable-libcdio \
        --enable-libcodec2 \
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
        --enable-libsmbclient \
        --enable-libsnappy \
        --enable-libsoxr \
        --enable-libspeex \
        --enable-libsrt \
        --enable-libssh \
        --enable-libtensorflow \
        --enable-libtesseract \
        --enable-libtheora \
        --disable-libtls \
        --enable-libtwolame \
        --enable-libv4l2 \
        --enable-libvidstab \
        $_libvmaf \
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
        --enable-libxml2 \
        --enable-libzimg \
        --enable-libzmq \
        --enable-libzvbi \
        --enable-lv2 \
        --enable-lzma \
        --enable-decklink \
        --enable-libndi_newtek \
        --disable-mbedtls \
        --enable-libmysofa \
        --enable-openal \
        --enable-opencl \
        --enable-opengl \
        --disable-openssl \
        --enable-sndio \
        --enable-sdl2 \
        --enable-vapoursynth \
        --enable-xlib \
        --enable-zlib \
        \
        $_cudasdk \
        --enable-cuvid \
        --enable-ffnvcodec \
        --enable-libdrm \
        $_libmfx \
        $_libnpp \
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
    cd "$_pkgname"
    
    make DESTDIR="$pkgdir" install
    
    rm -rf ${pkgdir}/usr/share
    install -D -m755 tools/qt-faststart  -t "${pkgdir}/usr/bin"
    find ${pkgdir}/usr/bin -type f -exec mv {} {}-git \;

    install -D -m644 "${srcdir}/LICENSE" -t "${pkgdir}/usr/share/licenses/${_pkgname}"

}
