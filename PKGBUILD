# Maintainer: Bruno Pagani (a.k.a. ArchangeGabriel) <bruno.n.pagani@gmail.com>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Antonio Rojas
# Contributor: Lev Lybin <lev.lybin@gmail.com>

_pkgname=powerdevil
pkgname=powerdevil-light
pkgver=5.15.3
pkgrel=1
pkgdesc="Manages the power consumption settings of a Plasma Shell. Light version without NetworkManager and Bluez support/dependencies."
arch=('i686' 'x86_64')
url="https://www.kde.org/workspaces/plasmadesktop/"
license=('LGPL')
depends=('plasma-workspace' 'libkscreen')
makedepends=('extra-cmake-modules' 'kdoctools')
conflicts=('powerdevil')
provides=('powerdevil')
source=("https://download.kde.org/stable/plasma/${pkgver}/${_pkgname}-${pkgver}.tar.xz"{,.sig})
sha256sums=('24acaef3e78b8cea665ca12ade119d8e589de74cc5bf0bdcc7398201e998f1b8' 'SKIP')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E'  # Jonathan Riddell
              '0AAC775BB6437A8D9AF7A3ACFE0784117FBCE11D'  # Bhushan Shah <bshah@kde.org>
              'D07BD8662C56CB291B316EB2F5675605C74E02CF'  # David Edmundson (David at KDE) <davidedmundson@kde.org>
              '1FA881591C26B276D7A5518EEAAF29B42A678C20') # Marco Martin

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../${_pkgname}-${pkgver} \
        -DKF5NetworkManagerQt_FOUND=OFF \
        -DKF5BluezQt_FOUND=OFF \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DKDE_INSTALL_LIBDIR=lib \
        -DKDE_INSTALL_LIBEXECDIR=lib \
        -DCMAKE_VERBOSE_MAKEFILE=OFF \
        -DBUILD_TESTING=OFF
    make
}

package() {
    cd build
    make DESTDIR="${pkgdir}" install
}
