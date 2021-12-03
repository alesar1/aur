# Maintainer: Gabriele Musco <gabmus@disroot.org>
# Upstream URL: https://gitlab.gnome.org/jwestman/blueprint-compiler

pkgname=blueprint-compiler-git
pkgver=d0cf13b
pkgrel=1
pkgdesc="A markup language for GTK user interfaces"
arch=('any')
url="https://jwestman.pages.gitlab.gnome.org/blueprint-compiler"
license=('LGPL3')
depends=('python' 'gtk4')
makedepends=('git' 'gobject-introspection' 'meson')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+https://gitlab.gnome.org/jwestman/blueprint-compiler.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags --always | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  arch-meson "${pkgname%-git}" build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  meson install -C build --destdir "$pkgdir"
}

