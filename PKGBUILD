# Maintainer: oscareczek <oscareczek at gmail dot com>
pkgname=86box-git
pkgver=3.1.r815.g1654c8ec
pkgrel=3
pkgdesc='Emulator of x86-based machines based on PCem.'
arch=('pentium4' 'x86_64' 'arm7h' 'aarch64')
url='https://86box.net/'
license=('GPL2')
depends=('alsa-lib' 'freetype2' 'libpng' 'openal' 'qt6-base' 'rtmidi' 'sdl2')
makedepends=('git' 'cmake>=3.16' 'qt6-tools')
optdepends=('86box-roms-git: ROM files')
source=(
    "${pkgname}::git+https://github.com/86Box/86Box.git"
    '86box'
    '86Box.desktop'
)
sha256sums=(
    'SKIP'
    'c76882ed325072ff88953c6deaa398df05b46732c5b99bd58023d7f9e3c65435'
    '67f2aacd0e39f0fda19412fa5b9b64fab347a68ed2f4e5e7bb437833f311a5a0'
)
provides=('86box')

pkgver() {
  cd ${pkgname}
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cmake -S"${pkgname}" -Bbuild -DCMAKE_INSTALL_PREFIX=/usr -DRELEASE=on -DUSE_QT6=on
    cmake --build build
}

package() {
    DESTDIR="${pkgdir}" cmake --build "${srcdir}/build" --target install
    install -Dm755 86box "$pkgdir/usr/bin"
    install -Dm644 86Box.desktop -t "$pkgdir/usr/share/applications"
    install -Dm644 "$srcdir/$pkgname/src/win/assets/86Box-green.png" "$pkgdir/usr/share/pixmaps/86Box.png"
}
