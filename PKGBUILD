# Maintainer: lucy <lucy@luz.lu>

pkgname=bdf-tewi-git
_gitname=tewi-font
pkgver=0.313.a975d38
pkgrel=2
pkgdesc='Bitmap font'
arch=('any')
url="https://github.com/lucy/tewi-font"
license=('MIT')
depends=('xorg-fonts-encodings' 'xorg-mkfontdir' 'xorg-mkfontscale')
makedepends=('git' 'python' 'make' 'xorg-bdftopcf')
install="$pkgname.install"
source=('git+https://github.com/lucy/tewi-font.git')
sha256sums=('SKIP')

pkgver() {
  cd "$_gitname"
  echo "0.$(git rev-list --count HEAD).$(git describe --always)"
}

package() {
  cd "$_gitname"
  make var
  make all
  install -T -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -d -m755 "$pkgdir/usr/share/fonts/misc/"
  install -m644 -t "$pkgdir/usr/share/fonts/misc/" out/*.pcf.gz
}
