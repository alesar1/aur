# $Id$
# Maintainer: Iru Cai <mytbk920423@gmail.com>
# Contributor: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Contributor: Alexey D. <lq07829icatm@rambler.ru>

pkgname=psi-plus
pkgver=1.3.341
pkgrel=1
pkgdesc="Psi+ is a powerful XMPP client (Qt, C++) designed for the XMPP power users (with all plugins)"
url="https://psi-plus.com"
license=('GPL2')
arch=('x86_64')
depends=('qt5-base' 'qt5-webengine' 'qt5-multimedia' 'qt5-x11extras' 'qca-qt5'
	 'libidn' 'libxss' 'qt5-svg' 'hunspell' 'qtkeychain'
	 'libaxolotl-c-git' 'libotr' 'tidy')
makedepends=('patch' 'cmake')
source=("https://github.com/psi-plus/psi-plus-snapshots/archive/${pkgver}.tar.gz")
sha256sums=('c21431880d7eb2ec678dec3f1436c4dfe8ae60d700e803522c166d2d63aaede4')


build() {
  cd psi-plus-snapshots-${pkgver}
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release  \
	  -DENABLE_PLUGINS=ON -DBUILD_DEV_PLUGINS=ON ..
  make
}

package() {
  cd psi-plus-snapshots-${pkgver}/build

  make DESTDIR="$pkgdir" install
}
