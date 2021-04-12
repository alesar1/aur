# Maintainer: Jonian Guveli <jonian@hardpixel.eu>
# Contributor: Evan Anderson <evananderson@thelinuxman.us>
# Contributor: Ner0

pkgname=menulibre
pkgver=2.2.1
pkgrel=3
pkgdesc="An advanced menu editor that provides modern features in a clean, easy-to-use interface"
arch=("any")
url="https://github.com/bluesabre/menulibre"
license=("GPL3")
depends=("gdk-pixbuf2" "gnome-menus" "gsettings-desktop-schemas" "gtksourceview3" "python" "python-gobject" "python-psutil" "python-xdg" "xdg-utils")
makedepends=("python-distutils-extra")
install=menulibre.install
source=("$pkgname-$pkgver.tar.gz::$url/releases/download/$pkgname-$pkgver/$pkgname-$pkgver.tar.gz")
md5sums=("8460ea844a5998c5f722bccb5ce8627a")

package() {
  sed -i '29 i\import gi' "$srcdir/$pkgname-$pkgver/menulibre/MenulibreApplication.py"
  sed -i '30 i\gi.require_version("Gtk", "3.0")' "$srcdir/$pkgname-$pkgver/menulibre/MenulibreApplication.py"

  sed -i '21 i\import gi' "$srcdir/$pkgname-$pkgver/menulibre_lib/helpers.py"
  sed -i '22 i\gi.require_version("Gtk", "3.0")' "$srcdir/$pkgname-$pkgver/menulibre_lib/helpers.py"

  cd "$pkgname-$pkgver" && python setup.py install --root="$pkgdir/" --optimize=1
}
