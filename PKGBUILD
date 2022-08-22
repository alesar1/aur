# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=gnome-shell-extension-systemd-manager
pkgver=8
pkgrel=1
pkgdesc="Gnome Shell extension to manage systemd services"
arch=("any")
url="https://github.com/hardpixel/systemd-manager"
license=("GPL")
depends=("gnome-shell")
provides=("gnome-shell-extension-systemd-manager")
conflicts=("gnome-shell-extension-systemd-manager-git")
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=('7830986256af74893af184b7dda07b97')

package() {
  install -d "$pkgdir/usr/share/gnome-shell/extensions" \
    && cp -a "$srcdir/systemd-manager-$pkgver/systemd-manager@hardpixel.eu" "$_"

  install -d "$pkgdir/usr/share/glib-2.0" \
    && mv "$pkgdir/usr/share/gnome-shell/extensions/systemd-manager@hardpixel.eu/schemas" "$_"

  rm -f "$pkgdir/usr/share/glib-2.0/schemas/gschemas.compiled"
}
