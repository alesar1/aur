pkgname=mupen64plus-qt
pkgver=1.13
pkgrel=1
pkgdesc="A customizable launcher for Mupen64Plus"
arch=('i686' 'x86_64')
url="https://github.com/dh4/mupen64plus-qt"
license=('BSD')
depends=('quazip' 'mupen64plus' 'hicolor-icon-theme')
install=mupen64plus-qt.install
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/dh4/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('d42d3f28244c701ec5c0f500042b93d6111b93c881f95152f7c91993342328d0')

build() {
    cd "$srcdir/$pkgname-$pkgver"

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
