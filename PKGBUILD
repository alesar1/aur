# Maintainer: Thomas Nordenmark <t.nordenmark@gmail.com>
# Developer: Travis Nickles <nickles.travis@gmail.com>

pkgname=antimicro
pkgver=2.21
pkgrel=1
pkgdesc="Graphical program used to map keyboard keys and mouse controls to gamepad buttons"
arch=('i686' 'x86_64')
url="https://github.com/Ryochan7/antimicro"
license=('GPL3')
depends=('libxkbcommon-x11' 'libxtst' 'qt5-base' 'sdl2')
makedepends=('cmake' 'gettext' 'itstool' 'qt5-tools')
install="${pkgname}.install"
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Ryochan7/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('5c78c37a8f854e24f6f9521569f8a1c9')

build() {
  cd ${pkgname}-${pkgver}

  mkdir -p build && cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DUSE_SDL_2=ON -DWITH_XTEST=ON \
      -DWITH_UINPUT=ON -DAPPDATA=ON ..
  make
}

package() {
  cd ${pkgname}-${pkgver}/build

  make DESTDIR="${pkgdir}" install
}

