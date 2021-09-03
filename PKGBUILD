# Maintainer: vanillamilkk <vanilla@kcml.my.id>
pkgname=gamesneeze-git
pkgver=2021.09.03
pkgrel=1
pkgdesc="An open source training utility for Counter-Strike: Global Offensive on Linux."
arch=('x86_64')
url="https://github.com/seksea/gamesneeze"
license=('MIT')
depends=('base-devel' 'git' 'cmake' 'gdb' 'sdl2' 'clang')
optdepends=('steam: downloading csgo with steam'
            'steam-native-runtime: downloading csgo with steam from native library')
source=("git+https://github.com/seksea/gamesneeze.git")
sha256sums=('SKIP')

pkgver() {
  date "+%Y.%m.%d" | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$pkgname"
    mkdir -p build
    cd build
    cmake -D CMAKE_BUILD_TYPE=Release ..
    make -j $(nproc --all)
}

package() {
    install -Dm 644 gamesneeze.desktop "${pkgdir}/usr/share/applications/gamesneeze.desktop"
    install -Dm 644 res/gamesneeze.png "${pkgdir}/usr/share/pixmaps/gamesneeze.png"
    install -Dm 500 toolbox.sh "${pkgdir}/opt/gamesneeze/toolbox.sh"
    install -Dm 755 gdb "${pkgdir}/opt/gamesneeze/gdb"
    cd "$srcdir/build"
    mkdir -p "${pkgdir}/opt/gamesneeze"
    mkdir -p "${pkgdir}/opt/gamesneeze/build"
    install -Dm 500 libgamesneeze.so "${pkgdir}/opt/gamesneeze/build/libgamesneeze.so"
}
