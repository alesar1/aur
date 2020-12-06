# Maintainer: Maxime Gauduin <alucryd@archlinux.org>

pkgname=wingpanel-indicator-nightlight-git
pkgver=2.0.4.r9.g9a2241f
pkgrel=1
pkgdesc='Winganel Nightlight Indicator'
arch=(x86_64)
url=https://github.com/elementary/wingpanel-indicator-nightlight
license=(GPL2)
groups=(pantheon-unstable)
depends=(
  glib2
  glibc
  gtk3
  libwingpanel-3.0.so
)
makedepends=(
  git
  intltool
  meson
  vala
  wingpanel
)
provides=(wingpanel-indicator-nightlight)
conflicts=(wingpanel-indicator-nightlight)
source=(git+https://github.com/elementary/wingpanel-indicator-nightlight.git)
sha256sums=(SKIP)

pkgver() {
  cd wingpanel-indicator-nightlight

  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  arch-meson wingpanel-indicator-nightlight build
  ninja -C build
}

package() {
  DESTDIR="${pkgdir}" ninja -C build install
}

# vim: ts=2 sw=2 et:
