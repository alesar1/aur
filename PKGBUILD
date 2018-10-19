# Maintainer: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>

pkgname=dav1d-git
pkgver=r258.ce6f1f7
pkgrel=1
license=('custom:BSD')
pkgdesc='AV1 cross-platform Decoder, focused on speed and correctness'
url='https://code.videolan.org/videolan/dav1d'
arch=('x86_64')
provides=('dav1d')
conflicts=('dav1d')
makedepends=('meson' 'ninja' 'git' 'nasm')
source=('git+https://code.videolan.org/videolan/dav1d')
sha256sums=('SKIP')

pkgver () {
    cd dav1d
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare () {
    cd dav1d
    meson build \
        --prefix=/usr \
        --buildtype=release
}

build () {
    cd dav1d
    ninja -C build
}

package () {
    cd dav1d
    DESTDIR="${pkgdir}" ninja -C build install
    install -Dm644 COPYING "${pkgdir}"/usr/share/licenses/${pkgname}/COPYING
}
