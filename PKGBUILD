# Maintainer: René Wagner <rwagner at rw-net dot de>
#
# Contributor: Vlad M. <vlad@archlinux.net>
# Contributor: Martin Wimpress <code@flexion.org>
#
pkgname="caja-dropbox"
pkgver="1.26.0"
pkgrel="1"
pkgdesc="Dropbox extension for Caja file manager "
arch=('i686' 'x86_64')
url="https://github.com/mate-desktop/caja-dropbox"
license=('custom:CC-BY-ND-3' 'GPL')
groups=('caja-extensions')
depends=('caja' 'glib2' 'libnotify' 'polkit' 'procps' 'pygtk' 'xdg-utils')
optdepends=('dropbox: Dropbox support')
makedepends=('mate-common' 'python-docutils')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('49e966a3afba40850285e4bd5e50f90b5986bd72894cf3636dccce95585c5595')

prepare() {
    cd "${pkgname}-${pkgver}"
    autoreconf -fi
}

build() {
    cd "${pkgname}-${pkgver}"
    ./autogen.sh
    ./configure \
        --prefix=/usr \
        --disable-static
    make
}

package() {
    cd "${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
    install -D -m 644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}

# vim:set ts=4 sw=4 et syn=sh ft=sh:
