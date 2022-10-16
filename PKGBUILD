# Maintainer: solopasha <daron439 at gmail dot com>
# Contributor: KspLite <ksplite@outlook.com>
pkgname=64gram-desktop
_pkgname=64Gram
pkgver=1.0.49
pkgrel=1
epoch=1
pkgdesc='Unofficial desktop version of Telegram messaging app'
arch=('x86_64')
url="https://github.com/TDesktop-x64/tdesktop"
license=('GPL3')
depends=('hunspell' 'ffmpeg4.4' 'hicolor-icon-theme' 'lz4' 'minizip' 'openal' 'ttf-opensans'
         'qt6-imageformats' 'qt6-svg' 'qt6-wayland' 'qt6-5compat' 'xxhash' 'glibmm'
         'rnnoise' 'pipewire' 'libxtst' 'libxrandr' 'jemalloc' 'abseil-cpp' 'libdispatch')
makedepends=('cmake' 'git' 'ninja' 'python' 'range-v3' 'tl-expected' 'microsoft-gsl' 'meson'
             'extra-cmake-modules' 'wayland-protocols' 'plasma-wayland-protocols' 'libtg_owt' 'qt6-tools')
optdepends=('webkit2gtk: embedded browser features'
            'xdg-desktop-portal: desktop integration')
source=("https://github.com/TDesktop-x64/tdesktop/releases/download/v${pkgver}/${_pkgname}-${pkgver}-full.tar.gz"
        "block-sponsored_messages.patch"
        "64gramdesktop.desktop")
sha512sums=('b5c4f1c49422a99b0260dc2c4c3a93c25bffe8036950289d64e59e3e9be7c13952d47c86a4dab1a2374bb7dceb4d0f4b65a3da5349068b6515e856a9ee9f53e7'
            'c662524ca4f4a8df021ee94696d84896ed9a271df321933942806dda4544ea25f51a650ec8b4fc72f9a2219ea54cbfaf37b9604124f7263c86f74f1d647587ae'
            '71e91adfa3d8fb198380069e42a6119fb37a588df2ad47b8eeaf5a87c874cb257da1e45eaa8229333bb7fc8a9218fb3411977642239bc93f01e37a2fdf58db3e')
prepare() {
    cd $_pkgname-$pkgver-full
    patch -Np1 --binary -i ../block-sponsored_messages.patch
}

build() {
    cd "${srcdir}/$_pkgname-$pkgver-full"
    export PKG_CONFIG_PATH='/usr/lib/ffmpeg4.4/pkgconfig'
    cmake \
        -B build \
        -G Ninja \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_BUILD_TYPE=Release \
        -DDESKTOP_APP_DISABLE_AUTOUPDATE=ON \
        -DTDESKTOP_API_TEST=ON \
        -DTDESKTOP_LAUNCHER_BASENAME=64gramdesktop
    sed -i '/LINK_LIBRARIES/s/$/ \/usr\/lib\/liblzma.so/' build/build.ninja
    ninja -C build
}

package() {
    cd $_pkgname-$pkgver-full
    DESTDIR=$pkgdir ninja -C build install
    mv "$pkgdir/usr/bin/telegram-desktop" "$pkgdir/usr/bin/64gram-desktop"
    install -Dm644 "$srcdir/64gramdesktop.desktop" -t "$pkgdir/usr/share/applications"
    find "$pkgdir" -type f -name "telegram.png" -exec rename telegram.png 64gram.png {} \;
    install -Dm644 /dev/null "$pkgdir/etc/tdesktop/externalupdater"
}
