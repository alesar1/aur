# Maintainer: Chocobo1

pkgname=chewing-editor-git
pkgver=0.1.1.r28.ge79a521
pkgrel=1
pkgdesc="Cross platform chewing user phrase editor"
arch=('i686' 'x86_64')
url="http://chewing.im"
license=('GPL')
depends=('libchewing' 'qt5-base' 'hicolor-icon-theme')
makedepends=('git' 'cmake' 'qt5-tools' 'help2man')
source=("git+https://github.com/chewing/chewing-editor.git")
md5sums=('SKIP')

pkgver() {
    cd "chewing-editor"

    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "chewing-editor"

    mkdir -p build
}

build() {
    cd "chewing-editor/build"

    cmake ../ -DCMAKE_INSTALL_PREFIX='/usr'
    make
}

check() {
    cd "chewing-editor/build"

    ./run-test
}

package() {
    cd "chewing-editor/build"

    make DESTDIR="$pkgdir" install
    install -Dm644 ../COPYING "$pkgdir/usr/share/licenses/chewing-editor/COPYING"
}
