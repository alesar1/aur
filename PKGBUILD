# Maintainer: Bruno Pagani (a.k.a. ArchangeGabriel) <bruno.n.pagani at gmail dot com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>
# Contributor: Ronald van Haren <ronald.archlinux.org>
# Contributor: tobias <tobias@archlinux.org>
# Contributor: Ben <ben@benmazer.net>

_pkgname=scribus
pkgname=${_pkgname}-devel
pkgver=1.5.2
pkgrel=1
pkgdesc="Desktop publishing software"
arch=('i686' 'x86_64')
url="https://www.scribus.net/"
license=('GPL')
depends=('hunspell' 'libcdr' 'libcups' 'libmspub' 'libpagemaker' 'graphicsmagick'
         'libvisio' 'podofo' 'poppler' 'python2' 'qt5-declarative'
         'desktop-file-utils' 'hicolor-icon-theme' 'shared-mime-info')
makedepends=('cmake' 'boost' 'mesa' 'qt5-tools')
optdepends=('tk: scripts based on tkinter')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("https://downloads.sourceforge.net/${_pkgname}/${_pkgname}-${pkgver}.tar.xz"{,.asc})
sha256sums=('ec5eec23aeda655d3a761cffb85853dcd2ede3973b9e62a1b3c28bd1093c74f5' 'SKIP')
validpgpkeys=('5086B8D68E70FDDF4C40045AEF7B95E7F60166DA') # Peter Linnell <plinnell@scribus.net>

prepare() {
    mkdir -p build

    cd ${_pkgname}-${pkgver}

    sed \
        -e 's|#!/usr/bin/python|#!/usr/bin/python2|' \
        -e 's|#!/usr/bin/env python|#!/usr/bin/env python2|' \
        -i scribus/plugins/scriptplugin/{samples,scripts}/*
}

build() {
    cd build
    cmake ../${_pkgname}-${pkgver} \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_SKIP_RPATH=ON \
        -DWANT_GRAPHICSMAGICK=1
    make
}

package() {
    cd build

    make DESTDIR="${pkgdir}" install

    cd ../${_pkgname}-${pkgver}

    install -Dm644 scribus.desktop "${pkgdir}"/usr/share/applications/scribus.desktop

    for i in 16x16 32x32 128x128 256x256 512x512 1024x1024
    do
        install -Dm644 resources/iconsets/artwork/icon_${i}.png "${pkgdir}"/usr/share/icons/hicolor/${i}/apps/scribus.png
    done
}
