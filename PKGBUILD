# Maintainer: Peter Jung ptr1337 <admin@ptr1337.dev>
# Contributor: MedzikUser <nivua1fn@duck.com>

pkgname=forkgram
_pkgname=frk
pkgver=4.1.2
pkgrel=1
pkgdesc='Fork of Telegram Desktop messaging app.'
arch=('x86_64' 'x86_64_v3')
url="https://github.com/Forkgram/tdesktop"
license=('GPL3')
depends=('hunspell' 'ffmpeg4.4' 'hicolor-icon-theme' 'lz4' 'minizip' 'openal' 'ttf-opensans'
    'qt6-imageformats' 'qt6-svg' 'qt6-wayland' 'qt6-5compat' 'xxhash' 'glibmm'
'rnnoise' 'pipewire' 'libxtst' 'libxrandr' 'jemalloc' 'abseil-cpp' 'libdispatch')
makedepends=('cmake' 'git' 'ninja' 'python' 'range-v3' 'tl-expected' 'microsoft-gsl' 'meson'
'extra-cmake-modules' 'wayland-protocols' 'plasma-wayland-protocols' 'libtg_owt')
optdepends=('webkit2gtk: embedded browser features'
'xdg-desktop-portal: desktop integration')
provides=("telegram-desktop")
conflicts=("telegram-desktop" "tdesktop-x64")
replaces=("tdesktop-x64")
source=("https://github.com/Forkgram/tdesktop/releases/download/v${pkgver}/${_pkgname}-v${pkgver}-full.tar.gz"
"fix-tgcalls-cstdint.patch")
sha512sums=('b1c919b1f1924da24216acec2b9047184763efaf8e63b636de18b5e3adf16f3e714e91f0d7afb213409b9b92f7c04c3b392afe5c4992a30dd2b3a60aa28e09a1'
            'ba24a2f1524010b4891764aacee2e27a5ebae44cf7626ab2aaf9e6c48b0f8088bf920886ceeb497b3c463fa0c3b885dd63db273d4c29cab6c96c8193c0c5c888')

prepare() {
    cd $_pkgname-v$pkgver-full

    rm -rf Telegram/ThirdParty/libtgvoip/webrtc_dsp/absl
    patch -Np1 -i "$srcdir"/fix-tgcalls-cstdint.patch -d Telegram/ThirdParty/tgcalls
}

build() {
    cd $_pkgname-v$pkgver-full
    export PKG_CONFIG_PATH='/usr/lib/ffmpeg4.4/pkgconfig'
    cmake . \
        -B build \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DDESKTOP_APP_DISABLE_AUTOUPDATE=ON \
        -DTDESKTOP_API_TEST=ON
    sed -i '/LINK_LIBRARIES/s/$/ \/usr\/lib\/liblzma.so/' build/build.ninja
    ninja -C build
}

package() {
    cd $_pkgname-v$pkgver-full
    DESTDIR="$pkgdir" ninja -C build install
    # They botched the release and put a lot of stuff here.
    rm -rf "$pkgdir/build"
}
