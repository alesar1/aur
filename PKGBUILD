# Maintainer: goll <adrian.goll+aur[at]gmail>

pkgname=tixati
pkgver=2.33
pkgrel=1
pkgdesc="A simple P2P client that is compatible with the BitTorrent protocol"
arch=('i686' 'x86_64')
url="http://www.tixati.com/"
license=('custom:tixati')
depends=('gtk2' 'hicolor-icon-theme')
optdepends=('gconf: for shell integration')
install=$pkgname.install
source=("LICENSE")
source_i686=("http://tixati.com/download/$pkgname-${pkgver}-1.i686.manualinstall.tar.gz")
source_x86_64=("http://tixati.com/download/$pkgname-${pkgver}-1.x86_64.manualinstall.tar.gz")
sha1sums=('35d7f63a3b0dbf3f8f2bd0a45a7f3c96b453e86b')
sha1sums_i686=('c12079477df4e9dc43deb37832a455ae169698b0')
sha1sums_x86_64=('88121d341462665e285660c974d2e2a46d947c22')

package() {
  cd "$srcdir/$pkgname-${pkgver}-1.$CARCH.manualinstall"
  install -Dm755 $pkgname "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname.png \
    "$pkgdir/usr/share/icons/hicolor/48x48/apps/$pkgname.png"
  install -Dm644 $pkgname.desktop \
    "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 ../LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
