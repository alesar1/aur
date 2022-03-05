# Maintainer: oscareczek <oscareczek at gmail dot com>
pkgname=86box-git
pkgver=3.2.1.r157.g1791ccde
pkgrel=1
pkgdesc='Emulator of x86-based machines based on PCem.'
arch=('pentium4' 'x86_64' 'arm7h' 'aarch64')
url='https://86box.net/'
license=('GPL2')
depends=('alsa-lib' 'faudio' 'freetype2' 'libpng' 'libslirp' 'qt6-base' 'rtmidi' 'sdl2')
makedepends=('git' 'cmake>=3.21' 'ninja' 'qt6-tools')
optdepends=(
    '86box-roms-git: ROM files'
    'libpcap: Networking not limited to TCP/IP'
)
provides=('86box')
conflicts=('86box')
options=('!buildflags')
source=(
    "${pkgname}::git+https://github.com/86Box/86Box.git"
    '86box'
    '86Box.desktop'
)
sha512sums=(
    'SKIP'
    '3e06cfd2e634ad771c384f05f58f9ba370d86511d291c2b196199908cd2a95274a4046b2979b8bfb5758583d095bc99536c1fef2f582cc5d23b7764151843f38'
    '143447f38e3ddf458f469dffd37897503112100cf69d46dbe6810f5e64c32d91d87dcb46fe4447cda8d2fb91dd2f1b868ee1e43575a972280801b40cf7cfbd85'
)

pkgver() {
    cd ${pkgname}
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    case "$CARCH" in
        pentium4) _PRESET=regular;    _TOOLCHAIN=cmake/flags-gcc-i686.cmake ;;
        x86_64)   _PRESET=regular;    _TOOLCHAIN=cmake/flags-gcc-x86_64.cmake ;;
        arm7h)    _PRESET=regularndr; _TOOLCHAIN=cmake/flags-gcc-armv7.cmake ;;
        aarch64)  _PRESET=regularndr; _TOOLCHAIN=cmake/flags-gcc-aarch64.cmake ;;
    esac
    cmake -S"${pkgname}" -Bbuild --preset "$_PRESET" --toolchain "$_TOOLCHAIN" -DCMAKE_INSTALL_PREFIX=/usr -DUSE_QT6=on -DSLIRP_EXTERNAL=on
    cmake --build build
}

package() {
    DESTDIR="${pkgdir}" cmake --build "${srcdir}/build" --target install
    install -Dm755 86box "$pkgdir/usr/bin"
    install -Dm644 86Box.desktop -t "$pkgdir/usr/share/applications"
    install -Dm644 "$srcdir/$pkgname/src/win/assets/86Box-green.png" "$pkgdir/usr/share/pixmaps/86Box.png"
}
