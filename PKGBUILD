# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=mousai
pkgver=0.6.4
pkgrel=1
pkgdesc="Simple application for identifying songs"
arch=('x86_64')
url="https://github.com/SeaDve/Mousai"
license=('GPL3')
depends=('gstreamer' 'gtk4' 'libadwaita-git' 'python-gobject' 'python-requests')
makedepends=('meson')
checkdepends=('appstream-glib')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('6b2b33c1d361c4ec1e2a32610eb212e83260680b4b3cff3af12e38ac57a73c18')

build() {
  arch-meson Mousai-$pkgver build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
