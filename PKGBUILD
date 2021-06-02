# Maintainer: Alice Gaudon <alice at gaudon dot pro>
# Contributor: Benjamin Klettbach <b dot klettbach at gmail dot com>
# Contributor: Jonathan Steel <jsteel at archlinux.org>
# Contributor: ArcticVanguard <LideEmily at gmail dot com>
# Contributor: ledti <antergist at gmail dot com>

pkgname=obs-studio-browser
pkgver=27.0.0
pkgrel=6
pkgdesc="Free and open source software for video recording and live streaming. Built with browser, vst plugins."
arch=("i686" "x86_64")
url="https://github.com/obsproject/obs-studio"
license=("GPL2")
depends=("ffmpeg" "jack" "jansson" "libxinerama" "libxkbcommon-x11"
         "qt5-svg" "qt5-x11extras" "curl" "gtk-update-icon-cache")
makedepends=("cmake" "git" "libfdk-aac" "libxcomposite" "x264"
             "vlc-luajit" "swig" "luajit" "python" "cef-minimal>=87.0.0"
             "wayland" "qt5-wayland" "pipewire" "xdg-desktop-portal")
optdepends=("libfdk-aac: FDK AAC codec support"
            "libxcomposite: XComposite capture support"
            "libva-intel-driver: Hardware encoding"
            "libva-mesa-driver: Hardware encoding"
            "vlc-luajit: VLC Media Source"
            "luajit: Lua scripting"
            "pipewire: Pipewire capture"
            "xdg-desktop-portal: Pipewire capture"
            "python: Python scripting"
            "v4l2loopback-dkms: Virtual camera output")
provides=("obs-studio=$pkgver")
conflicts=("obs-studio" "obs-linuxbrowser")
source=("$pkgname::git+https://github.com/obsproject/obs-studio.git#tag=$pkgver"
        "git+https://github.com/Mixer/ftl-sdk.git"
        "git+https://github.com/obsproject/obs-browser.git"
        "git+https://github.com/obsproject/obs-vst.git"
        "fix_python_binary_loading.patch")
sha512sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '93ad704cef425073b417d1ed95e076f688a6e45cdf589472c65e437d77297303f31dd8f15c7d5e30f83276a6396b732dfb5a695db9c773911aaa0423c5262177')

prepare() {
    cd $pkgname
    patch -Np1 < "$srcdir"/fix_python_binary_loading.patch
    git config submodule.plugins/obs-outputs/ftl-sdk.url "$srcdir"/ftl-sdk
    git config submodule.plugins/obs-browser.url "$srcdir"/obs-browser
    git config submodule.plugins/obs-vst.url "$srcdir"/obs-vst
    git submodule update
}

build() {
    cd $pkgname

    mkdir -p build; cd build

    cmake \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DBUILD_BROWSER=ON \
        -DCEF_ROOT_DIR="/opt/cef" \
        -DOBS_VERSION_OVERRIDE=$pkgver \
        -DENABLE_PIPEWIRE=ON ..

    make
}

package() {
    cd $pkgname/build

    make install DESTDIR="$pkgdir"
}
