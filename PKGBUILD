# Maintainer: gbr <gbr@protonmail.com>
# Contributor: Lubosz Sarnecki <lubosz0@gmail.com>
# Original Package: Martin Wimpress <code@flexion.org>

_pkgbase=nvidia-settings
pkgname=lib32-libxnvctrl
pkgver=440.82
pkgrel=1
pkgdesc='NVIDIA NV-CONTROL X extension (32-bit)'
url='https://github.com/NVIDIA/nvidia-settings'
arch=('x86_64')
license=('GPL2')
depends=('lib32-gcc-libs' 'lib32-libxext')
source=(${_pkgbase}-${pkgver}.tar.gz::https://github.com/NVIDIA/nvidia-settings/archive/${pkgver}.tar.gz
        libxnvctrl_so.patch)
sha512sums=('2974a82b63a55c9129e171663ef57e2b2fcf47750e0b725eefef5e176a25ad08f47dd5cfd1875bd0002d89b3b1fb24bd9bbc034c5feeefc6256052bf7d04e997'
            '91ff94736063b911c83b8876fe3e3778db82e0ffe0102036d81a3a6e872ca44a585914646fcbbbe399cd63aa17685fc7f73263ec4f4084f48768ca4d704037fa')

prepare() {
    export PREFIX=/usr
    export OUTPUTDIR=out
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='i686-pc-linux-gnu-pkg-config'
    cd "${_pkgbase}-${pkgver}"
    patch -p0 < "${srcdir}/libxnvctrl_so.patch"
}

build() {
    cd "${_pkgbase}-${pkgver}"
    make -C src/libXNVCtrl
}

package() {
    cd "${_pkgbase}-${pkgver}"
    cd src/libXNVCtrl
    install -d "${pkgdir}/usr/lib32"
    cp -Pr out/libXNVCtrl.* -t "${pkgdir}/usr/lib32"
}
