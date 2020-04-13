# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=phosh
pkgver=0.2.2
pkgrel=2
pkgdesc="A pure Wayland shell prototype for GNOME on mobile devices"
url="https://source.puri.sm/Librem5/phosh"
license=("GPL3")
arch=(i686 x86_64 arm armv6h armv7h aarch64)
depends=('feedbackd'
         'gcr'
         'libhandy'
         'libnm'
         'libpulse'
         'libsecret'
         'phoc'
         'upower')
makedepends=('ctags'
             'git'
             'meson'
             'vala')
source=("git+https://source.puri.sm/Librem5/phosh.git#tag=v${pkgver}"
        "git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git")
sha256sums=('SKIP'
            'SKIP')

prepare() {
    cd phosh

    git submodule init
    git config --local submodule.subprojects/gvc.url "$srcdir/libgnome-volume-control"
    git submodule update
}

build() {
    rm -rf build
    arch-meson phosh build
    ninja -C build
}

# check() {
#     ninja -C build test
# }

package() {
    DESTDIR="${pkgdir}" ninja -C build install
}
