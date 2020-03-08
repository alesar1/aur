# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>

pkgname=datovka
pkgver=4.15.0
pkgrel=1
pkgdesc="GUI application for a 'Databox' - an electronic communication interface endorsed by the Czech government"
arch=('i686' 'x86_64')
url='https://www.datovka.cz/'
license=('LGPL')
depends=('qt5-base' 'qt5-svg' 'libisds' 'openssl' 'hicolor-icon-theme')
makedepends=('qt5-tools' 'patch')
source=(https://secure.nic.cz/files/datove_schranky/$pkgver/$pkgname-$pkgver.tar.xz
        https://gitlab.labs.nic.cz/datovka/datovka/uploads/38d47477a2bad75a6058e988cc50f08a/datovka.cpp.patch)
sha256sums=('2123ad7ef3b645868d6bcb5a2213f2d5107f45229dcc787124c3abe82d0e61b8'
            'e2cc0b97c4c2bb14e26af7893f54cd5a56b34d5e16f14dd46f188788f7b5ce3b')

prepare() {
  cd "${srcdir}"/$pkgname-$pkgver
  patch -Np0 -i "${srcdir}"/datovka.cpp.patch
}

build() {
  cd "${srcdir}"/$pkgname-$pkgver

  lrelease-qt5 datovka.pro
  qmake-qt5 PREFIX=/usr
  make
}

package() {
  cd "${srcdir}"/$pkgname-$pkgver

  make INSTALL_ROOT="${pkgdir}" install
}
