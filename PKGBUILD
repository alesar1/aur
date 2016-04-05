pkgname=mupen64plus-qt
pkgver=1.9
pkgrel=1
pkgdesc="A basic launcher for Mupen64Plus"
arch=('i686' 'x86_64')
url="https://github.com/dh4/mupen64plus-qt"
license=('BSD')
depends=('quazip-qt5' 'mupen64plus' 'hicolor-icon-theme')
install=mupen64plus-qt.install
source=(https://github.com/dh4/${pkgname}/archive/${pkgver}.tar.gz)
sha256sums=('da3f2e6e1ba9b4818bde1c05f834163465101afdc7ce2857c0c1211ae7f44bed')

build() {
    cd "$srcdir/$pkgname-$pkgver"

    sed -i 's#include <quazip/#include <quazip5/#g' src/common.cpp src/emulatorhandler.cpp

    qmake-qt5
    make
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    install -Dm755 "mupen64plus-qt"                     "$pkgdir/usr/bin/mupen64plus-qt"
    install -Dm644 "LICENSE"                            "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 "resources/mupen64plus-qt.desktop"   "$pkgdir/usr/share/applications/mupen64plus-qt.desktop"
    install -Dm644 "resources/images/mupen64plus.png"   "$pkgdir/usr/share/icons/hicolor/128x128/apps/mupen64plus-qt.png"
}
