# Maintainer: Peter Jung ptr1337 <admin@ptr1337.dev>
# Contributor: MedzikUser <nivua1fn@duck.com>

pkgname=forkgram
_pkgname=frk
pkgver=4.3
pkgrel=1
pkgdesc='Fork of Telegram Desktop messaging app.'
arch=('x86_64' 'x86_64_v3')
url="https://github.com/Forkgram/tdesktop"
license=('GPL3')
depends=('hunspell' 'ffmpeg4.4' 'hicolor-icon-theme' 'lz4' 'minizip' 'openal' 'ttf-opensans'
    	 'qt6-imageformats' 'qt6-svg' 'qt6-wayland' 'qt6-5compat' 'xxhash' 'glibmm'
		 'rnnoise' 'pipewire' 'libxtst' 'libxrandr' 'jemalloc' 'abseil-cpp' 'libdispatch' 'glibmm-2.68')
makedepends=('cmake' 'git' 'ninja' 'python' 'range-v3' 'tl-expected' 'microsoft-gsl' 'meson'
			 'extra-cmake-modules' 'wayland-protocols' 'plasma-wayland-protocols' 'libtg_owt' 'qt6-tools')
optdepends=('webkit2gtk: embedded browser features'
			'xdg-desktop-portal: desktop integration')
source=("https://github.com/Forkgram/tdesktop/releases/download/v${pkgver}/${_pkgname}-v${pkgver}-full.tar.gz"
		"forkgram.desktop")
sha512sums=('3a8c05da2b236bfdd6fe59a06752e7f8108f055cbe719de28ad9d4fdecb0df8b4f2cb83ffa1d479009e23f49234bb3305fe597843e27d9b62c844faf6b48be7a'
            '94d58f02980871655bc4de2c73a8f0ff9fcf66ea19fc611be44e9d545804ec0866331e3b2b6404f0189670aecccecc3d4b3a1a6a24950d375bdb5968b53351ee')

prepare() {
    cd $_pkgname-v$pkgver-full

    rm -rf Telegram/ThirdParty/libtgvoip/webrtc_dsp/absl

}

build() {
    cd ${srcdir}/$_pkgname-v$pkgver-full
    export PKG_CONFIG_PATH='/usr/lib/ffmpeg4.4/pkgconfig'
    cmake \
        -B build \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DDESKTOP_APP_DISABLE_AUTOUPDATE=ON \
        -DTDESKTOP_API_TEST=ON \
        -DTDESKTOP_LAUNCHER_BASENAME=forkgram
    sed -i '/LINK_LIBRARIES/s/$/ \/usr\/lib\/liblzma.so/' build/build.ninja
    ninja -C build
}

package() {
    cd $_pkgname-v$pkgver-full
    DESTDIR="$pkgdir" ninja -C build install
    mv "$pkgdir/usr/bin/telegram-desktop" "$pkgdir/usr/bin/forkgram"
    install -Dm644 "$srcdir/forkgram.desktop" -t "$pkgdir/usr/share/applications"
    find "$pkgdir" -type f -name "telegram.png" -exec rename telegram.png forkgram.png {} \;
}
