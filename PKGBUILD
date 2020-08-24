# Maintainer: Andy Kluger <https://t.me/andykluger>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: hexchain <i@hexchain.org>

pkgname=telegram-desktop-userfonts
pkgver=2.3.0
pkgrel=2
conflicts=('telegram-desktop')
provides=('telegram-desktop')
pkgdesc='Official Telegram Desktop client, with your fonts as set by fontconfig'
arch=('x86_64')
url="https://desktop.telegram.org/"
license=('GPL3')
depends=('hunspell' 'ffmpeg' 'hicolor-icon-theme' 'lz4' 'minizip' 'openal'
         'qt5-imageformats' 'xxhash' 'libdbusmenu-qt5' 'qt5-wayland' 'gtk3')
makedepends=('cmake' 'git' 'ninja' 'python' 'range-v3' 'tl-expected' 'microsoft-gsl' 'libwebrtc')
optdepends=('ttf-opensans: default Open Sans font family')
source=("https://github.com/telegramdesktop/tdesktop/releases/download/v${pkgver}/tdesktop-${pkgver}-full.tar.gz"
"set_webrtc_location.patch::https://github.com/desktop-app/cmake_helpers/commit/7dc5da757124cb2d644e289a37d8957823a7f6c9.patch")
sha512sums=('65fa7641ed9ba2fcd4181e3f6bbc036dcf2ddcb12eb10a15a601e0fce79c0f99741b55741bb3c18b9de5d3cdb07190761ea0f8fbe111563f784e0ad3faea2ede'
            '5405ec01bd19350141588aad40eec63e47cd601d4945ed28ba2aaf077b398f4b746c3299e047bf0fb534f073ac1b9d4a515c5cc3eca9cdc754ccf87d2ce7176e')

prepare() {
    cd tdesktop-$pkgver-full
    for ttf in Telegram/lib_ui/fonts/*.ttf; do
        rm $ttf
        touch $ttf
    done
    sed -i 's/DemiBold/Bold/g' Telegram/lib_ui/ui/style/style_core_font.cpp

    cd cmake
    patch -Np1 -i ../../set_webrtc_location.patch
    sed 's|set(webrtc_build_loc ${webrtc_loc}/out/$<CONFIG>/obj)|set(webrtc_build_loc /usr/lib)|' -i external/webrtc/CMakeLists.txt
}

build() {
    cd tdesktop-$pkgver-full

    # Turns out we're allowed to use the official API key that telegram uses for their snap builds:
    # https://github.com/telegramdesktop/tdesktop/blob/8fab9167beb2407c1153930ed03a4badd0c2b59f/snap/snapcraft.yaml#L87-L88
    # Thanks @primeos!
    cmake . \
        -B build \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DTDESKTOP_API_ID=611335 \
        -DTDESKTOP_API_HASH=d524b414d21f4d37f08684c1df41ac9c \
        -DDESKTOP_APP_USE_PACKAGED_FONTS=OFF \
        -DTDESKTOP_DISABLE_REGISTER_CUSTOM_SCHEME=ON \
        -DTDESKTOP_LAUNCHER_BASENAME="telegramdesktop" \
        -DTDESKTOP_USE_PACKAGED_TGVOIP=OFF \
        -DDESKTOP_APP_SPECIAL_TARGET="" \
        -DDESKTOP_APP_WEBRTC_LOCATION=/usr/include/libwebrtc
    ninja -C build
}

package() {
    cd tdesktop-$pkgver-full
    DESTDIR=$pkgdir ninja -C build install
}
