# Maintainer: mrxx <mrxx at cyberhome dot at>
# Contributor: Shane Stone <shanewstone at gmail>

pkgname=ttf-font-logos
pkgver=0.16
pkgrel=1
pkgdesc="An icon font providing popular Linux distro logos."
arch=(any)
replaces=('ttf-font-linux')
url="https://github.com/lukas-w/font-logos"
license=('Unilicense')
depends=(fontconfig)
source=("$pkgname-$pkgver.tar.gz::https://github.com/lukas-w/font-logos/archive/v$pkgver.tar.gz")
sha1sums=('457a4d978753cc5c1b30edc325b35924549d8d97')

package() {
  cd font-logos-$pkgver/assets
  install -d "$pkgdir/usr/share/fonts/TTF"
  install -m644 *.ttf "$pkgdir/usr/share/fonts/TTF"
  cd ..
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
