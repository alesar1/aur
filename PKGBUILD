# Maintainer: Igor Dyatlov <dyatlov.igor@protonmail.com>

pkgname=extension-manager
pkgver=0.2.2
pkgrel=1
pkgdesc="A native tool for browsing, installing, and managing GNOME Shell Extensions"
arch=('x86_64')
url="https://github.com/mjakeman/extension-manager"
license=('GPL3')
depends=('gtk4>=1:4.6.0' 'libadwaita' 'libsoup3' 'json-glib')
makedepends=('meson' 'blueprint-compiler-git' 'gobject-introspection')
checkdepends=('appstream-glib')
source=($url/archive/v$pkgver.tar.gz)
b2sums=('bd3a945761da27aa5e9c701cc78b8b0d5404a94f18f988281c152223e470752417a20c7f6b86409392ada6bfce2ea4615d32ed38f4071df2f4dc9e102d693a4d')

build() {
  arch-meson "${pkgname%-git}-$pkgver" build
  meson compile -C build
}

check() {
  meson test -C build
}

package() {
  meson install -C build --destdir "$pkgdir"
}
