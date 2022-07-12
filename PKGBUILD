# Maintainer: LSUtigers3131 
# Maintainer: Luke Short <ekultails at gmail dot com>

pkgname=libpamac-full
_pkgname=libpamac
pkgver=11.3.1
pkgrel=1
epoch=1
pkgdesc="Library for Pamac package manager based on libalpm - flatpak and snap support enabled"
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/libpamac"
license=('GPL3')
depends=('pacman>=6.0' 'pacman<6.1' 'flatpak' 'snapd' 'snapd-glib' 'archlinux-appstream-data-pamac')
makedepends=('gettext' 'itstool' 'vala' 'meson' 'ninja' 'gobject-introspection' 'xorgproto' 'asciidoc')
options=(!emptydirs)
conflicts=('libpamac-aur' 'libpamac-flatpak' 'libpamac' 'libpamac-full-dev')
source=(https://gitlab.manjaro.org/applications/libpamac/-/archive/$pkgver/$_pkgname-$pkgver.tar.bz2)
sha256sums=('92fb2dc550df33cd88969e004fed5a1e2300212f6643f21617e117019ba03109')

build() {
  cd $_pkgname-$pkgver
  mkdir -p builddir
  cd builddir
  meson setup --prefix=/usr --sysconfdir=/etc -Denable-snap=true -Denable-flatpak=true --buildtype=release
  # build
  ninja
}

package() {
  backup=('etc/pamac.conf')
  cd $_pkgname-$pkgver
  cd builddir
  DESTDIR="$pkgdir" ninja install
}

#vim:set ts=2 sw=2 et:
