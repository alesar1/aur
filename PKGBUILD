pkgname=mupen64plus-qt
pkgver=1.15
pkgrel=3
pkgdesc="A customizable launcher for Mupen64Plus"
arch=('i686' 'x86_64')
url="https://github.com/dh4/mupen64plus-qt"
license=('BSD')
depends=('quazip' 'mupen64plus' 'hicolor-icon-theme')
install=mupen64plus-qt.install
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/dh4/${pkgname}/archive/${pkgver}.tar.gz"
        "quazip-fix.patch")
sha256sums=('c41448adb7dd6acb6d4f56f7cdd2f25a8fd9a9e9ee23e334c0969b835802f20a'
            'd5bb4fea752a82f190a8c243f54ab44979f4499af1386f832a1021beab92d7f6')

build() {
    cd "$srcdir/$pkgname-$pkgver"

    patch --forward --strip=1 --input="$srcdir/quazip-fix.patch"

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
