# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=phosh-git
pkgver=0.0.2.r54.gcdcb873
pkgrel=1
pkgdesc="A pure Wayland shell prototype for GNOME on mobile devices"
url="https://source.puri.sm/Librem5/phosh"
license=("GPL3")
arch=(i686 x86_64 armv6h armv7h)
depends=(gcr
         gnome-desktop
         libhandy
         libpulse
         upower
         wlroots)
makedepends=(ctags
             git
             libhandy
             meson
             vala)
provides=(phosh)
conflicts=(phosh)
source=("git+https://source.puri.sm/Librem5/phosh.git")
sha256sums=("SKIP")

pkgver() {
    cd phosh
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    arch-meson phosh build
    ninja -C build
}

check() {
    ninja -C build test
}

package() {
    DESTDIR="${pkgdir}" ninja -C build install
}
