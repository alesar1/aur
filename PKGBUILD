# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=gnome-shell-extension-plank-to-dock
pkgver=1
pkgrel=1
pkgdesc="GNOME Shell extension to integrate Plank, the simplest dock on the planet."
arch=("any")
url="https://github.com/hardpixel/plank-to-dock"
license=("GPL")
depends=("gnome-shell")
provides=("gnome-shell-extension-plank-to-dock")
conflicts=("gnome-shell-extension-plank-to-dock-git")
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=("002e04d422fd72c6072f33fb65f00ea8")

package() {
  install -d "$pkgdir/usr/share/gnome-shell/extensions" && cp -a "$srcdir/plank-to-dock-$pkgver/plank-to-dock@hardpixel.eu" "$_"
  install -d "$pkgdir/usr/share/glib-2.0" && mv "$pkgdir/usr/share/gnome-shell/extensions/plank-to-dock@hardpixel.eu/schemas" "$_"

  rm -f "$pkgdir/usr/share/glib-2.0/schemas/gschemas.compiled"
}
