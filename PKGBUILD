# Maintainer: Emily Maré (emileet) <emileet@plsnobully.me>

pkgname=obs-ndi
pkgver=4.9.0
_obsver=25.0.8
pkgrel=1
pkgdesc="Network A/V in OBS Studio with NewTek's NDI technology"
arch=('x86_64')
license=('GPL2')
url="https://github.com/Palakis/${pkgname}"
provides=('obs-ndi')
conflicts=('obs-ndi-bin' 'obs-ndi-git')
depends=('avahi' 'ndi-sdk' 'obs-studio')
makedepends=('cmake')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Palakis/obs-ndi/archive/${pkgver}.tar.gz"
        "obs-studio-${_obsver}.tar.gz::https://github.com/obsproject/obs-studio/archive/${_obsver}.tar.gz")
sha256sums=('90cbf0b24966bc2b843bf1042b3acb632e617c6741a89a715d7d8b90550087cb'
            'ef1179c23256c312212e3dce9083d4fa67751db05c3001ad824e2b6995943941')

build() {
    cd ${srcdir}/${pkgname}-${pkgver}

    cmake -B build -DLIBOBS_INCLUDE_DIR=${srcdir}/obs-studio-${_obsver}/libobs -DCMAKE_INSTALL_PREFIX=/usr
    cmake --build build
}

package() {
    cd ${srcdir}/${pkgname}-${pkgver}/build
    make DESTDIR=${pkgdir} install

    install -Dm644 ../LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
