# Maintainer: Noah Jelen <noahtjelen@gmail.com>

pkgname=cesium-editor
pkgver=0.1.1
pkgrel=1
pkgdesc="A bare bones text editor"
arch=('i686' 'x86_64')
url="https://gitlab.com/NoahJelen/cesium"
license=('GPL')
depends=('ncurses' 'gcc-libs' 'glibc')
makedepends=('cargo' 'gzip')
source=("https://gitlab.com/NoahJelen/cesium/-/archive/0.1.2/cesium-0.1.2.zip")
conflicts=('cesium-editor-git')
md5sums=('SKIP')

build() {
    cd "cesium-0.1.2"
    cargo build --release
}

package() {
    #the package contents
    cd "cesium-0.1.2"
    mkdir -p "$pkgdir/usr/lib/cesium"
    mkdir -p "$pkgdir/usr/share/man/man1/"
    install -Dt "$pkgdir/usr/bin" -m755 target/release/cesium
    install -Dt "$pkgdir/usr/share/applications/" cesium.desktop
    install -Dt "$pkgdir/usr/lib/cesium/" icon.png

    #the documentation
    install -Dt "$pkgdir/usr/share/man/man1" man/cesium.1
    gzip "$pkgdir/usr/share/man/man1/cesium.1"
}
