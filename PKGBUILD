# Maintainer: Vaporeon <vaporeon@vaporeon.io>

pkgname=invader
pkgver=0.45.0
_commit=13c1ba8c9ae10676e4aaa6b0d2b43d93dca412b0
pkgrel=3
pkgdesc="An open source toolkit for creating maps and assets for Halo: Combat Evolved"
depends=('libtiff' 'libarchive' 'libsquish' 'flac' 'freetype2' 'libsamplerate'
         'libvorbis' 'qt5-base' 'qt5-multimedia' 'zlib')
makedepends=('cmake' 'git' 'ninja' 'python')
arch=('x86_64')
url="https://invader.opencarnage.net"
license=('GPL3')
source=("git+https://github.com/SnowyMouse/${pkgname}.git#commit=$_commit"
        "git+https://github.com/SnowyMouse/riat.git")
sha256sums=('SKIP'
            'SKIP')

prepare() {
    mkdir -p build
    cd invader
    git submodule init
    git config submodule.riat.url "$srcdir/riat"
    git submodule update
}

build() {
    cd "$srcdir"/build
    cmake ../$pkgname -G Ninja \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX="$pkgdir/usr"
    ninja
}

package() {
    cd "$srcdir"/build
    ninja install
}
