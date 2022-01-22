# Maintainer: Mazhar Hussain <mmazharhussainkgb1145@gmail.com>
pkgname=gdm-settings-git
pkgver=113.3ff2278
pkgrel=1
pkgdesc="A settings app for Gnome's Login Manager (GDM)"
arch=(any)
url="https://github.com/realmazharhussain/gdm-settings"
license=('GPL3')
depends=('libadwaita' 'glib2' 'python-gobject')
makedepends=('git')
provides=('gdm-settings')
conflicts=('gdm-settings')
backup=()
source=("$pkgname"::"git+$url")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package() {
  cd "$srcdir/$pkgname"
  DESTDIR="$pkgdir" PREFIX=/usr ./install.sh --relative=no
}
