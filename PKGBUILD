# Maintainer: LSUtigers3131 

pkgname=libpamac-full
_pkgname=libpamac
pkgver=11.2.0
pkgrel=5
epoch=1
pkgdesc="Library for Pamac package manager based on libalpm - flatpak and snap support enabled"
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/libpamac"
license=('GPL3')
depends=('pacman>=6.0' 'pacman<6.1' 'flatpak' 'snapd' 'snapd-glib' 'archlinux-appstream-data-pamac')
makedepends=('gettext' 'itstool' 'vala' 'meson' 'ninja' 'gobject-introspection' 'xorgproto' 'asciidoc')
options=(!emptydirs)
conflicts=('libpamac-aur' 'libpamac-flatpak' 'libpamac' 'libpamac-full-dev')
#Temp Fix
source=(git+https://gitlab.manjaro.org/applications/libpamac.git)
sha256sums=('SKIP')
#Stable
#source=(https://gitlab.manjaro.org/applications/libpamac/-/archive/$pkgver/$_pkgname-$pkgver.tar.bz2)
#sha256sums=('8f05c025934756f77a1a8f00e3ae5abb710fda078876f8e44e0b300fd49d1347')

build() {
  cd libpamac 
# cd $_pkgname-$pkgver
  mkdir -p builddir
  cd builddir
  meson setup --prefix=/usr --sysconfdir=/etc -Denable-snap=true -Denable-flatpak=true --buildtype=release
  # build
  ninja
}

package() {
  backup=('etc/pamac.conf')
  cd libpamac
# cd $_pkgname-$pkgver
  cd builddir
  DESTDIR="$pkgdir" ninja install
}

#vim:set ts=2 sw=2 et:
