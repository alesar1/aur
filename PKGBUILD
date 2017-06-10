# Maintainer: Bruno Pagani (a.k.a. ArchangeGabriel) <bruno.n.pagani@gmail.com>
# Contributor: Antonio Rojas <arojas@archlinux.org>

_pkgname=spectacle
pkgname=${_pkgname}-light
pkgver=17.04.2
pkgrel=1
pkgdesc="KDE screenshot capture utility, without purpose"
arch=('i686' 'x86_64')
url="https://www.kde.org/applications/graphics/"
license=('GPL')
depends=('xcb-util-cursor' 'libkipi' 'kdeclarative')
makedepends=('extra-cmake-modules' 'kdoctools' 'python')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
groups=('kde-applications' 'kdegraphics')
source=("https://download.kde.org/stable/applications/${pkgver}/src/${_pkgname}-${pkgver}.tar.xz"{,.sig})
sha256sums=('0e561f55ef8d38c173f8684ad9ddf935113649151eff2c113227023ff9084bc1' 'SKIP')
validpgpkeys=('CA262C6C83DE4D2FB28A332A3A6A4DB839EAA6D7') # Albert Astals Cid <aacid@kde.org>

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../${_pkgname}-${pkgver} \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DKDE_INSTALL_LIBDIR=lib \
        -DBUILD_TESTING=OFF \
        -DKDEExperimentalPurpose_FOUND=OFF
    make
}

package() {
    cd build
    make DESTDIR="${pkgdir}" install
}

