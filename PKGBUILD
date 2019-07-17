# Maintainer: Sebastian Krzyszkowiak <dos@dosowisko.net>

pkgname=kgx-git
pkgver=0.0.1
pkgrel=1
pkgdesc="A minimal terminal for GNOME"
url="https://gitlab.gnome.org/ZanderBrown/kgx"
license=("GPL3")
arch=(i686 x86_64 armv6h armv7h)
depends=(vte3
         gtk3
         glib2
         libgtop)
makedepends=(
             git
             meson
             )
conflicts=(kgx)
provides=(kgx)
source=("git+https://gitlab.gnome.org/ZanderBrown/kgx.git")
sha256sums=('SKIP')

build() {
    rm -rf build
    arch-meson kgx build
    ninja -C build
}

check() {
    ninja -C build test
}

package() {
    DESTDIR="${pkgdir}" ninja -C build install
}
