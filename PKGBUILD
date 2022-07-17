# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Mufeed Ali <lastweakness@tuta.io>
pkgname=dialect
pkgver=2.0.2
pkgrel=1
pkgdesc="A translation app for GNOME."
arch=('any')
url="https://apps.gnome.org/app/com.github.gi_lom.dialect"
license=('GPL3')
depends=('dbus-python' 'gst-python' 'libadwaita' 'libsoup3' 'python-gobject' 'python-gtts')
makedepends=('blueprint-compiler' 'git' 'gobject-introspection' 'meson')
checkdepends=('appstream-glib')
_commit=3c8351326bdb571bc55d29fb9e8712ea2e17afeb
source=("git+https://github.com/dialect-app/dialect.git#commit=$_commit"
        'git+https://github.com/dialect-app/po.git')
sha256sums=('SKIP'
            'SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd "$srcdir/$pkgname"
  git submodule init
  git config submodule.po.url "$srcdir/po"
  git submodule update
}

build() {
  arch-meson "$pkgname" build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  meson install -C build --destdir "$pkgdir"
}
