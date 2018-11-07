# Maintainer: Wesley Moore <wes@wezm.net>
pkgname=tootle
pkgver=0.2.0
pkgrel=1
pkgdesc="GTK3 client for Mastodon"
arch=('x86_64')
url="https://github.com/bleakgrey/tootle"
license=('GPL3')
depends=('glib2' 'gtk3' 'hicolor-icon-theme' 'libsoup' 'granite' 'json-glib')
makedepends=('git' 'desktop-file-utils' 'hicolor-icon-theme' 'intltool' 'yelp-tools' 'gnome-common' 'gobject-introspection' 'meson' 'ninja' 'vala')
options=('!libtool')
source=("https://github.com/bleakgrey/$pkgname/archive/${pkgver//_/-}.tar.gz")
sha256sums=('e83c4a0539bf7b4b9d2b81d036ee0e8a69564b11c70f77ded5091955a89d2737')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  arch-meson build
  ninja -C build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  DESTDIR="${pkgdir}/" ninja -C build install
}
