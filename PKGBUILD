# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=papirus-nord
pkgver=3.2.0
pkgrel=1
epoch=1
pkgdesc="Custom colors for folder icons for Papirus Icon Theme!"
arch=('any')
url="https://www.pling.com/p/1360398"
license=('GPL2')
depends=('papirus-icon-theme')
optdepends=('papirus-linux-universe: change folder colors')
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Adapta-Projects/Papirus-Nord/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('ffdb977c22630b5151e1f4956416ccd11a29394828509f36dab99ff7e243d119')

package() {
  cd Papirus-Nord-$pkgver
  for i in 22 24 32 48 64; do
    install -d "$pkgdir/usr/share/icons/Papirus/${i}x${i}/places"
    cp -r Icons/${i}x${i}/* "$pkgdir/usr/share/icons/Papirus/${i}x${i}/places"
  done
}
