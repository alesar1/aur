# Maintainer: Ignacy Kuchciński <ignacykuchcinski@gmail.com>

pkgname=sysprof-git
_pkgname=sysprof
pkgver=3.39.92+22+g9e823c5
pkgrel=1
pkgdesc="Kernel based performance profiler"
url="https://wiki.gnome.org/Apps/Sysprof"
license=(GPL)
arch=(x86_64)
depends=(glib2-git gtk3 polkit libdazzle)
makedepends=(yelp-tools git meson)
groups=(gnome-extra)
source=("git+https://gitlab.gnome.org/GNOME/sysprof.git")
sha256sums=('SKIP')
provides=(sysprof sysprof2-git)
conflicts=(sysprof sysprof2-git)
replaces=(sysprof2-git)

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/^sysprof-//;s/-/+/g'
}

prepare() {
  cd sysprof
}

build() {
  CFLAGS+=" -ffat-lto-objects"

  arch-meson sysprof build
  ninja -C build
}

check() {
  meson test -C build --print-errorlogs || :
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
