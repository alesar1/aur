# $Id$
# Maintainer: Iru Cai <mytbk920423@gmail.com>
# Contributor: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Contributor: Alexey D. <lq07829icatm@rambler.ru>

pkgname=psi-plus
pkgver=1.3.425
pkgrel=1
pkgdesc="Psi+ is a powerful XMPP client (Qt, C++) designed for the XMPP power users (with all plugins)"
url="https://psi-plus.com"
license=('GPL2')
arch=('x86_64')
depends=('qt5-base' 'qt5-webengine' 'qt5-multimedia' 'qt5-x11extras' 'qca'
	 'libidn' 'libxss' 'qt5-svg' 'hunspell' 'qtkeychain'
	 'libaxolotl-c-git' 'libotr' 'tidy')
makedepends=('patch' 'cmake')
source=("https://github.com/psi-plus/psi-plus-snapshots/archive/${pkgver}.tar.gz" "otr-fix.patch")
sha256sums=('e889759c42b087ddd100946e487eec295ca287ee7f92bb64dc109eee16536ad7'
	'e1a7dfdf2d7d9cd7154e2a0fa5516ab9aea2d4a25201a85a2baf80c19c60e55b')


build() {
  cd psi-plus-snapshots-${pkgver}
  # https://github.com/psi-im/plugins/issues/43
  patch -p0 -i "${srcdir}/otr-fix.patch"
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
