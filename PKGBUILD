# Maintainer: gbr <gbr@protonmail.com>
# Maintainer: masutu <masutu dot arch at gmail dot com>
pkgname=ezthumb
pkgver=3.6.6
pkgrel=1
pkgdesc='A video thumbnail generator based on ffmpeg.'
arch=('i686' 'x86_64')
url='https://sourceforge.net/projects/ezthumb/'
license=('GPL3')
depends=('ffmpeg' 'gd' 'gtk2')
makedepends=('imagemagick')
source=("https://downloads.sourceforge.net/project/${pkgname}/${pkgname}-${pkgver}.tar.bz2")
sha256sums=('be052b722a3e6983c76c941ac87b6442cf167d416a090e2519dddfbade442568')

build() {
    cd "${pkgname}-${pkgver}"

    ./configure --prefix=/usr \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --disable-debug-build \
        --with-gui=gtk2 \
        --with-x

    make
    make gtkicons
}

package() {
    cd "${pkgname}-${pkgver}"

    for i in 16 22 24 32 48 64 128 256; do
        install -Dm644 "external/icons/${pkgname}${i}.png" "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/${pkgname}.png"
    done
    install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -Dm644 "${pkgname}.1" "${pkgdir}/usr/share/man/man1/${pkgname}.1"
    install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

# vim:set ts=4 sw=4 et:
