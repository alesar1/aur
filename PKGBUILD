# Maintainer: Megumi_fox <i@megumifox.com>

pkgname=qliveplayer-git
pkgver=4.0.1.r0.gcd30fe8
pkgrel=2
pkgdesc='Cute and useful Live Stream Player with danmaku support.'
arch=('x86_64')
url="https://github.com/IsoaSFlus/QLivePlayer"
license=('GPL2')
provides=('qliveplayer')
conflicts=('qliveplayer')
depends=('mpv' 
         'ffmpeg'
         'qt5-base'
         'qt5-quickcontrols2'
         'qt5-graphicaleffects'
         'qt5-quickcontrols')
makedepends=('cmake'
             'git'
             'rust'
             'ninja'
             'extra-cmake-modules' )

source=(
    "QLivePlayer::git+https://github.com/IsoaSFlus/QLivePlayer.git"
    "QLivePlayer-Lib::git+https://github.com/IsoaSFlus/QLivePlayer-Lib.git#branch=dev"
)

pkgver(){
    cd QLivePlayer
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}
prepare() {
    cd QLivePlayer
    git submodule init
    git config submodule.src/QLivePlayer-Lib.url "$srcdir/QLivePlayer-Lib"
    git submodule update
}

sha256sums=('SKIP' 'SKIP')

build() {
    cd $srcdir/QLivePlayer
    mkdir -p build
    cd build
    cmake -GNinja -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release  ..
    ninja
}

package() {
    cd $srcdir/QLivePlayer/build
    DESTDIR="$pkgdir" ninja install
}
