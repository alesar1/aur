# Maintainer: Gabriel Rauter <rauter.gabriel@gmail.com>

pkgname=gnome-usage
pkgver=v3.27.90+2+g3908ab6
pkgrel=1
pkgdesc="A nice way to view information about use of system resources"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://wiki.gnome.org/Apps/Usage"
license=('GPL3')
depends=('gtk3' 'libgtop' 'accountsservice')
makedepends=('git' 'vala' 'gobject-introspection' 'meson')
provides=("$pkgname")
conflicts=("$pkgname")
_tag=v3.27.90
source=("git+https://gitlab.gnome.org/GNOME/$pkgname.git#tag=$tag")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --tags | sed 's/-/+/g'
}

build() {
  rm -rf build
  arch-meson "$pkgname" build
  ninja -v -C build
}

package() {
  DESTDIR="$pkgdir/" ninja -C build install
}

# vim:set ts=2 sw=2 et:
