# Maintainer: Philip Goto <philip.goto@gmail.com>

_pkgname=fragments
pkgname=$_pkgname-git
pkgver=latest
pkgrel=1
pkgdesc="A GTK3 BitTorrent client following the GNOME Human Interface Guidelines"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/haecker-felix/Fragments"
license=('GPL3')
depends=('gtk3')
makedepends=('git'
             'gobject-introspection'
             'libdazzle'
             'meson'
             'vala')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/haecker-felix/Fragments.git")
md5sums=('SKIP')

prepare() {
    cd Fragments
    git submodule update --init --recursive
}
pkgver() {
    cd Fragments
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    rm -rf build
    arch-meson Fragments build
    ninja -v -C build
}

package() {
    DESTDIR="$pkgdir/" ninja -C build install
}
