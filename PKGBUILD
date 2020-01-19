# Maintainer: Megumi_fox <i@megumifox.com>

pkgname=qliveplayer-git
pkgver=3.3.0.r0.g5c898b5
pkgrel=2
pkgdesc='Cute and useful Live Stream Player with danmaku support.'
arch=('x86_64')
url="https://github.com/IsoaSFlus/QLivePlayer"
license=('GPL2')
depends=('mpv' 
         'ffmpeg'
         'python-aiohttp'
         'qt5-base'
         'qt5-quickcontrols2'
         'qt5-graphicaleffects'
         'qt5-quickcontrols'
         'python'
         'ykdl-git')
makedepends=('cmake'
             'git'
             'extra-cmake-modules' )
source=(
    "QLivePlayer::git+https://github.com/IsoaSFlus/QLivePlayer.git"
    "qliveplayer.desktop"
)

pkgver() {
    cd QLivePlayer
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

sha256sums=('SKIP'
            '50d922dc6454f3b589d410de8a6468b300412aa3eb0297cb18242b97a0118ee4')

build() {
    cd $srcdir/QLivePlayer
    mkdir -p build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX="$pkgdir/usr" -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_LIBDIR=lib ..
    make
}

package() {
    cd $srcdir/QLivePlayer/build
    make install

    install -d "$pkgdir/usr/share/applications"
    install -m644 "$srcdir/qliveplayer.desktop" "$pkgdir/usr/share/applications/qliveplayer.desktop"
}
