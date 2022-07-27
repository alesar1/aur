# Contributor: Andrew Querol <andrew@querol.me>
# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>

pkgname=gnome-browser-connector
pkgver=42.0
pkgrel=1
pkgdesc='Native browser connector for integration with extensions.gnome.org'
arch=(any)
url="https://wiki.gnome.org/Projects/GnomeShellIntegration"
license=(GPL3)
depends=(gnome-shell python-gobject)
makedepends=(meson git)
provides=(chrome-gnome-shell)
replaces=(chrome-gnome-shell gs-chrome-connector)
conflicts=(chrome-gnome-shell gs-chrome-connector)
_commit=0a3045c16f7add7c867f2681debfd4b870d4163d # tags/v42.0
source=(git+https://gitlab.gnome.org/nE0sIghT/$pkgname.git#commit=$_commit)
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  python3 -c 'from gnome_browser_connector.version import __version__; print(__version__, end="");' | sed 's|\.rc|rc|'
}

prepare() {
  cd $pkgname
}

build() {
  arch-meson $pkgname build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  meson install --destdir="$pkgdir" -C build
}
