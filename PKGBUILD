# Maintainer: Daniel Bermond < gmail-com: danielbermond >

pkgname=mpv-full-git
pkgver=0.29.1.r400.gebab42c9a8
pkgrel=1
pkgdesc='A free, open source, and cross-platform media player (git version with all possible libs)'
arch=('x86_64')
license=('GPL3')
url='https://mpv.io/'
depends=(
    # official repositories:
        'cmocka' 'ffmpeg' 'lcms2' 'libcdio-paranoia' 'libgl' 'libxss'
        'libxinerama' 'libxv' 'libxkbcommon' 'libva' 'wayland' 'libcaca'
        'desktop-file-utils' 'hicolor-icon-theme' 'xdg-utils' 'lua52' 'libdvdnav'
        'libxrandr' 'jack' 'rubberband' 'uchardet' 'libarchive' 'smbclient'
        'zlib' 'vapoursynth' 'sndio' 'openal' 'vulkan-icd-loader' 'shaderc'
        'libplacebo'
    # AUR:
        'mujs' 'rsound' 'spirv-cross'
)
makedepends=('git' 'mesa' 'python-docutils' 'ladspa' 'vulkan-headers'
             'wayland-protocols' 'ffnvcodec-headers')
optdepends=('youtube-dl: for video-sharing websites playback'
            'nvidia-utils: for hardware accelerated video decoding with CUDA')
provides=('mpv' 'mpv-git')
conflicts=('mpv')
options=('!emptydirs')
source=('git+https://github.com/mpv-player/mpv.git')
sha256sums=('SKIP')

prepare() {
    cd mpv
    
    ./bootstrap.py
}

pkgver() {
    cd mpv
    
    local _version
    local _revision
    local _shorthash
    
    _version="$(git tag | sort -Vr | head -n1 | sed 's/^v//')"
    _revision="$(git rev-list v"${_version}"..HEAD --count)"
    _shorthash="$(git rev-parse --short HEAD)"
    
    printf '%s.r%s.g%s' "$_version" "$_revision" "$_shorthash"
}

build() {
    cd mpv
    
    ./waf configure \
        --color='yes' \
        --prefix='/usr' \
        --progress \
        --confdir='/etc/mpv' \
        \
        --disable-lgpl \
        --enable-libmpv-shared \
        --disable-libmpv-static \
        --disable-static-build \
        --disable-debug-build \
        \
        --enable-manpage-build \
        --disable-html-build \
        --disable-pdf-build \
        \
        --enable-cplugins \
        --enable-zsh-comp \
        --enable-test \
        --disable-clang-database \
        \
        --disable-android \
        --disable-egl-android \
        --disable-swift \
        --disable-uwp \
        --disable-win32-internal-pthreads \
        --enable-iconv \
        --enable-libsmbclient \
        --enable-lua \
        --enable-javascript \
        --enable-libass \
        --enable-libass-osd \
        --enable-zlib \
        --enable-libbluray \
        --enable-dvdnav \
        --enable-cdda \
        --enable-uchardet \
        --enable-rubberband \
        --enable-lcms2 \
        --enable-vapoursynth \
        --enable-vapoursynth-lazy \
        --enable-libarchive \
        --enable-dvbin \
        --enable-libavdevice \
        --lua='52arch' \
        \
        --enable-sdl2 \
        --enable-oss-audio \
        --enable-rsound \
        --enable-sndio \
        --enable-pulse \
        --enable-jack \
        --enable-openal \
        --disable-opensles \
        --enable-alsa \
        --disable-coreaudio \
        --disable-audiounit \
        --disable-wasapi \
        \
        --disable-cocoa \
        --enable-drm \
        --enable-drmprime \
        --enable-gbm \
        --enable-wayland-scanner \
        --enable-wayland-protocols \
        --enable-wayland \
        --enable-x11 \
        --enable-xv \
        --disable-gl-cocoa \
        --enable-gl-x11 \
        --enable-egl-x11 \
        --enable-egl-drm \
        --enable-gl-wayland \
        --disable-gl-win32 \
        --disable-gl-dxinterop \
        --disable-egl-angle \
        --disable-egl-angle-lib \
        --disable-egl-angle-win32 \
        --enable-vdpau \
        --enable-vdpau-gl-x11 \
        --enable-vaapi \
        --enable-vaapi-x11 \
        --enable-vaapi-wayland \
        --enable-vaapi-drm \
        --enable-vaapi-glx \
        --enable-vaapi-x-egl \
        --enable-caca \
        --enable-jpeg \
        --disable-direct3d \
        --enable-shaderc \
        --enable-spirv-cross \
        --disable-d3d11 \
        --disable-rpi \
        --disable-ios-gl \
        --enable-plain-gl \
        --disable-mali-fbdev \
        --enable-gl \
        --enable-libplacebo \
        --enable-vulkan \
        \
        --disable-videotoolbox-gl \
        --disable-d3d-hwaccel \
        --disable-d3d9-hwaccel \
        --disable-gl-dxinterop-d3d9 \
        --enable-cuda-hwaccel \
        \
        --disable-apple-remote \
        --disable-macos-touchbar \
        --disable-macos-10-11-features \
        --disable-macos-10-14-features \
        --disable-macos-cocoa-cb
        
    ./waf build
}

check() {
    cd mpv/build/test
    
    local _test
    while read -r -d '' _test
    do
        printf '%s\n' "  -> Running test '${_test##*/}'..."
        "$_test"
    done < <(find . -executable -type f -print0)
}

package() {
    cd mpv
    
    ./waf install --destdir="$pkgdir"
    
    install -m644 DOCS/{encoding.rst,tech-overview.txt} "${pkgdir}/usr/share/doc/mpv"
}
