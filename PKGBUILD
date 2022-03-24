# Maintainer: zan <zan@420blaze.it>

pkgname=rbdoom3-bfg-git
pkgver=r1354.ee014e80
pkgrel=1
pkgdesc="Doom 3 BFG Edition with soft shadows, cleaned up source, Linux and 64 bit Support"
arch=(i686 x86_64)
url="https://github.com/RobertBeckebans/RBDOOM-3-BFG"
license=(GPL3)
depends=(ffmpeg glew openal sdl2)
makedepends=(cmake git rapidjson zip)
optdepends=('doom3bfg-data: packaged game data files')
provides=(rbdoom3-bfg)
conflicts=(rbdoom-3-bfg)
install=rbdoom3-bfg-git.install
source=("$pkgname::git+https://github.com/RobertBeckebans/RBDOOM-3-BFG.git"
        'rbdoom3-bfg-git.desktop' 
        'doom3bfg.png'
        'sdl2-cmake.patch'
        'imgui.patch')
sha256sums=('SKIP'
            'a651aa2e71a8a525e66173a8f76b907712b73c950c88f5468ccab79f7533361f'
            '0fb6a3bb9b47cad65d5012ba20dc9de3b1487f4ac1908ee847e6087511b7f09e'
            '438993ae976453143d1055fd851e3fd0d48c5309818d485b276e1cfcd6701ce9'
            '632e07d086637cf46b69cadfdae2eb402f4bac954c38133ca7cf2ca9afe94ecf')
            
pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$pkgname"
    patch -p1 -i "$srcdir/sdl2-cmake.patch"
    patch -p1 -i "$srcdir/imgui.patch"
}

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DUSE_SYSTEM_ZLIB=1 \
        -DUSE_SYSTEM_LIBPNG=1 \
        -DUSE_SYSTEM_LIBJPEG=1 \
        -DUSE_SYSTEM_LIBGLEW=1 \
        -DUSE_SYSTEM_RAPIDJSON=1 \
        -B build -S "$pkgname/neo"
  cmake --build build
}

package() {
  install -Dm755 "$srcdir/build/RBDoom3BFG" "$pkgdir/usr/bin/rbdoom3bfg"
  install -Dm644 "$srcdir/doom3bfg.png" "$pkgdir/usr/share/pixmaps/doom3bfg.png"
  install -Dm644 "$srcdir/rbdoom3-bfg-git.desktop" "$pkgdir/usr/share/applications/rbdoom3-bfg-git.desktop"
}
