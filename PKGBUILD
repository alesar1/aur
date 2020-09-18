# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Contributor: Davide Depau <davide@depau.eu>
pkgname="obs-xdg-portal-git"
pkgver=0.1.2.r21.g8430c46
pkgrel=1
pkgdesc="OBS Studio plugin using the Desktop portal for Wayland & X11 screencasting"
arch=(x86_64)
url="https://gitlab.gnome.org/feaneron/obs-xdg-portal"
license=('GPL')
depends=('obs-studio-wayland' 'xdg-desktop-portal')
makedepends=('meson' 'git')
conflicts=("${pkgname%%-git}")
provides=("${pkgname%%-git}")
source=("git+$url")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%%-git}
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  arch-meson ${pkgname%%-git} build
  meson compile -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
