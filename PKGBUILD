# Maintainer: Jelle van der Waa <jelle@archlinux.org>

pkgname=python-pynest2d
pkgver=5.2.0
pkgrel=1
pkgdesc="Python bindings for libnest2d"
arch=(x86_64)
url="https://github.com/Ultimaker/pynest2d"
license=("LGPL")
depends=(python polyclipping nlopt)
makedepends=(sip4 cmake boost libnest2d python-nest2d)
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/Ultimaker/pynest2d/archive/${pkgver}.tar.gz)
sha512sums=('161d71ff0b075ca176e7ae6b9e87e0370248833e440a6e2efb16220e06e57e6e32e3311c58c304bc8bb13558c599539ee105114e8b5a881df57b56d177ad20d0')

prepare() {
  cd pynest2d-${pkgver}

  mkdir build
}

build() {
  cd pynest2d-${pkgver}/build
  cmake .. -DCMAKE_INSTALL_PREFIX=/usr
}

package() {
  cd pynest2d-${pkgver}/build
  make DESTDIR="${pkgdir}" install
}
