# Maintainer: Kat Witten <turtlewit@live.com>
pkgname=sway-launcher-desktop
pkgver=1.5.4
pkgrel=1
pkgdesc="TUI Application launcher with Desktop Entry support."
arch=('any')
url="https://github.com/Biont/sway-launcher-desktop"
license=('GPL')
depends=(fzf)
optdepends=('ttf-nerd-fonts-symbols: for launcher icon symbols')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Biont/sway-launcher-desktop/archive/v$pkgver.tar.gz")
md5sums=('006569d300f9e9d1ccb5c2d712431c61')

package() {
	# sway-launcher-desktop.sh installed as /usr/bin/sway-launcher-desktop
	cd "$pkgname-$pkgver"
	install -d "$pkgdir/usr/bin/"
	install -m 755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
}
