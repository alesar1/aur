# Maintainer: Ales Katona <almindor@gmail.com>
pkgname=etherwall
pkgver=1.2.0
pkgrel=1
pkgdesc="Ethereum GUI Wallet (QT5)"
arch=(i686 x86_64)
url="http://etherwall.com"
license=('GPL3')
depends=('qt5-declarative' 'qt5-graphicaleffects' 'qt5-quickcontrols' 'geth')
source=("https://github.com/almindor/${pkgname}/archive/release/${pkgver}.tar.gz")
md5sums=('6d5c38db642c7de3d2606bdd8125223e')

build() {
  cd "$pkgname-release-$pkgver"

  qmake -config release && make
}

package() {
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/pixmaps"
  mkdir -p "$pkgdir/usr/share/applications"

  cd "$pkgname-release-$pkgver"
  cp "../../etherwall.desktop" "$pkgdir/usr/share/applications"
  cp "./Etherwall" "$pkgdir/usr/bin/etherwall"
  cp "./qml/images/icon.png" "$pkgdir/usr/share/pixmaps/etherwall.png"
}
