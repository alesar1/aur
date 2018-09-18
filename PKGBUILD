# Maintainer: Philip Goto <philip.goto@gmail.com>
# Contributor: brainblasted <brainblasted at disroot dot org>

pkgname=libhandy
pkgver=0.0.3
pkgrel=1
pkgdesc="A library full of GTK+ widgets for mobile phones"
url="https://source.puri.sm/Librem5/libhandy"
license=(LGPL2.1)
arch=(i686 x86_64 armv6h armv7h)
depends=(gtk3)
makedepends=(pkg-config meson gobject-introspection)
conflicts=(libhandy-git)
source=("https://source.puri.sm/Librem5/libhandy/-/archive/v${pkgver}/libhandy-v${pkgver}.tar.gz")
md5sums=('d0239f0e4cf71dc3fa2c30b80da56924')

build() {
    rm -rf build
    arch-meson "libhandy-v${pkgver}" build -Dexamples=false -Dgtk_doc=true
    ninja -C build
    ninja -C build libhandy-doc
}

package() {
    DESTDIR="${pkgdir}" ninja -C build install
}
