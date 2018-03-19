# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=gnome-shell-extension-unite
pkgver=13
pkgrel=1
pkgdesc="Unite makes GNOME Shell look like Ubuntu Unity Shell"
arch=("any")
url="https://github.com/hardpixel/unite-shell"
license=("GPL")
depends=("gnome-shell" "xorg-xprop")
optdepends=("gnome-shell-extension-dash-to-dock")
provides=("gnome-shell-extension-unite")
conflicts=("gnome-shell-extension-unite-git")
source=("$pkgname-$pkgver::https://github.com/hardpixel/unite-shell/archive/v$pkgver.tar.gz")
md5sums=("d1cb1f7b0a3ef032f6e95ec23f39af1f")

package() {
  mkdir -p "$pkgdir/usr/share/gnome-shell/extensions/"

  cd "$srcdir/unite-shell-$pkgver"
  cp -af "unite@hardpixel.eu" "$pkgdir/usr/share/gnome-shell/extensions/"
}
