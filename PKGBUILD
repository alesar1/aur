# Maintainer: Piotr Miller <nwg.piotr@gmail.com>
# Project: nwg-shell for sway, https://github.com/nwg-piotr/nwg-shell

pkgname=('nwg-shell-wallpapers')
pkgver=1.1
pkgrel=1
pkgdesc="nwg-shell wallpapers package"
arch=('x86_64')
url="https://github.com/nwg-piotr/nwg-shell-wallpapers"
license=('CC0-1.0')
provides=('nwg-shell-wallpapers')

source=("$pkgname-$pkgver.tar.gz::https://github.com/nwg-piotr/nwg-shell-wallpapers/archive/v"$pkgver".tar.gz")

md5sums=('e8d9be6b87cbbf58aa6bb009b81de24a')

package() {
  cd "$srcdir"
  install -d "$pkgdir"/usr/share/backgrounds/nwg-shell
  install -Dm644 "$pkgname"-"$pkgver"/wallpapers/* $pkgdir/usr/share/backgrounds/nwg-shell/
  install -Dm644 "$pkgname"-"$pkgver"/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
