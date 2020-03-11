# Maintainer: Jonas Møller <jonas.moeller2@protonmail.com>
pkgname=hawck-git
_pkgname=Hawck
pkgver=20200219
pkgrel=1
pkgdesc="Keyboard macro/rebinding daemon"
arch=("x86_64")
url="https://github.com/snyball/Hawck"
license=('BSD')
depends=("libnotify" "lua" "ruby" "python" "kbd" "hicolor-icon-theme")
makedepends=("meson" "gcc" "pkg-config" "catch2" "ninja" "git")
optdepends=("doxygen" "zenity" "polkit-gnome")
install=$pkgname.install
source=("git+https://github.com/snyball/Hawck.git")
md5sums=("SKIP")

pkgver() {
    cd $_pkgname
    TZ=UTC date -d @$(git log -1 --format=%ct) +%Y%m%d
}

prepare() {
    cd "$_pkgname"
}

build() {
    cd "$_pkgname"
    [ -d build ] || mkdir build
    cd build
    meson ..
    ninja
}

package() {
    cd "$_pkgname/build"
    meson configure -Dprefix=/usr
    DESTDIR="$(realpath "$pkgdir")" ninja install
}
