# Maintainer: Munzir Taha <munzirtaha@gmail.com>

pkgname=chessx
pkgver=1.4.0
pkgrel=1
pkgdesc="Chess Database and PGN viewer"
arch=(i686 x86_64)
url=http://chessx.sourceforge.net
license=(GPL2)
depends=(qt5-multimedia qt5-svg)
makedepends=(qt5-tools)
conflicts=($pkgname-svn)
source=(http://sourceforge.net/projects/$pkgname/files/chessx/$pkgver/$pkgname-$pkgver.tgz)
sha256sums=('e4287235904810a0a1b2cdec3dc33fbc30aa0657c7b7343bd2130bd9626220f4')

build() {
    cd $pkgname-$pkgver
    qmake
    make
}

package() {
    cd $pkgname-$pkgver
    install -Dm644 "unix/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
    install -Dm644 data/images/$pkgname.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
    install -Dm755 release/$pkgname $pkgdir/usr/bin/$pkgname
}
